@extends('anasablon')
@section('baslik','Bölüm Düzenle')
@section('anabaslik','Bölüm Düzenleme Paneli')
@section('csskodu')


@endsection
@section('icerik')




    @php
        $controller=Request::segment(1);
    @endphp
        <div class="row">
            <div class="col-12">



                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ __('Bölüm Düzenle') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="POST" action="{{ route($controller.'.update', $bolumler->id) }}" id="kayit">
                        @csrf
                        @method('PATCH')
                        <!--BÖLÜM ADI BAŞ-->
                            <div class="form-group">
                                <label>Bölüm Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-archway"></i></span>
                                    </div>
                                    <input type="text" name="bolum_adi" id="bolum_adi"  class="form-control" value="{{$bolumler->bolum_adi}}" placeholder="BÖLÜMÜN ADI">
                                </div>
                            </div>
                            <!--BAYİ ADI SON-->

                            <!--YÖNETİCİ ADI BAŞ-->
                            <div class="form-group">
                                <label>Bölüm Yöneticisi:</label>
                                <div class="input-group">
                                    <select class="form-control select2bs4" name="bolum_yonetici">
                                        <option value="">--YÖNETİCİ SEÇ--</option>
                                        @foreach($kullanicilar as $kullanici)
                                            <option value="{{$kullanici->id}}" @if($kullanici->id == $bolumler->bolum_yonetici) selected="selected" @endif>{{$kullanici->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <!--YÖNETİCİADI SON-->

                            <!--ŞİKAYET ALABİLİRLİK BAŞ-->
                            <div class="form-group  clearfix">
                                <label>Bölüm Müşteri Şikayeti Alabilir mi?:</label>
                                <div class="input-group">

                                    <input type="checkbox" data-off-text="Şikayet Alamaz" data-size="normal" data-animate="true" data-label-width="15px" data-handle-width="75px" data-on-text="Şikayet Alabilir" name="bolum_sikayet_alabilirlik" id="bolum_sikayet_alabilirlik" @if($bolumler->bolum_sikayet_alabilirlik=="on") checked @endif data-bootstrap-switch data-off-color="danger" data-on-color="success">
                                </div>
                            </div>
                            <!--ŞİKAYET ALABİLİRLİK SON-->

                            <!--ÜRÜN KAYDEDİLEBİLİRLİK BAŞ-->
                            <div class="form-group  clearfix">
                                <label>Bölüm Üzerine Ürün Kaydedilebilir mi?:</label>
                                <div class="input-group">

                                    <input type="checkbox" data-off-text="Hayır" data-size="normal" data-animate="true" data-label-width="15px" data-handle-width="75px" data-on-text="Evet" name="bolum_urun_kaydedilebilirlik" id="bolum_urun_kaydedilebilirlik" @if($bolumler->bolum_urun_kaydedilebilirlik=="on") checked @endif data-bootstrap-switch data-off-color="danger" data-on-color="success">
                                </div>
                            </div>
                            <!--ÜRÜN KAYDEDİLEBİLİRLİK SON-->


                            <!--BÖLÜM RENGİ BAŞ-->
                            <div class="form-group clearfix">
                                <label>Bölüm Rengi:</label>
                                <div class="icheck-danger d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="red")  checked @endif id="bolum_kirmizi" value="red" name="bolum_rengi">
                                    <label class="text-red" for="bolum_kirmizi">
                                        Kırmızı
                                    </label>
                                </div>
                                <div class="icheck-blue d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="blue")  checked @endif  id="bolum_mavi" value="blue" name="bolum_rengi">
                                    <label class="text-blue" for="bolum_mavi">
                                        Mavi
                                    </label>
                                </div>
                                <div class="icheck-green d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="green")  checked @endif  id="bolum_yesil" value="green" name="bolum_rengi">
                                    <label class="text-green" for="bolum_yesil">
                                        Yeşil
                                    </label>
                                </div>
                                <div class="icheck-purple d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="purple")  checked @endif  id="bolum_mor" value="purple" name="bolum_rengi">
                                    <label class="text-purple" for="bolum_mor">
                                        Mor
                                    </label>
                                </div>
                                <div class="icheck-orange d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="orange")  checked @endif  id="bolum_turuncu" value="orange" name="bolum_rengi">
                                    <label class="text-orange" for="bolum_turuncu">
                                        Turuncu
                                    </label>
                                </div>
                                <div class="icheck-greensea d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="green-sea")  checked @endif id="bolum_eflatun" value="green-sea" name="bolum_rengi">
                                    <label class="text-green-sea" for="bolum_eflatun">
                                        Eflatun
                                    </label>
                                </div>
                                <div class="icheck-gray d-inline">
                                    <input type="radio" @if($bolumler->bolum_rengi=="gray")  checked @endif id="bolum_gri" value="gray" name="bolum_rengi">
                                    <label class="text-gray"  for="bolum_gri">
                                        Gri
                                    </label>
                                </div>
                            </div>
                            <!--BÖLÜM RENGİ SON-->


                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm bölümleri görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
                        <button type="submit" class="btn btn-success float-right">{{__('Kaydet')}}</button>
                    </div>
                    <!-- /.card-footer -->
                </div>
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

    <!--JAVASCRİPT IMPORT SON-->

    <!--AYAR KODU BAŞ-->

    <script>
        $(function () {
            $("input[data-bootstrap-switch]").each(function(){
                $(this).bootstrapSwitch('state', $(this).prop('checked'));
            });
        })
    </script>
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

    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit').validate({
                rules: {
                    bolum_adi: {
                        required: true,
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
