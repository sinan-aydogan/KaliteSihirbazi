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
        $kullanicilar = User::all()->sortBy("name");
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
        $rules = [
            'name'=>'required',
            'email'=>'required|unique:users|email',
            'pozisyon'=>'required',
            'password'=>'required|min:8',
            // nullable == optional
            // apache max upload 2mb
            'avatar' => 'image|nullable|max:2999'
        ];

        $messages = [
            'name.required'    => "Personelin ismini yazmanız gereklidir",
            'email.required'    => "Email adresi alanını doldurmanız gereklidir",
            'email.unique'    => "Girdiğiniz email mevcut, farklı bir tane giriniz",
            'email.email'    => "Email adresi formatı geçersiz, örn: mail@mail.com",
            'pozisyon.required'    => "Personelin pozisyonunu yazmanız gereklidir",
            'password.required'    => "Personelin panele giriş yapabilmesi için şifre belirlemeniz gereklidir",
            'password.min'    => "Personel şifresi en az 8 karakter uzunluğunda olmalıdır, 8 karakterden daha kısa yazdınız",
            'avatar.image'    => "Personel fotoğrafı geçerli bir jpeg, png veya bmp dosya formatında olmalıdır, hatalı formatta dosya yüklediniz",
            'avatar.max'    => "Personel fotoğrafı dosyanızın boyutu çok büyük, Max: 3mb",
        ];

        $this->validate($request, $rules,$messages);

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
        $kullanici->ise_giris = date('Y-m-d', strtotime($request->ise_giris)) ;
        $kullanici->password = Hash::make($request->password) ;
        $kullanici->avatar = $fileNameToStore ;
        $kullanici->egitim = $request->egitim != null ? implode(',',$request->egitim) : null;
        $kullanici->konum = $request->konum ;
        $kullanici->yetenek = $request->yetenek != null ? implode(',',$request->yetenek) : null ;
        $kullanici->gorev = $request->gorev != null ? implode(',',$request->gorev) : null;
        $kullanici->user_id = Auth::user()->id;
        $kullanici->save();

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Yeni Kaydedilen Kullanıcı Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Kullanıcı Adı:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->name.'</div>\'+
                            \'<div class="w-100"></div>\'+
                                \'<div class="col text-bold text-right pr-2">Mail:</div>\'+
                                \'<div class="col text-left pr-2">'.$request->email.'</div>\'+
                            \'</div>\'+
                        \'</div>\'+
                        \'<br><span class="text-center text-info"><i class="fas fa-mail-bulk"></i>  Kullanıcı bilgileri, mail adresine gönderilmiştir</span>';

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
        $rules = [
            'name'=>'required',
            'email'=>'required|email|unique:users,email,'.$id,
            'pozisyon'=>'required',
            'password'=>'exclude_if:sifre_checkbox,|required|min:8',
            // nullable == optional
            // apache max upload 2mb
            'avatar' => 'image|nullable|max:2999'
        ];

        $messages = [
            'name.required'    => "Personelin ismini yazmanız gereklidir",
            'email.required'    => "Email adresi alanını doldurmanız gereklidir",
            'email.unique'    => "Girdiğiniz email mevcut, farklı bir tane giriniz",
            'email.email'    => "Email adresi formatı geçersiz, örn: mail@mail.com",
            'pozisyon.required'    => "Personelin pozisyonunu yazmanız gereklidir",
            'password.required'    => "Personelin panele giriş yapabilmesi için şifre belirlemeniz gereklidir",
            'password.min'    => "Personel şifresi en az 8 karakter uzunluğunda olmalıdır, 8 karakterden daha kısa yazdınız",
            'avatar.image'    => "Personel fotoğrafı geçerli bir jpeg, png veya bmp dosya formatında olmalıdır, hatalı formatta dosya yüklediniz",
            'avatar.max'    => "Personel fotoğrafı dosyanızın boyutu çok büyük, Max: 3mb",
        ];

        $this->validate($request, $rules,$messages);

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
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'bolum' => $request->get('bolum'),
            'pozisyon' => $request->get('pozisyon'),
            'ise_giris' => date('Y-m-d', strtotime($request->get('ise_giris'))),
            'password' => Hash::make($request->get('password')),
            'avatar' => ($request->get('avatar') != null ? $fileNameToStore : $kullanici->avatar),
            'egitim' => ($request->get('egitim') != null ? implode(',',$request->get('egitim')) : ""),
            'konum' => $request->get('konum'),
            'yetenek' => ( $request->get('yetenek') != null ? implode(',',$request->get('yetenek')): ""),
            'gorev' => ( $request->get('gorev') != null ? implode(',',$request->get('gorev')): "")
        ]);

        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="success";
        $mesaj['title']="Güncellenen Kullanıcı Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Kullanıcı Adı: </div>\'+
                                \'<div class="col text-left pr-2">'.$request->get('name').'</div>\'+
                            \'</div>\'+
                        \'</div>';

        return redirect()->route('kullanici.show', $id.'#settings')->with('mesaj',$mesaj);



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
        $kullanici = User::find($id);
        /*SESSION: BAŞARILI KAYIT MESAJINI OLUŞTURMA*/
        $mesaj=[];
        $mesaj['tur']="warning";
        $mesaj['title']="Silinen Kullanıcı Bilgileri";
        $mesaj['icerik']='<div class="container bg-gradient-light border border-info p-2">\'+
                            \'<div class="row">\'+
                                \'<div class="col text-bold text-right pr-2">Kullanıcı Adı: </div>\'+
                                \'<div class="col text-left pr-2">'.$kullanici->name.'</div>\'+
                            \'</div>\'+
                        \'</div>';
        /* SİLİNECEK KAYIDIN ID Sİ URL İLE ALNIR VE DELETE OPERATÖRÜ İLE SİLİNİR */
        User::find($id)->delete();

        return redirect()->route('kullanici.index')->with('mesaj',$mesaj);
    }
}
