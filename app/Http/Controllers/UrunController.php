<?php

namespace App\Http\Controllers;

use App\StandartModel;
use App\UrunModel;
use App\UrunTuruModel;
use App\BolumModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UrunController extends Controller
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
        $urunler = UrunModel::all()->sortBy("urun_adi");
        /* MODELİMİZ DİĞER TABLOLARLA İLİŞKİLİ OLDUĞU İÇİN O TABLOLARDANDA TÜM VERİLERİ ÇEKİYORUZ */
        $bolumler = BolumModel::all();
        $urunturleri = UrunTuruModel::all();
        $standartlar = StandartModel::all();
        /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
        return view ('urun.index',compact('urunler','bolumler','urunturleri','standartlar'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /* YENİ KAYIT OLUŞTURMA FONKSİYONU */
    public function create()
    {
        /**ÜZERİNE ÜRÜN KAYDI YAPILABİLEN BÖLÜMLERİ GÖSTERMEK İÇİN*/
        $bolumler = BolumModel::where('bolum_urun_kaydedilebilirlik','=','on')->get();
        /* MODELİMİZ DİĞER TABLOLARLA İLİŞKİLİ OLDUĞU İÇİN O TABLOLARDANDA TÜM VERİLERİ ÇEKİYORUZ */
        $urunturleri = UrunTuruModel::all()->sortBy("urun_turu_adi");
        $standartlar = StandartModel::all()->sortBy("standart_kodu");
        /* YENİ KAYIT OLUŞTURMA BLADE Nİ ÇAĞIRIYORUZ */
        return view ('urun.create',compact('bolumler','urunturleri','standartlar'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $rules = [
            'urun_adi'=>'required|unique:urun',
            'urun_turu'=>'required',
            'urun_bolum'=>'required',
            'urun_raf_omru'=>'required',
        ];

        $messages = [
            'urun_adi.required'    => "Ürün adı alanını doldurmanız gereklidir",
            'urun_adi.unique'    => "Girdiğiniz ürün adı mevcut, başka bir tane giriniz",
            'urun_turu.required'    => "Ürün türünü seçmeniz gereklidir",
            'urun_bolum.required'    => "Ürünün ilgili bölümünü seçmeniz gereklidir",
            'urun_raf_omru.required'    => "Ürünün raf ömrünü belirlemeniz gereklidir"
        ];

        $this->validate($request, $rules,$messages);

        $urun = new UrunModel();
        $urun->urun_adi = $request->urun_adi ;
        $urun->urun_turu = $request->urun_turu ;
        $urun->urun_bolum = $request->urun_bolum ;
        $urun->urun_standart = $request->urun_standart ;
        $urun->urun_raf_omru = $request->urun_raf_omru ;
        $urun->urun_aciklama = $request->urun_aciklama ;
        $urun->user_id = Auth::user()->id ;
        $urun-> save();
        /**  ALTERNATİF KAYIT YÖNTEMİ
         * UrunModel::create($request->all()); */

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $bolum = $request->urun_bolum != null ? BolumModel::find($request->urun_bolum)->bolum_adi : "Tanımsız";
        $urun_turu = $request->urun_turu != null ? UrunTuruModel::find($request->urun_turu)->urun_turu_adi : "Tanımsız";
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Ürün Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN ADI</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$request->urun_adi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN TÜRÜ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun_turu.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">İLGİLİ BÖLÜM</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$bolum.'</div>\'+
                                 \'</div>\'+
                        \'</div>';


        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect()->route('urun.create')->with('mesaj', $mesaj);
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $urunler = UrunModel::find($id);
        /**ÜZERİNE ÜRÜN KAYDI YAPILABİLEN BÖLÜMLERİ GÖSTERMEK İÇİN*/
        $bolumler = BolumModel::where('bolum_urun_kaydedilebilirlik','=','on')->get();
        /* MODELİMİZ DİĞER TABLOLARLA İLİŞKİLİ OLDUĞU İÇİN O TABLOLARDANDA TÜM VERİLERİ ÇEKİYORUZ */
        $urunturleri = UrunTuruModel::all();
        $standartlar = StandartModel::all();
        /* DÜZENLEMELERİ YAPMAK İÇİN BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE URL DEN ÇEKTİĞİMİZ ID İLE BİRLİKTE İÇERİĞİMİ YOLLUYORUZ */
        return view ('urun.edit',compact('urunler','bolumler','standartlar','urunturleri'));
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
        $rules = [
            'urun_adi'=>'required|unique:urun,urun_adi,'.$id,
            'urun_turu'=>'required',
            'urun_bolum'=>'required',
            'urun_raf_omru'=>'required',
        ];

        $messages = [
            'urun_adi.required'    => "Ürün adı alanını doldurmanız gereklidir",
            'urun_adi.unique'    => "Girdiğiniz ürün adı mevcut, başka bir tane giriniz",
            'urun_turu.required'    => "Ürün türünü seçmeniz gereklidir",
            'urun_bolum.required'    => "Ürünün ilgili bölümünü seçmeniz gereklidir",
            'urun_raf_omru.required'    => "Ürünün raf ömrünü belirlemeniz gereklidir"
        ];

        $this->validate($request, $rules,$messages);

           /* DÜZENLE BLADE SİNDEN GELEN ID NIN SAHİP OLDUĞU TABLO SATIRI BULUNUR */
        $urun = UrunModel::find($id);

        $urun->update([
            'urun_adi' =>$request->get('urun_adi'),
            'urun_turu' =>$request->get('urun_turu'),
            'urun_bolum' =>$request->get('urun_bolum'),
            'urun_standart' =>$request->get('urun_standart'),
            'urun_raf_omru' =>$request->get('urun_raf_omru'),
            'urun_aciklama' =>$request->get('urun_aciklama')
        ]);

        /** UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR
         * $guncelle->update($request->all()); */

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $bolum = $request->get('urun_bolum') != null ? BolumModel::find($request->get('urun_bolum'))->bolum_adi : "Tanımsız";
        $urun_turu = $request->get('urun_turu') != null ? UrunTuruModel::find($request->get('urun_turu'))->urun_turu_adi : "Tanımsız";
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Güncellenen Ürün Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN ADI</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$request->get('urun_adi').'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN TÜRÜ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun_turu.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">İLGİLİ BÖLÜM</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$bolum.'</div>\'+
                                 \'</div>\'+
                        \'</div>';


        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('urun.index')->with('mesaj',$mesaj);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /* KAYIT SİLMEK İÇİN KULLANILAN İŞLEM */
    public function destroy($id)
    {
        $urun = UrunModel::find($id);
        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $bolum = $urun->urun_bolum != null ? BolumModel::find($urun->urun_bolum)->bolum_adi : "Tanımsız";
        $urun_turu = $urun->urun_turu!= null ? UrunTuruModel::find($urun->urun_turu)->urun_turu_adi : "Tanımsız";
        $mesaj=[];
        $mesaj['tur']="warning";
        $mesaj['title']="Silinen Ürün Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN ADI</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun->urun_adi.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN TÜRÜ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun_turu.'</div>\'+
                                \'</div>\'+
                                \'<div class="w-100"></div>\'+
                                 \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">İLGİLİ BÖLÜM</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$bolum.'</div>\'+
                                 \'</div>\'+
                        \'</div>';

        /* SİLİNECEK KAYIDIN ID Sİ URL İLE ALNIR VE DELETE OPERATÖRÜ İLE SİLİNİR */
        UrunModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect()->route('urun.index')->with('mesaj',$mesaj);
    }
}
