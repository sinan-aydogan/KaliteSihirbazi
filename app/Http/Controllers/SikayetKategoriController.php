<?php

namespace App\Http\Controllers;

use App\SikayetKategoriModel;
use Illuminate\Http\Request;

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
        $sikayet_kategorileri = SikayetKategoriModel::all();
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
        $sikayet_kategorisi= new SikayetKategoriModel();
        $sikayet_kategorisi->sikayet_kategori_adi = $request->sikayet_kategori_adi;
        $sikayet_kategorisi->user_id = $request->user_id;
        $veri = $request->sikayet_kategori_adi;
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['title'] = "<b>Eklenen Kategorinin Bilgisi</b>";
        $mesaj['icerik'] = "<b>Kategori Adı:</b> ".$veri;

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
        $veri = SikayetKategoriModel::find($id)->sikayet_kategori_adi;
        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['title'] = "<b>Silinen Kategorinin Bilgisi</b>";
        $mesaj['icerik'] = "<b>Kategori Adı:</b> ".$veri;
        SikayetKategoriModel::find($id)->delete()->with('mesaj',$mesaj);
    }
}
