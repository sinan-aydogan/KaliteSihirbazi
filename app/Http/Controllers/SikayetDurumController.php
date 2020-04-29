<?php

namespace App\Http\Controllers;

use App\SikayetDurumModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SikayetDurumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sikayet_durumlari = SikayetDurumModel::all()->sortBy("sikayet_durum_adi");

        return view('sikayetdurum.index', compact('sikayet_durumlari'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view('sikayetdurum.create');
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
            'sikayet_durum_adi'=>'required|unique:sikayetdurum',
        ];

        $messages = [
            'sikayet_durum_adi.required'    => "Şikayet durum adı alanını doldurmanız gereklidir",
            'sikayet_durum_adi.unique'    => "Girdiğiniz şikayet durumu mevcut, farklı bir tane giriniz",
        ];

        $this->validate($request, $rules,$messages);

        $sikayet_durum = new SikayetDurumModel();
        $sikayet_durum->sikayet_durum_adi = $request->sikayet_durum_adi;
        $sikayet_durum->sikayet_durum_renk= $request->sikayet_durum_renk;
        $sikayet_durum->user_id= Auth::user()->id;
        $sikayet_durum->save();

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Şikayet Durumu Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Şikayet Durumu:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->sikayet_durum_adi.'</div>\'+
                            \'</div>\'+
                        \'</div>';

        return redirect()->route('sikayet-durum.create')->with('mesaj',$mesaj);
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
        $sikayet_durum = SikayetDurumModel::find($id);

        return view('sikayetdurum.edit',compact('sikayet_durum'));
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
            'sikayet_durum_adi'=>'required|unique:sikayetdurum,sikayet_durum_adi,'.$id,
        ];

        $messages = [
            'sikayet_durum_adi.required'    => "Şikayet durum adı alanını doldurmanız gereklidir",
            'sikayet_durum_adi.unique'    => "Girdiğiniz şikayet durumu mevcut, farklı bir tane giriniz",
        ];

        $this->validate($request, $rules,$messages);

        $sikayet_durum = SikayetDurumModel::find($id);

        $sikayet_durum->update([
            'sikayet_durum_adi' => $request->get('sikayet_durum_adi'),
            'sikayet_durum_renk' => $request->get('sikayet_durum_renk'),
            ]);

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Güncellenen Şikayet Durumu Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Şikayet Durumu:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->get('sikayet_durum_adi').'</div>\'+
                            \'</div>\'+
                        \'</div>';

        return redirect()->route('sikayet-durum.index')->with('mesaj',$mesaj);
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
        $durum = SikayetDurumModel::find($id);

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="warning";
        $mesaj['title']="Silinen Şikayet Durumu Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Şikayet Durumu:</div>\'+
                                \'<div class="col text-left pr-2">'.$durum->sikayet_durum_adi.'</div>\'+
                            \'</div>\'+
                        \'</div>';

        SikayetDurumModel::find($id)->delete();

        return redirect()->route('sikayet-durum.index')->with('mesaj',$mesaj);
    }
}
