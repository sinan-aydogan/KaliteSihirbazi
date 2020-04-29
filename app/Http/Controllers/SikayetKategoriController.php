<?php

namespace App\Http\Controllers;

use App\SikayetKategoriModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SikayetKategoriController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sikayet_kategorileri = SikayetKategoriModel::all()->sortBy("sikayet_kategori_adi");
        return view('sikayetkategori.index',compact('sikayet_kategorileri'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('sikayetkategori.create');
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
        /*VALIDATE: HATALI VERİ GİRİŞİNİ ENGELLEME*/
        $rules = [
            'sikayet_kategori_adi'=>'required|unique:sikayetkategori',
        ];

        $messages = [
            'sikayet_kategori_adi.required'    => "Şikayet kategori adı alanını doldurmanız gereklidir",
            'sikayet_kategori_adi.unique'    => "Girdiğiniz şikayet kategorisi mevcut, farklı bir tane giriniz",
        ];

        $this->validate($request, $rules,$messages);

        $sikayet_kategorisi= new SikayetKategoriModel();
        $sikayet_kategorisi->sikayet_kategori_adi = $request->sikayet_kategori_adi;
        $sikayet_kategorisi->user_id = Auth::user()->id;

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Şikayet Kategorisi Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Şikayet Kategorisi:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->sikayet_kategori_adi.'</div>\'+
                            \'</div>\'+
                        \'</div>';

        $sikayet_kategorisi->save();

        return redirect()->route('sikayet-kategori.create')->with('mesaj',$mesaj);
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
        $sikayet_kategorisi = SikayetKategoriModel::find($id);

        return view('sikayetkategori.edit',compact('sikayet_kategorisi'));
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
        /*VALIDATE: HATALI VERİ GİRİŞİNİ ENGELLEME*/
        $rules = [
            'sikayet_kategori_adi'=>'required|unique:sikayetkategori,sikayet_kategori_adi,'.$id,
        ];

        $messages = [
            'sikayet_kategori_adi.required'    => "Şikayet kategori adı alanını doldurmanız gereklidir",
            'sikayet_kategori_adi.unique'    => "Girdiğiniz şikayet kategorisi mevcut, farklı bir tane giriniz",
        ];

        $this->validate($request, $rules,$messages);

        $sikayet_kategorisi = SikayetKategoriModel::find($id);
        $sikayet_kategorisi->update([
            'sikayet_kategori_adi' => $request->get('sikayet_kategori_adi')
        ]);

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Güncellenen Şikayet Kategorisi Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Şikayet Kategorisi:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->get('sikayet_kategori_adi').'</div>\'+
                            \'</div>\'+
                        \'</div>';

        return redirect()->route('sikayet-kategori.index')->with('mesaj',$mesaj);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sikayet_kategorisi = SikayetKategoriModel::find($id);
        //
        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="warning";
        $mesaj['title']="Silinen Şikayet Kategorisi Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Şikayet Kategorisi:</div>\'+
                                \'<div class="col text-left pr-2">'.$sikayet_kategorisi->sikayet_kategori_adi.'</div>\'+
                            \'</div>\'+
                        \'</div>';


        SikayetKategoriModel::find($id)->delete();

        return redirect()->route('sikayet-kategori.index')->with('mesaj',$mesaj);
    }
}
