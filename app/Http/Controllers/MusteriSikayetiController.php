<?php

namespace App\Http\Controllers;

use App\BayiModel;
use App\MusteriSikayetiModel;
use App\SikayetDurumModel;
use App\SikayetKategoriModel;
use App\SikayetTuruModel;
use App\BolumModel;
use App\UrunModel;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class MusteriSikayetiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    /* BU KONTROLLERİN ETKİLEDİĞİ TÜM SAYFALARDA OTURUM AÇARAK ERİŞİMİ AKTİF HALE GETİRİYORUZ */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        /* MODELİN BAĞLI OLDUĞU TABLODAN TÜM VERİLERİ ÇEKİYORUZ */
        $musteri_sikayetleri = MusteriSikayetiModel::all()->sortByDesc('sikayet_tarihi');
        /* MODELİMİZ DİĞER TABLOLARLA İLİŞKİLİ OLDUĞU İÇİN O TABLOLARDANDA TÜM VERİLERİ ÇEKİYORUZ */
        $bolumler = BolumModel::all();
        $sikayet_turleri = SikayetTuruModel::all();
        $urunler = UrunModel::all();
        $bayiler = BayiModel::all();
        $durumlar = SikayetDurumModel::all();
        /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
        return view ('musterisikayeti.index',compact('musteri_sikayetleri','bolumler', 'sikayet_turleri', 'urunler', 'bayiler','durumlar'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $bolumler = BolumModel::where('bolum_sikayet_alabilirlik','on')->get();
        $sikayet_turleri = SikayetTuruModel::all()->sortBy('sikayet_turu_adi');
        $urunler = UrunModel::all()->sortBy('urun_adi');
        $bayiler = BayiModel::all()->sortBy('bayi_adi');
        return view('musterisikayeti.create',compact('bolumler', 'sikayet_turleri', 'urunler', 'bayiler'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function  sikayet_urunu($id)
    {
       $data = UrunModel::where('urun_bolum',$id)->get();
        return Response::json($data);
    }

    public function  sikayet_turu($id)
    {
        $data = SikayetTuruModel::where('sikayet_turu_bolum',$id)->get();
        return Response::json($data);
    }

    public function store(Request $request)
    {
        $benzersiz=date('Y-m-d',strtotime($request->sikayet_tarihi)).",".$request->sikayet_bayi.",".$request->sikayet_urun.",".$request->sikayet_turu;
        $request['sikayet_benzersiz'] = $benzersiz;
        //
        $benzersiz_array_id = MusteriSikayetiModel::where('sikayet_benzersiz', $benzersiz)->get();
        $veri = "";
        foreach ($benzersiz_array_id as $benzersiz_array){
           $veri = "<div class='row p-2'><button class='btn btn-danger' target='_blank' onclick=\"window.location.href='".$benzersiz_array->id."'\">Şikayet No: ".$benzersiz_array->id." -> Şikayete Görmek için Tıkla</button></div>".$veri;
        }

        $rules = [
            'sikayet_tarihi'=>'required',
            'sikayet_bolum'=>'required',
            'sikayet_bayi'=>'required',
            'sikayet_urun'=>'required',
            'sikayet_turu'=>'required',
            'sikayet_kategorisi'=>'required',
            'sikayet_benzersiz' => 'unique:musterisikayeti'
        ];

        $messages = [
            'sikayet_tarihi.required'    => "Şikayet tarihi alanını doldurmanız gereklidir",
            'sikayet_bolum.required'    => "Şikayetin ilgili olduğu bölümü seçmeniz gereklidir",
            'sikayet_bayi.required'    => "Şikayetin geldiği bayiyi seçmeniz gereklidir",
            'sikayet_urun.required'    => "Şikayetin geldiği ürünü seçmeniz gereklidir",
            'sikayet_turu.required'    => "Şikayetin türünü seçmeniz gereklidir",
            'sikayet_kategorisi.required'    => "Şikayet kategorisini seçmeniz gereklidir",
            'sikayet_benzersiz.unique' => "Aynı şikayet daha önce girilmiş, lütfen kayıtlarınızı kontrol ediniz<br>".$veri
        ];

        $this->validate($request, $rules,$messages);


        $musteri_sikayeti = new MusteriSikayetiModel();
        $musteri_sikayeti->sikayet_tarihi  = date('Y-m-d',strtotime($request->sikayet_tarihi));
        $musteri_sikayeti->sikayet_bolum  = $request->sikayet_bolum  ;
        $musteri_sikayeti->sikayet_bayi  = $request->sikayet_bayi  ;
        $musteri_sikayeti->sikayet_urun  = $request->sikayet_urun  ;
        $musteri_sikayeti->sikayet_turu  = $request->sikayet_turu  ;
        $musteri_sikayeti->sikayet_kategorisi  = $request->sikayet_kategorisi  ;
        $musteri_sikayeti->sikayet_durum  = $request->sikayet_durum  ;
        $musteri_sikayeti->sikayet_benzersiz = $benzersiz;
        $musteri_sikayeti->user_id  = Auth::user()->id ;
        $musteri_sikayeti->save();

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $sikayet_turu =$request->sikayet_turu != null ? SikayetTuruModel::find($request->sikayet_turu)->sikayet_turu_adi : "Tanımsız";
        $urun = $request->sikayet_urun != null ? UrunModel::find($request->sikayet_urun)->urun_adi : "Tanımsız";
        $bayi = $request->sikayet_bayi != null ? BayiModel::find($request->sikayet_bayi)->bayi_adi : "Tanımsız";
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Müşteri Şikayeti Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">TARİH</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$request->sikayet_tarihi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">BAYİ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$bayi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun.'</div>\'+
                                 \'</div>\'+
                                  \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ŞİKAYET</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$sikayet_turu.'</div>\'+
                                 \'</div>\'+
                        \'</div>';

        return redirect()->route('musteri-sikayeti.create')->with('mesaj', $mesaj)->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $sikayet = [];
        $sikayet['key'] = MusteriSikayetiModel::find($id);
        $sikayet['bolum'] = BolumModel::find($sikayet['key']->bolum);
        $sikayet['bayi'] = BayiModel::find($sikayet['key']->sikayet_bayi);
        $sikayet['urun'] = UrunModel::find($sikayet['key']->sikayet_urun);
        $sikayet['tur'] = SikayetTuruModel::find($sikayet['key']->sikayet_turu);
        $sikayet['kategori'] = SikayetKategoriModel::find($sikayet['key']->sikayet_kategori);
        $sikayet['durum'] = SikayetDurumModel::find($sikayet['key']->sikayet_durum);
        $sikayet['kullanici'] = User::find($sikayet['key']->user_id);

        return view('musterisikayeti.view',compact('sikayet'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $musteri_sikayeti = MusteriSikayetiModel::find($id);
        $bolumler = BolumModel::all();
        $sikayet_turleri = SikayetTuruModel::all();
        $urunler = UrunModel::all();
        $bayiler = BayiModel::all();
        $durumlar = SikayetDurumModel::all();

        return view('musterisikayeti.edit',compact('musteri_sikayeti','bolumler', 'sikayet_turleri', 'urunler', 'bayiler','durumlar'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $benzersiz=date('Y-m-d',strtotime($request->get('sikayet_tarihi'))).",".$request->get('sikayet_bayi').",".$request->get('sikayet_urun').",".$request->get('sikayet_turu');
        $request['sikayet_benzersiz'] = $benzersiz;
        //
        $benzersiz_array_id = MusteriSikayetiModel::where('sikayet_benzersiz', $benzersiz)->get();
        $veri = "";
        foreach ($benzersiz_array_id as $benzersiz_array){
            $veri = "<div class='row p-2'><button class='btn btn-danger' target='_blank' onclick=\"window.location.href='".$benzersiz_array->id."'\">Şikayet No: ".$benzersiz_array->id." -> Şikayete Görmek için Tıkla</button></div>".$veri;
        }

        $rules = [
            'sikayet_tarihi'=>'required',
            'sikayet_bolum'=>'required',
            'sikayet_bayi'=>'required',
            'sikayet_urun'=>'required',
            'sikayet_turu'=>'required',
            'sikayet_kategorisi'=>'required',
            'sikayet_benzersiz' => 'unique:musterisikayeti,sikayet_benzersiz,'.$id
        ];

        $messages = [
            'sikayet_tarihi.required'    => "Şikayet tarihi alanını doldurmanız gereklidir",
            'sikayet_bolum.required'    => "Şikayetin ilgili olduğu bölümü seçmeniz gereklidir",
            'sikayet_bayi.required'    => "Şikayetin geldiği bayiyi seçmeniz gereklidir",
            'sikayet_urun.required'    => "Şikayetin geldiği ürünü seçmeniz gereklidir",
            'sikayet_turu.required'    => "Şikayetin türünü seçmeniz gereklidir",
            'sikayet_kategorisi.required'    => "Şikayet kategorisini seçmeniz gereklidir",
            'sikayet_benzersiz.unique' => "Aynı şikayet daha önce girilmiş, lütfen kayıtlarınızı kontrol ediniz<br>".$veri
        ];

        $this->validate($request, $rules,$messages);


        $musteri_sikayeti = MusteriSikayetiModel::find($id);
        $musteri_sikayeti->update([
        'sikayet_tarihi' =>date('Y-m-d',strtotime($request->get('sikayet_tarihi'))),
        'sikayet_bolum' =>$request->get('sikayet_bolum'),
        'sikayet_bayi' =>$request->get('sikayet_bayi'),
        'sikayet_urun' =>$request->get('sikayet_urun'),
        'sikayet_turu' =>$request->get('sikayet_turu'),
        'sikayet_kategorisi' =>$request->get('sikayet_kategorisi'),
        'sikayet_durum' =>$request->get('sikayet_durum'),
        'sikayet_benzersiz' =>$benzersiz
        ]);

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $sikayet_turu =$request->get('sikayet_turu') != null ? SikayetTuruModel::find($request->get('sikayet_turu'))->sikayet_turu_adi : "Tanımsız";
        $urun = $request->get('sikayet_urun') != null ? UrunModel::find($request->get('sikayet_urun'))->urun_adi : "Tanımsız";
        $bayi = $request->get('sikayet_bayi') != null ? BayiModel::find($request->get('sikayet_bayi'))->bayi_adi : "Tanımsız";
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Güncellenen Müşteri Şikayeti Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">TARİH</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$request->get('sikayet_tarihi').'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">BAYİ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$bayi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun.'</div>\'+
                                 \'</div>\'+
                                  \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ŞİKAYET</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$sikayet_turu.'</div>\'+
                                 \'</div>\'+
                        \'</div>';


        return redirect()->route('musteri-sikayeti.index')->with('mesaj',$mesaj);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $musteri_sikayeti = MusteriSikayetiModel::find($id);
        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $sikayet_turu =$musteri_sikayeti->sikayet_turu != null ? SikayetTuruModel::find($musteri_sikayeti->sikayet_turu)->sikayet_turu_adi : "Tanımsız";
        $urun = $musteri_sikayeti->sikayet_urun != null ? UrunModel::find($musteri_sikayeti->sikayet_urun)->urun_adi : "Tanımsız";
        $bayi = $musteri_sikayeti->sikayet_bayi != null ? BayiModel::find($musteri_sikayeti->sikayet_bayi)->bayi_adi : "Tanımsız";
        $mesaj=[];
        $mesaj['tur']="warning";
        $mesaj['title']="Silinen Müşteri Şikayeti Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">TARİH</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$musteri_sikayeti->sikayet_tarihi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">BAYİ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$bayi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun.'</div>\'+
                                 \'</div>\'+
                                  \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ŞİKAYET</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$sikayet_turu.'</div>\'+
                                 \'</div>\'+
                        \'</div>';

        MusteriSikayetiModel::find($id)->delete();

        return redirect()->route('musteri-sikayeti.index')->with('mesaj',$mesaj);
    }
}
