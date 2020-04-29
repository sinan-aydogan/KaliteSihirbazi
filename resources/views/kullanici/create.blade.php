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
                <form method="post" action="{{ route($controller.'.store') }} " enctype="multipart/form-data" id="kayit">
                @csrf

                <!--BİRİNCİ ALAN BAŞI-->
                <div class="card card-primary card-outline">

                    <div class="card-header">
                        <h3 class="card-title text-primary"><b>{{ __('Personel Genel Bilgiler') }}</b></h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->

                        <!--PERSONEL ADI BAŞ-->
                            <div class="form-group">
                                <label>İsim:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
                                    </div>
                                    <input type="text" name="name" id="name" class="form-control" placeholder="PERSONELİN ADI"  required>
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
                                    <input type="email" name="email" id="email"  class="form-control" placeholder="PERSONELİN EMAİL ADRESİ" email required>
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
                                    <input type="text" name="pozisyon" id="pozisyon"  class="form-control" placeholder="PERSONELİN POZİSYONU" required>
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

                                <label>Şifre Tekrar:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="text" name="password_tekrar" id="password_tekrar"  class="form-control" placeholder="YUKARIYA YAZDIĞINIZ ŞİFRENİN AYNISI" VALUE="{{$sifre}}">
                                </div>
                                <span class="text-muted text-sm font-italic">Şifreyi doğru yazdığınız doğrulamak için iki kutuyada aynı şifreyi yazmalısınız.</span>
                            </div>
                            <!--ŞİFRE SON-->

                            <!--PROFİL FOTO BAŞ-->
                            <div class="form-group">
                                <label>Profil Resmi:</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" name="avatar" id="exampleInputFile" data-buttonText="Resim seç">
                                        <label class="custom-file-label" for="avatar">Fotoğrafı Seçiniz (JPG, JPEG,PNG VEYA BMP)</label>
                                    </div>
                                </div>
                            </div>

                            <!--PROFİL FOTO SON-->




                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">

                    </div>

                    <!-- /.card-footer -->
                </div>
                <!--BİRİNCİ ALAN SONU-->

                <!--İKİNCİ ALAN BAŞI-->
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
                                <select class="form-control select2bs4" name="egitim[]" id="egitim" multiple="multiple">
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
                                <select class="form-control select2bs4" name="yetenek[]" id="yetenek" multiple="multiple">
                                </select>
                            </div>
                            <span class="text-muted text-sm font-italic">Her bir yetenekten sonra ENTER tuşuna veya VİRGÜ tuşuna basın.</span>

                        </div>
                        <!--YETENEK SON-->

                        <!--EK BİLGİ BAŞ-->
                        <div class="form-group">
                            <label>Görevleri:</label>
                            <div class="input-group">
                                <select class="form-control select2bs4" name="gorev[]" id="gorev" multiple="multiple">
                                </select>
                            </div>
                            <span class="text-muted text-sm font-italic">Her bir görevden sonra ENTER tuşuna veya VİRGÜL tuşuna basın.</span>

                        </div>
                        <!--EK BİLGİ SON-->

                    </div>

                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm kullanıcıları görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
                        <button type="submit" class="btn btn-success float-right">{{__('Kaydet')}}</button>

                    </div>

                </div>
                <!--İKİNCİ ALAN SONU-->

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

    <!--fotoğraf yükleme-->
    <script>
        $(document).ready(function () {
            bsCustomFileInput.init();
        });
    </script>

    <!--açılır takvim-->
    <script>
        $('.tarih').datepicker({
            language: "tr"
        });
    </script>

    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit').validate({
                rules: {
                    name: {
                        required: true,
                    },

                    email: {
                        required: true,
                        email: true,
                    },
                    pozisyon: {
                        required: true,
                    },
                    ise_giris: {
                        required: true,
                    },
                    password: {
                        required: true,
                        minlength: 8
                    },
                    password_tekrar: {
                        equalTo: "#password"
                    },
                    avatar: {
                        extension: "png|jpg|jpeg|bmp|gif"
                    }

                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }

            });
        });
    </script>
    <!--AYAR KODU SON-->
@endsection
