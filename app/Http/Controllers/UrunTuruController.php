<?php

namespace App\Http\Controllers;

use App\UrunTuruModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UrunTuruController extends Controller
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
        $urunturleri = UrunTuruModel::all()->sortBy('urun_turu_adi');
        /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
        return view ('urunturu.index',compact('urunturleri'));
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
        return view ('urunturu.create');
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
            'urun_turu_adi'=>'required|unique:urunturu',
        ];

        $messages = [
            'urun_turu_adi.required'    => "Ürün türü adı alanını doldurmanız gereklidir",
            'urun_turu_adi.unique'    => "Girdiğiniz ürün türü mevcut, başka bir tane giriniz",
        ];

        $this->validate($request, $rules,$messages);

        $urun_turu = new UrunTuruModel();
        $urun_turu->urun_turu_adi = $request->urun_turu_adi;
        $urun_turu->user_id = Auth::user()->id;
        $urun_turu->save();

        /**UrunTuruModel::create($request->all());**/

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Ürün Türü Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN TÜRÜ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$request->urun_turu_adi.'</div>\'+
                                \'</div>\'+
                        \'</div>';

        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect()->route('urun-turu.create')->with('mesaj', $mesaj);
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
        $urunturleri = UrunTuruModel::find($id);
        /* DÜZENLEMELERİ YAPMAK İÇİN BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE URL DEN ÇEKTİĞİMİZ ID İLE BİRLİKTE İÇERİĞİMİ YOLLUYORUZ */
        return view ('urunturu.edit',compact('urunturleri'));
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
            'urun_turu_adi'=>'required|unique:urunturu,urun_turu_adi,'.$id,
        ];

        $messages = [
            'urun_turu_adi.required'    => "Ürün türü adı alanını doldurmanız gereklidir",
            'urun_turu_adi.unique'    => "Girdiğiniz ürün türü mevcut, başka bir tane giriniz",
        ];

        $this->validate($request, $rules,$messages);

        /* DÜZENLE BLADE SİNDEN GELEN ID NIN SAHİP OLDUĞU TABLO SATIRI BULUNUR */
        $guncelle = UrunTuruModel::find($id);
        /* UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR */

       $urun_turu = UrunTuruModel::find($id);
       $urun_turu->update([
          'urun_turu_adi' => $request->get('urun_turu_adi')
       ]);

        /**$guncelle->update($request->all());**/

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Düzenlenen Ürün Türü Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN TÜRÜ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$request->get('urun_turu_adi').'</div>\'+
                                \'</div>\'+
                        \'</div>';

        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('urun-turu.index')->with('mesaj',$mesaj);
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
        $urun_turu = UrunTuruModel::find($id);
        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="warning";
        $mesaj['title']="Silinen Ürün Türü Bilgileri";
        $mesaj['icerik']='<div class="container">\'+
                                \'<div class="row border p-1 m-1 bg-gradient-light">\'+
                                    \'<div class="col-4 text-bold mx-auto border-right align-self-center display-4" style="font-size: 16px">ÜRÜN TÜRÜ</div>\'+
                                    \'<div class="col-8 mx-auto align-self-center display-4" style="font-size: 20px">'.$urun_turu->urun_turu_adi.'</div>\'+
                                \'</div>\'+
                        \'</div>';

        /* SİLİNECEK KAYIDIN ID Sİ URL İLE ALNIR VE DELETE OPERATÖRÜ İLE SİLİNİR */
        UrunTuruModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect()->route('urun-turu.index')->with('mesaj',$mesaj);
    }
}
