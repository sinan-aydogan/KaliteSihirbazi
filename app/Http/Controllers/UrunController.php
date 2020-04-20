<?php

namespace App\Http\Controllers;

use App\StandartModel;
use App\UrunModel;
use App\UrunTuruModel;
use App\BolumModel;
use Illuminate\Http\Request;

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
        $urunler = UrunModel::all();
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
        $urunturleri = UrunTuruModel::all();
        $standartlar = StandartModel::all();
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
        UrunModel::create($request->all());
        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect('urun/create',)->with('mesaj', $request->urun_adi);
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
        /* DÜZENLE BLADE SİNDEN GELEN ID NIN SAHİP OLDUĞU TABLO SATIRI BULUNUR */
        $guncelle = UrunModel::find($id);
        /* UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR */
        $guncelle->update($request->all());
        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('urun.index');
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
        /* SİLİNECEK KAYIDIN ID Sİ URL İLE ALNIR VE DELETE OPERATÖRÜ İLE SİLİNİR */
        UrunModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect('urun',);
    }
}
