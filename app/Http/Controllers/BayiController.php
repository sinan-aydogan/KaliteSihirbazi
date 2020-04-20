<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use App\BayiModel;


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
      /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
      return view ('bayi.index',['bayiler' => $bayiler]);
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

        BayiModel::create($request->all());
        /* KAYIT SONRASI KULLANICIYI, GÖNDERMEK İSTEDİĞİMİZ BLADE E YÖNLENDİRİYORUZ, BAŞARI KAYIT MESAJINI KAYDEDİLEN KAYITTAN İSİM İLE YOLLUYORUZ */
        return redirect('bayi/create',)->with('mesaj', $request->bayi_adi);
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
        //
        /* DÜZENLE BLADE SİNDEN GELEN ID NIN SAHİP OLDUĞU TABLO SATIRI BULUNUR */
        $guncelle = BayiModel::find($id);
        /* UPDATE KOMUTU İLE DÜZENLE BLADE SİNDEKİ FORMUN YOLLADIĞI TÜM VERİLER TABLOYA İŞLENİR */
        $guncelle->update([
            'bayi_adi' => $request->get('bayi_adi'),
            'bayi_kodu' => $request->get('bayi_kodu'),
            'bayi_il' => $request->get('bayi_il'),
        ]);
        /* DÜZENLEME TAMAMLANDIĞI KULLANICI YENİ BİR EKRANA YÖNLENDİRİLİR */
        return redirect()->route('bayi.index');
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
        BayiModel::find($id)->delete();
        /* SİLME İŞLEMİ SONRASI KULLANICI YÖNLENDİRİLİR */
        return redirect('bayi',);
    }
}
