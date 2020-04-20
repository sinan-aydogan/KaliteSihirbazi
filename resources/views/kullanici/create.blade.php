@extends('anasablon')
@section('baslik','Yeni Kullanıcı Oluştur')
@section('anabaslik','Kullanıcı Oluşturma Paneli')
@section('csskodu')
<!--açılır takvim-->
<link href="{{asset('/plugins/datepicker/css/bootstrap-datepicker.min.css')}}" rel="stylesheet">

@endsection
@section('icerik')




    @php
        $controller=Request::segment(1);
    @endphp

        <div class="row">
            <div class="col-12">
                <div class="card card-primary card-outline">

                    <div class="card-header" style="height: 35px">
                        <h3 class="card-title text-primary" style="margin-top: -5px "><b>{{ __('Personel Genel Bilgiler') }}</b></h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                    @endif

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }} " enctype="multipart/form-data">
                        @csrf
                        <!--PERSONEL ADI BAŞ-->
                            <div class="form-group">
                                <label>İsim:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
                                    </div>
                                    <input type="text" name="name" id="name"  class="form-control" placeholder="PERSONELİN ADI VE SOYADI">
                                </div>
                            </div>
                            <!--PERSONEL ADI SON-->


                            <!--EMAİL ADI BAŞ-->
                            <div class="form-group">
                                <label>Email Adresi:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="text" name="email" id="email"  class="form-control" placeholder="PERSONELİN EMAİL ADRESİ">
                                </div>
                            </div>
                            <!--EMAİL ADI SON-->

                            <!--BÖLÜM BAŞ-->
                            <div class="form-group">
                                <label>Bağlı Olduğu Bölüm:</label>
                                <div class="input-group">
                                    <select class="form-control select2bs4" name="bolum">
                                        <option value="">--BÖLÜM SEÇİNİZ--</option>
                                        @foreach($bolumler as $bolum)
                                            <option value="{{$bolum->id}}">{{$bolum->bolum_adi}}</option>
                                            @endforeach
                                    </select>
                                </div>
                            </div>
                            <!--BÖLÜM SON-->

                            <!--POZİSYON BAŞ-->
                            <div class="form-group">
                                <label>Pozisyon (Title):</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-cog"></i></span>
                                    </div>
                                    <input type="text" name="pozisyon" id="pozisyon"  class="form-control" placeholder="PERSONELİN POZİSYONU">
                                </div>
                            </div>
                            <!--POZİSYON SON-->

                            <!--İŞE GİRİŞ BAŞ-->
                            <div class="form-group">
                                <label>İşe Giriş Tarihi:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                                    </div>
                                    <input type="text" name="ise_giris" id="ise_giris" class="form-control tarih">
                                </div>
                            </div>
                            <!--İŞE GİRİŞ SON-->

                            <!--ŞİFRE BAŞ-->
                            <div class="form-group">
                                <label>Şifre:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="text" name="password" id="password"  class="form-control" placeholder="PERSONELİN PANEL GİRİŞ ŞİFRESİ" VALUE="{{$sifre}}">
                                </div>
                            </div>
                            <!--ŞİFRE SON-->

                            <!--PROFİL FOTO BAŞ-->
                            <div class="form-group">
                                <label>Profil Resmi:</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" name="avatar" id="exampleInputFile">
                                        <label class="custom-file-label" for="avatar">Fotoğrafı Seçiniz</label>
                                    </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="">Yükle</span>
                                    </div>
                                </div>
                            </div>

                            <!--PROFİL FOTO SON-->




                    </div>
                    <!-- /.card-body -->

                    <!-- /.card-footer -->
                </div>
                <div class="card card-red card-outline">
                    <div class="card-header" style="height: 35px">
                        <h3 class="card-title text-red" style="margin-top: -5px"><b>{{ __('Personel Diğer Bilgiler') }}</b></h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--EĞİTİM BAŞ-->
                        <div class="form-group">
                            <label>BİTİRDİĞİ OKULLAR:</label>
                            <div class="input-group">
                                <select class="form-control select2bs4" name="egitim[]" multiple="multiple">
                                </select>
                            </div>
                            <span class="text-muted text-sm font-italic">Okulun adını yazıp ENTER tuşuna veya VİRGÜL tuşuna basın.</span>

                        </div>
                        <!--EĞİTİM SON-->

                        <!--KONUM BAŞ-->
                        <div class="form-group">
                            <label>Yaşadığı Yer:</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-street-view"></i></span>
                                </div>
                                <input type="text" name="konum" id="konum"  class="form-control" placeholder="PERSONELİN ADRESİ">
                            </div>
                        </div>
                        <!--KONUM SON-->

                        <!--YETENEK BAŞ-->
                        <div class="form-group">
                            <label>Yetenekler:</label>
                            <div class="input-group">
                                <select class="form-control select2bs4" name="yetenek[]" multiple="multiple">
                                </select>
                            </div>
                            <span class="text-muted text-sm font-italic">Her bir yetenekten sonra ENTER tuşuna veya VİRGÜ tuşuna basın.</span>

                        </div>
                        <!--YETENEK SON-->

                        <!--EK BİLGİ BAŞ-->
                        <div class="form-group">
                            <label>Görevleri:</label>
                            <div class="input-group">
                                <select class="form-control select2bs4" name="gorev[]" multiple="multiple">
                                </select>
                            </div>
                            <span class="text-muted text-sm font-italic">Her bir görevden sonra ENTER tuşuna veya VİRGÜ tuşuna basın.</span>

                        </div>

                        <!--EK BİLGİ SON-->



                    </div>
                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm kullanıcıları görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
                        <button type="submit" class="btn btn-success float-right">{{__('Kaydet')}}</button>
                    </div>
                </div>
                <input type="hidden" value="{{Auth::user()->id}}" name="user_id">
                </form>
                <!-- KAYIT FORMU SON -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
@endsection



@section('javakodu')

    <!--JAVASCRİPT IMPORT BAŞ-->


    <script src="{{asset('plugins/summernote/summernote-bs4.min.js')}}"></script>
    <!--fotoğraf yükleme-->
    <script src="{{asset('plugins/bs-custom-file-input/bs-custom-file-input.min.js')}}"></script>
    <!--açılır takvim-->
    <script src="{{asset('plugins/datepicker/js/bootstrap-datepicker.min.js')}}"></script>
    <script src="{{asset('plugins/datepicker/js/bootstrap-datepicker.tr.min.js')}}"></script>


    <!--JAVASCRİPT IMPORT SON-->

    <!--AYAR KODU BAŞ-->
    <!--SELECT2-->
    <script>
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()

            //Initialize Select2 Elements
            $('.select2bs4').select2({
                theme: 'bootstrap4',
                tags: true,
                tokenSeparators: [',']
            })
            // Summernote
            $('.textarea').summernote()
        })
    </script>
    <!--SWEETALERT-->

    <script>
        $(function () {
            $("input[data-bootstrap-switch]").each(function(){
                $(this).bootstrapSwitch('state', $(this).prop('checked'));
            });
        })
    </script>

    <!--fotoğraf yükleme-->
    <script>
        $(document).ready(function () {
            bsCustomFileInput.init();
        });
    </script>

    <!--başarılı mesajı-->

    @if(session('mesaj'))
        <script type="text/javascript">
            Swal.fire ({
                type: '{{session('mesaj.tur')}}',
                title: '{!! session('mesaj.title')!!}',
                html: '{!! session('mesaj.icerik')!!}',
                showConfirmButton: true,
                onBeforeOpen: () => {
                }
            })
        </script>
    @endif
    <!--açılır takvim-->
    <script>
        $('.tarih').datepicker({
            language: "tr"
        });
    </script>

    <!--AYAR KODU SON-->
@endsection
