<?php

namespace App\Http\Controllers;

use App\BolumModel;
use App\User;
use Illuminate\Http\Request;

class SilinmislerController extends Controller
{
    //
    public function kullanici(){
        $silinmis_kullanicilar = User::onlyTrashed()->get();
        $bolumler = BolumModel::all();

        return view('kullanici.deleted',compact('silinmis_kullanicilar','bolumler'));
    }

    public function kullanici_destroy($id){

        $veri = User::onlyTrashed()->where('id',$id);

        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['title'] = "<b>Kalıcı Olarak Silinen Kullanıcının Bilgileri</b>";
        $kullanici= str_replace(["[","]","\""], ' ',$veri->pluck("name"));
        $mesaj['icerik'] = "<b>Kullanıcı: </b> ".$kullanici;

        $veri->forceDelete();

        return redirect()->route('silinmis_kullanicilar_index')->with('mesaj',$mesaj);


    }

    public function kullanici_restore($id){

        $veri = User::onlyTrashed()->where('id',$id);

        $mesaj=[];
        $mesaj['tur'] = "success";
        $mesaj['title'] = "<b>Tekrar Aktif Edilen Kullanıcının Bilgileri</b>";
        $kullanici= str_replace(["[","]","\""], ' ',$veri->pluck("name"));
        $mesaj['icerik'] = "<b>Kullanıcı: </b> ".$kullanici;

        $veri->restore();

        return redirect()->route('kullanici.index')->with('mesaj',$mesaj);

    }



}
