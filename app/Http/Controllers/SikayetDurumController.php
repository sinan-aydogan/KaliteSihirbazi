<?php

namespace App\Http\Controllers;

use App\SikayetDurumModel;
use Illuminate\Http\Request;

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
        $sikayet_durumlari = SikayetDurumModel::all();

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
        $sikayet_durum = new SikayetDurumModel();
        $sikayet_durum->sikayet_durum_adi = $request->sikayet_durum_adi;
        $sikayet_durum->sikayet_durum_renk= $request->sikayet_durum_renk;
        $sikayet_durum->user_id= $request->user_id;
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['icerik'] = $request->sikayet_durum_adi." isimli durum başarıyla eklenmiştir.";
        $sikayet_durum->save();
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
        $sikayet_durum = SikayetDurumModel::find($id);
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['icerik'] = $request->sikayet_durum_adi." isimli durum başarıyla güncellenmiştir.";
        $sikayet_durum->update([
            'sikayet_durum_adi' => $request->sikayet_durum_adi,
            'sikayet_durum_renk' => $request->sikayet_durum_renk,
            ]);
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
        $durum = SikayetDurumModel::find($id)->sikayet_durum_adi;
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['icerik'] = $durum." isimli durum silinmiştir.";
        SikayetDurumModel::find($id)->delete();

        return redirect()->route('sikayet-durum.index')->with('mesaj',$mesaj);
    }
}
