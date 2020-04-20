<?php

namespace App\Http\Controllers;

use App\BayiModel;
use App\MusteriSikayetiModel;
use App\SikayetTuruModel;
use App\BolumModel;
use App\UrunModel;
use Illuminate\Http\Request;
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
        $musteri_sikayetleri = MusteriSikayetiModel::all();
        /* MODELİMİZ DİĞER TABLOLARLA İLİŞKİLİ OLDUĞU İÇİN O TABLOLARDANDA TÜM VERİLERİ ÇEKİYORUZ */
        $bolumler = BolumModel::all();
        $sikayet_turleri = SikayetTuruModel::all();
        $urunler = UrunModel::all();
        $bayiler = BayiModel::all();
        /* TÜM VERİLERİ LİSTELEMESİ İÇİN INDEX BLADE MİZİ ÇAĞIRIYORUZ VE İÇİNE TABLO VERİLERİ İÇİN ANA DEĞİŞKENLERİ YOLLUYORUZ */
        return view ('musterisikayeti.index',compact('musteri_sikayetleri','bolumler', 'sikayet_turleri', 'urunler', 'bayiler'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $bolumler = BolumModel::all();
        $sikayet_turleri = SikayetTuruModel::all();
        $urunler = UrunModel::all();
        $bayiler = BayiModel::all();
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
        //
        $musteri_sikayeti = new MusteriSikayetiModel();
        $musteri_sikayeti->sikayet_tarihi  = date('Y-m-d',strtotime($request->sikayet_tarihi));
        $musteri_sikayeti->sikayet_bolum  = $request->sikayet_bolum  ;
        $musteri_sikayeti->sikayet_bayi  = $request->sikayet_bayi  ;
        $musteri_sikayeti->sikayet_urun  = $request->sikayet_urun  ;
        $musteri_sikayeti->sikayet_turu  = $request->sikayet_turu  ;
        $musteri_sikayeti->sikayet_kategorisi  = $request->sikayet_kategorisi  ;
        $musteri_sikayeti->sikayet_durum  = $request->sikayet_durum  ;
        $musteri_sikayeti->user_id  = $request->user_id  ;

        $veri=[];
        $veri['tarih']=$request->sikayet_tarihi;
        $veri['bayi']=BayiModel::find($request->sikayet_bayi)->bayi_adi;
        $veri['urun']=UrunModel::find($request->sikayet_urun)->urun_adi;
        $veri['sikayet']=SikayetTuruModel::find($request->sikayet_turu)->sikayet_turu_adi;
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['title'] = "<b>Kaydedilen Şikayetin Bilgileri</b>";
        $mesaj['icerik'] = "<b>Tarih:</b> ".$veri['tarih']."</br> <b>Bayi:</b> ".$veri['bayi']." </br> <b>Ürün: </b>".$veri['urun']." </br> <b>Şikayet: </b>".$veri['sikayet'] ;

        $musteri_sikayeti->save();

        return redirect()->route('musteri-sikayeti.create')->with('mesaj', $mesaj);
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
        //
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
        $veri=[];
        $veri['tarih']=date('d.m.Y', strtotime(MusteriSikayetiModel::find($id)->sikayet_tarihi));
        $veri['bayi']=BayiModel::find(MusteriSikayetiModel::find($id)->sikayet_bayi)->bayi_adi;
        $veri['urun']=UrunModel::find(MusteriSikayetiModel::find($id)->sikayet_urun)->urun_adi;
        $veri['sikayet']=SikayetTuruModel::find(MusteriSikayetiModel::find($id)->sikayet_turu)->sikayet_turu_adi;
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['title'] = "<b>Silinen Şikayetin Bilgileri</b>";
        $mesaj['icerik'] = "<b>Tarih:</b> ".$veri['tarih']."</br> <b>Bayi:</b> ".$veri['bayi']." </br> <b>Ürün: </b>".$veri['urun']." </br> <b>Şikayet: </b>".$veri['sikayet'];
        MusteriSikayetiModel::find($id)->delete();

        return redirect()->route('musteri-sikayeti.index')->with('mesaj',$mesaj);
    }
}
