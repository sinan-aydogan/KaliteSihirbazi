<?php

namespace App\Http\Controllers;



use App\MusteriSikayetiModel;
use Illuminate\Http\Request;
use App\BayiModel;
use Illuminate\Support\Facades\Auth;


class BayiController extends Controller
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
      $bayiler = BayiModel::all();
      $musteri_sikayeti = MusteriSikayetiModel::all();
      /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
      return view ('bayi.index',compact('bayiler','musteri_sikayeti'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    /* YENİ KAYIT OLUŞTURMA FONKSİYONU */
    public function create()
    {
     /* YENİ KAYIT OLUŞTURMA BLADE Nİ ÇAĞIRIYORUZ */
     return view ('bayi.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    /* MODELİN BAĞLI OLDUĞU TABLODAN TÜM VERİLERİ ÇEKİYORUZ, BURAYA VERİLER CREATE İLE ÇAĞIRILMIŞ BLADE ÜZERİNDEN GELİR*/
    public function store(Request $request)
    {
        /*VALIDATE: HATALI VERİ GİRİŞİNİ ENGELLEME*/
        $rules = [
            'bayi_adi'=>'required|unique:bayi',
            'bayi_kodu'=>'required|unique:bayi|max:5|min:3',
            'bayi_il'=>'required',
        ];

        $messages = [
            'bayi_adi.required'    => "Bayi Adı alanını doldurmanız gereklidir",
            'bayi_adi.unique'    => "Girdiğiniz Bayi Adı mevcut, farklı bir tane giriniz",
            'bayi_kodu.required'    => "Bayi Kodu alanını doldurmanız gereklidir",
            'bayi_kodu.unique'    => "Girdiğiniz Bayi Kodu mevcut, farklı bir tane giriniz",
            'bayi_kodu.max'    => "Girdiğiniz Bayi Kodu en fazla 5 karakter uzunluğunda olmalıdır, daha fazla sayıda karakter kullandınız.",
            'bayi_kodu.min'    => "Girdiğiniz Bayi Kodu en az 3 karakter uzunluğunda olmalıdır, daha az sayıda karakter kullandınız.",
            'bayi_il.required'    => "Bayinin İlini seçmediniz",
        ];

        $this->validate($request, $rules,$messages);

        /*SAVE: CREATE BLADE'İNDEN GELEN VERİYİ İŞLEME VE KAYDETME*/
        $bayi = new BayiModel();
        $bayi->bayi_adi = $request->bayi_adi ;
        $bayi->bayi_kodu = $request->bayi_kodu ;
        $bayi->bayi_il = $request->bayi_il ;
        $bayi->user_id = Auth::user()->id ;
        $bayi->save();

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $il =
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Bayi Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Bayi:</div>\'+
                                \'<div class="col text-left pr-2">'.$bayi->bayi_adi.'</div>\'+
                        \'</div>';

        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect()->route('bayi.create')->with('mesaj', $mesaj);
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
        return redirect('bayi',);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /* VAR OLAN KAYIT ÜZERİNDE DEĞİŞİKLİK YAPILMASINI SAĞLAYAN DÜZENLEME FONKSİYONU */
    public function edit($id)
    {
        /* DÜZENLEYECEĞİMİZ VERİYİ, İLGİLİ MODEL İÇİNDEN ÇEKİYORUZ */
        $bayiler = BayiModel::find($id);
        /* DÜZENLEMELERİ YAPMAK İÇİN BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE URL DEN ÇEKTİĞİMİZ ID İLE BİRLİKTE İÇERİĞİMİ YOLLUYORUZ */
        return view ('bayi.edit',['bayiler' => $bayiler]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /* DÜZENLEME BLADE İNDEN GELEN VERİYİ TABLOMUZA İŞLİYORUZ, DEĞERLERİN GÜNCELLENMESİ KISMI BURADA OLUYOR */
    public function update(Request $request, $id)
    {
        /*VALIDATE: HATALI VERİ GİRİŞİNİ ENGELLEME*/
        $rules = [
            'bayi_adi'=>'required|unique:bayi,bayi_adi,'.$id,
            'bayi_kodu'=>'required|max:5|min:3|unique:bayi,bayi_kodu,'.$id,
            'bayi_il'=>'required',
        ];

        $messages = [
            'bayi_adi.required'    => "Bayi Adı alanını doldurmanız gereklidir",
            'bayi_adi.unique'    => "Girdiğiniz Bayi Adı mevcut, farklı bir tane giriniz",
            'bayi_kodu.required'    => "Bayi Kodu alanını doldurmanız gereklidir",
            'bayi_kodu.unique'    => "Girdiğiniz Bayi Kodu mevcut, farklı bir tane giriniz",
            'bayi_kodu.max'    => "Girdiğiniz Bayi Kodu en fazla 5 karakter uzunluğunda olmalıdır, daha fazla sayıda karakter kullandınız.",
            'bayi_kodu.min'    => "Girdiğiniz Bayi Kodu en az 3 karakter uzunluğunda olmalıdır, daha az sayıda karakter kullandınız.",
            'bayi_il.required'    => "Bayinin İlini seçmediniz",
        ];

        $this->validate($request, $rules,$messages);


        //
        /* DÜZENLE BLADE SİNDEN GELEN ID NIN SAHİP OLDUĞU TABLO SATIRI BULUNUR */
        $guncelle = BayiModel::find($id);
        /* UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR */
        $guncelle->update([
            'bayi_adi' => $request->get('bayi_adi'),
            'bayi_kodu' => $request->get('bayi_kodu'),
            'bayi_il' => $request->get('bayi_il'),
        ]);

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Güncellenen Bayi Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Bayi:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->get('bayi_adi').'</div>\'+
                        \'</div>';

        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('bayi.index')->with('mesaj',$mesaj);
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
        $bayi = BayiModel::find($id);
        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Silinen Bayi Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Bayi:</div>\'+
                                \'<div class="col text-left pr-2">'.$bayi->bayi_adi.'</div>\'+
                        \'</div>';


        /* SİLİNECEK KAYIDIN ID Sİ URL İLE ALNIR VE DELETE OPERATÖRÜ İLE SİLİNİR */
        BayiModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect()->route('bayi.index')->with('mesaj',$mesaj);
    }
}
