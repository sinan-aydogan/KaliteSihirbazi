@extends('anasablon')
@section('baslik','Ürün Düzenle')
@section('anabaslik','Ürün Düzenleme Paneli')
@section('csskodu')
    <!-- SUMMER NOTE -->
    <link rel="stylesheet" href="{{ asset('plugins/summernote/summernote-bs4.css') }}">
    <!-- Ion Slider -->
    <link rel="stylesheet" href="{{asset('plugins/ion-rangeslider/css/ion.rangeSlider.min.css')}}">
    <!-- bootstrap slider -->
    <link rel="stylesheet" href="{{asset('plugins/bootstrap-slider/css/bootstrap-slider.min.css')}}">
@endsection
@section('icerik')




    @php
        $controller=Request::segment(1);
    @endphp

        <div class="row">
            <div class="col-12">



                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ __('Ürün Düzenle') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="POST" action="{{ route($controller.'.update', $urunler->id) }}" id="kayit">
                        @csrf
                        @method('PATCH')
                            <!--ÜRÜN ADI BAŞ-->
                            <div class="form-group">
                                <label>Ürün Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-boxes nav-icon"></i></span>
                                    </div>
                                    <input type="text" name="urun_adi" id="urun_adi" value="{!! $urunler->urun_adi !!}" class="form-control" placeholder="ÜRÜNÜN TAM ADI / TEKNİK KODU İLE">
                                </div>
                            </div>
                            <!--ÜRÜN ADI SON-->

                            <!--ÜRÜN TÜRÜ BAŞ-->
                            <div class="form-group">
                                <label>Ürünün Türü:</label>
                                <select name="urun_turu" id="urun_turu"  class="form-control select2bs4" style="width: 100%;">
                                    @foreach($urunturleri as $urunturu)
                                        <option value="{{$urunturu->id}}" @if($urunler->urun_turu==$urunturu->id) selected="selected" @endif>{{$urunturu->urun_turu_adi}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--ÜRÜN TÜRÜ SON-->

                            <!--BÖLÜM BAŞ-->
                            <div class="form-group">
                                <label>Üretildiği veya Bağlı Olduğu Bölüm:</label>
                                <select name="urun_bolum" id="urun_bolum"  class="form-control select2bs4" style="width: 100%;">
                                    @foreach($bolumler as $bolum)
                                    <option value="{{$bolum->id}}" @if($urunler->urun_bolum==$bolum->id) selected="selected" @endif>{{$bolum->bolum_adi}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--BÖLÜM SON-->

                            <!--STANDART BAŞ-->
                            <div class="form-group">
                                <label>Ürünün Belgeli Olduğu Standart:</label>
                                <select name="urun_standart" id="urun_standart"  class="form-control select2bs4" style="width: 100%;">
                                    <option value="" selected="selected">BELGESİZ</option>
                                    @foreach($standartlar as $standart)
                                        <option value="{{$standart->id}}" @if($urunler->urun_standart==$standart->id) selected="selected" @endif>{{$standart->standart_kodu}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--STANDART SON-->

                            <!--RAF ÖMRÜ BAŞ-->
                            <div class="form-group">
                                <label>Raf Ömrü:</label>
                                <div style="padding-left: 2%">
                                    <input id="range_5" type="text" name="urun_raf_omru" value="{!! $urunler->urun_raf_omru !!}">
                                </div>
                            </div>
                            <!--RAF ÖMRÜ SON-->

                            <!--ŞİKAYET KAYNAĞI BAŞ-->
                            <div class="form-group text-red">
                                <label>Ürün Detayı:</label>
                            <div class="mb-3">
                <textarea onkeyup="countChar(this)" maxlength="500"  rows="3" name="urun_aciklama" id="urun_aciklama"class="form-control"  placeholder="ÜRÜNÜN DETAYLI AÇIKLAMASI"
                          style="width: 100%; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{!! $urunler->urun_aciklama !!}</textarea>
                                <div class="float-right" id="charNum"></div>
                            </div>
                            </div>

                            <!--ŞİKAYET KAYNAĞI SON-->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="../../{{ $controller }}">Tüm ürünleri görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
    <!-- Ion Slider -->
    <script src="{{asset('plugins/ion-rangeslider/js/ion.rangeSlider.min.js')}}"></script>
    <!-- Bootstrap slider -->
    <script src="{{asset('plugins/bootstrap-slider/bootstrap-slider.min.js')}}"></script>

    <!--JAVASCRİPT IMPORT SON-->

    <!--AYAR KODU BAŞ-->

    <script>
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()

            //Initialize Select2 Elements
            $('.select2bs4').select2({
                theme: 'bootstrap4'
            })
            // Summernote
            $('.textarea').summernote()
        })

        //RAF ÖMRÜ SEÇİCİ
        $(function () {
            /* BOOTSTRAP SLIDER */
            $('.slider').bootstrapSlider()

            $('#range_5').ionRangeSlider({
                grid: true,
                values: [
                    "Raf Ömrü Yok", "3 Ay", "6 Ay", "9 Ay", "1 Yıl", "2 Yıl",
                    "3 Yıl", "4 Yıl", "5 Yıl", "6 Yıl", "7 Yıl", "8 Yıl", "9 Yıl","10 Yıl"
                ]
            })

        })

        //TEXT AREA SAYAÇ

        function countChar(val) {
            var len = val.value.length;
            if (len >= 500) {
                val.value = val.value.substring(0, 500);
            } else {
                $('#charNum').text(500 - len);
            }
        };
    </script>

    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit').validate({
                rules: {
                    urun_adi: {
                        required: true,
                    },
                    urun_turu: {
                        required: true,
                    },
                    urun_bolum: {
                        required: true,
                    },
                    urun_raf_omru: {
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
