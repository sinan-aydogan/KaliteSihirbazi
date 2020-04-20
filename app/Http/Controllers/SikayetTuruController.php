<?php

namespace App\Http\Controllers;

use App\BolumModel;
use App\SikayetTuruModel;
use App\UrunModel;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Array_;

class SikayetTuruController extends Controller
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
        $sikayet_turleri = SikayetTuruModel::all();
        /* MODELİMİZ DİĞER TABLOLARLA İLİŞKİLİ OLDUĞU İÇİN O TABLOLARDANDA TÜM VERİLERİ ÇEKİYORUZ */
        $bolumler = BolumModel::all();
        $urunler = UrunModel::all();
        /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
        return view ('sikayetturu.index',compact('sikayet_turleri','bolumler','urunler'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /* YENİ KAYIT OLUŞTURMA FONKSİYONU */
    public function create()

    {
        /**SADECE ŞİKAYET ALABİLEN BÖLÜMLERİ GÖSTERMEK İÇİN*/
        $bolumler = BolumModel::where('bolum_sikayet_alabilirlik','=','on')->get();
        $urunler = UrunModel::all();
        /* YENİ KAYIT OLUŞTURMA BLADE Nİ ÇAĞIRIYORUZ */
        return view ('sikayetturu.create',compact('bolumler','urunler'));
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
        $sikayet_turu = new SikayetTuruModel();
        $sikayet_turu->sikayet_turu_adi = $request->sikayet_turu_adi ;
        $sikayet_turu->sikayet_turu_bolum = $request->sikayet_turu_bolum ;
        $sikayet_turu->sikayet_turu_kaynak = $request->sikayet_turu_kaynak ;
        $sikayet_turu->sikayet_turu_oneri = $request->sikayet_turu_oneri ;
        $sikayet_turu->sikayet_turu_urunler = implode(' , ',$request->sikayet_turu_urunler) ;
        $sikayet_turu->user_id = $request->user_id;
        $sikayet_turu->save();        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect('sikayet-turu/create',)->with('mesaj', $request->sikayet_turu_adi);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return redirect('sikayet-turu',);
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
        $sikayet_turleri = SikayetTuruModel::find($id);
        /**SADECE ŞİKAYET ALABİLEN BÖLÜMLERİ GÖSTERMEK İÇİN*/
        $bolumler = BolumModel::where('bolum_sikayet_alabilirlik','=','on')->get();
        $urunler = UrunModel::where('urun_bolum',SikayetTuruModel::find($id)->sikayet_turu_bolum)->get();
        /* DÜZENLEMELERİ YAPMAK İÇİN BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE URL DEN ÇEKTİĞİMİZ ID İLE BİRLİKTE İÇERİĞİMİ YOLLUYORUZ */
        return view ('sikayetturu.edit',compact('bolumler','urunler','sikayet_turleri'));
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
        /* DÜZENLE BLADE SİNDEN GELEN ID NIN SAHİP OLDUĞU TABLO SATIRI BULUNUR */
        $guncelle = SikayetTuruModel::find($id);
        /* UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR */
        $urunlistesi = str_replace('"','',$request->get('sikayet_turu_oneri'));

        $guncelle->update([
            'sikayet_turu_adi' => $request->get('sikayet_turu_adi'),
            'sikayet_turu_bolum' => $request->get('sikayet_turu_bolum'),
            'sikayet_turu_urunler' => implode(',',$request->get('sikayet_turu_urunler')),
            'sikayet_turu_kaynak' => $request->get('sikayet_turu_kaynak'),
            'sikayet_turu_oneri' => $request->get('sikayet_turu_oneri')
        ]);
        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('sikayet-turu.index');
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
        SikayetTuruModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect('sikayet-turu',);
    }
}
