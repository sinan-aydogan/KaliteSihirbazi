<?php

namespace App\Http\Controllers;

use App\BolumModel;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class KullaniciController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $kullanicilar = User::all();
        $bolumler = BolumModel::all();
        return view('kullanici.index',compact('kullanicilar','bolumler'));
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
        $sifre = Str::random(8);
        return view('kullanici.create', compact('bolumler','sifre'));
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
        $this->validate($request, [
            'name'=>'required',
            'email'=>'required|unique:users|email',
            'pozisyon'=>'required',
            'password'=>'required|min:8',
            // nullable == optional
            // apache max upload 2mb
            'avatar' => 'image|nullable|max:2999'
        ]);

        // Handle File Upload
        if($request->hasFile('avatar')) {
            // Get filename with extension
            $filenameWithExt = $request->file('avatar')->getClientOriginalName();
            // Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('avatar')->getClientOriginalExtension();
            //Filename to store
            $fileNameToStore = $filename.'_'.time().'.'.$extension;
            // Upload Image
            $request->file('avatar')->storeAs('public/dosya/avatar', $fileNameToStore);
        } else {
            $fileNameToStore = 'noimage.png';
        }

        $kullanici = new User();
        $kullanici->name = $request->name;
        $kullanici->email = $request->email ;
        $kullanici->bolum = $request->bolum ;
        $kullanici->pozisyon = $request->pozisyon ;
        $kullanici->ise_giris = date('Y-m-g', strtotime($request->ise_giris)) ;
        $kullanici->password = Hash::make($request->password) ;
        $kullanici->avatar = $fileNameToStore ;
        $kullanici->egitim = is_array($request->egitim == true ? implode(',',$request->egitim) : null);
        $kullanici->konum = $request->konum ;
        $kullanici->yetenek = is_array($request->yetenek == true ? implode(',',$request->yetenek) : null) ;
        $kullanici->gorev = is_array($request->gorev == true ? implode(',',$request->gorev) : null) ;
        $kullanici->user_id = $request->user_id;
        $kullanici->save();
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Kullanıcı Bilgileri";
        $mesaj['icerik']="<b>Kullanıcı: </b>".$request->name."<br> <b>Mail: </b>".$request->email."<br> giriş bilgileri mail adresine gönderilmiştir.";

        return redirect()->route('kullanici.create')->with('mesaj',$mesaj);
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
        $kullanici = User::find($id);

        $bolumler = BolumModel::all();

        return view('kullanici.view',compact('kullanici', 'bolumler'));
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


        //
        $this->validate($request, [
            'name'=>'required',
            'email'=>'required|unique:users|email',
            'bolum'=>'required',
            'pozisyon'=>'required',
            'password'=>'required|min:8',
            // nullable == optional
            // apache max upload 2mb
            'avatar' => 'image|nullable|max:2999'
        ]);

        // Handle File Upload
        if($request->hasFile('avatar')) {
            // Get filename with extension
            $filenameWithExt = $request->file('avatar')->getClientOriginalName();
            // Get just filename
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            // Get just ext
            $extension = $request->file('avatar')->getClientOriginalExtension();
            //Filename to store
            $fileNameToStore = $filename.'_'.time().'.'.$extension;
            // Upload Image
            $request->file('avatar')->storeAs('public/dosya/avatar', $fileNameToStore);
        } else {
            $fileNameToStore = 'noimage.png';
        }

        $kullanici = User::find($id);
        $kullanici->update([
        'name' => $request->name,
        'email' => $request->email,
        'bolum' => $request->bolum,
        'pozisyon' => $request->pozisyon,
        'ise_giris' => date('yy-m-g', strtotime($request->ise_giris)),
        'password' => Hash::make($request->password) ,
        'avatar' => $fileNameToStore,
        'egitim' => implode(',', $request->egitim) ,
        'konum' => $request->konum ,
        'yetenek' => implode(',',$request->yetenek) ,
        'gorev' => implode(',',$request->gorev) ,
            ]);
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['icerik']="Profil güncellenmiştir";

        return redirect()->route('kullanici.view', $id)->with('mesaj',$mesaj);



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
        $kullanici = User::find($id)->name;
        User::find($id)->delete();
        $mesaj=[];
        $mesaj['tur'] = "warning";
        $mesaj['title'] = "<b>Silinen Kullanıcı Bilgileri</b>";
        $mesaj['icerik'] = "<b>Kullanıcı: </b>".$kullanici;
        return redirect('kullanici')->with('mesaj',$mesaj);
    }
}
