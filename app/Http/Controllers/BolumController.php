<?php

namespace App\Http\Controllers;

use App\BolumModel;
use App\User;
use Illuminate\Http\Request;

class BolumController extends Controller
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
        $bolumler = BolumModel::all();
        $kullanicilar = User::all();
        /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
        return view ('bolum.index',compact('bolumler','kullanicilar'));
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
        $kullanicilar = User::all();
        return view ('bolum.create', compact('kullanicilar'));
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
        BolumModel::create($request->all());
        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect('bolum/create',)->with('mesaj', $request->bolum_adi);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return redirect('bolum',);
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
        $bolumler = BolumModel::find($id);
        $kullanicilar = User::all();
        /* DÜZENLEMELERİ YAPMAK İÇİN BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE URL DEN ÇEKTİĞİMİZ ID İLE BİRLİKTE İÇERİĞİMİ YOLLUYORUZ */
        return view ('bolum.edit',compact('bolumler','kullanicilar'));
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
        $guncelle = BolumModel::find($id);
        /* UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR */
        $guncelle->update([
            'bolum_adi' => $request->get('bolum_adi'),
            'bolum_yonetici' => $request->get('bolum_yonetici'),
            'bolum_sikayet_alabilirlik' => $request->get('bolum_sikayet_alabilirlik'),
            'bolum_urun_kaydedilebilirlik' => $request->get('bolum_urun_kaydedilebilirlik'),
            'bolum_rengi' => $request->get('bolum_rengi'),
        ]);
        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('bolum.index');
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
        BolumModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect('bolum',);
    }
}
