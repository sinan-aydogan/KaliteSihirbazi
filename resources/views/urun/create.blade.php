@extends('anasablon')
@section('baslik','Yeni Ürün Oluştur')
@section('anabaslik','Ürün Oluşturma Paneli')
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

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-12">



                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ __('Yeni Ürün Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}">
                        @csrf
                            <!--ÜRÜN ADI BAŞ-->
                            <div class="form-group">
                                <label>Ürün Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-boxes nav-icon"></i></span>
                                    </div>
                                    <input type="text" name="urun_adi" id="urun_adi"  class="form-control" placeholder="ÜRÜNÜN TAM ADI / TEKNİK KODU İLE">
                                </div>
                            </div>
                            <!--ÜRÜN ADI SON-->

                            <!--ÜRÜN TÜRÜ BAŞ-->
                            <div class="form-group">
                                <label>Ürünün Türü:</label>
                                <select name="urun_turu" id="urun_turu"  class="form-control select2bs4" style="width: 100%;">
                                    @foreach($urunturleri as $urunturu)
                                        <option value="{{$urunturu->id}}" selected="selected">{{$urunturu->urun_turu_adi}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--ÜRÜN TÜRÜ SON-->

                            <!--BÖLÜM BAŞ-->
                            <div class="form-group">
                                <label>Üretildiği veya Bağlı Olduğu Bölüm:</label>
                                <select name="urun_bolum" id="urun_bolum"  class="form-control select2bs4" style="width: 100%;">
                                    @foreach($bolumler as $bolum)
                                    <option value="{{$bolum->id}}" selected="selected">{{$bolum->bolum_adi}}</option>
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
                                        <option value="{{$standart->id}}">{{$standart->standart_kodu}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--STANDART SON-->

                            <!--RAF ÖMRÜ BAŞ-->
                            <div class="form-group">
                                <label>Raf Ömrü:</label>
                                <div style="padding-left: 2%">
                                    <input id="range_5" type="text" name="urun_raf_omru" value="">
                                </div>
                            </div>
                            <!--RAF ÖMRÜ SON-->

                            <!--ŞİKAYET KAYNAĞI BAŞ-->
                            <div class="form-group text-red">
                                <label>Ürün Detayı:</label>
                            <div class="mb-3">
                <textarea onkeyup="countChar(this)" maxlength="500"  rows="3" name="urun_aciklama" id="urun_aciklama"class="form-control"  placeholder="ÜRÜNÜN DETAYLI AÇIKLAMASI"
                          style="width: 100%; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
                                <div class="float-right" id="charNum"></div>
                            </div>
                            </div>

                            <!--ŞİKAYET KAYNAĞI SON-->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm ürünleri görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
                        <button type="submit" class="btn btn-success float-right">{{__('Kaydet')}}</button>
                    </div>
                    <!-- /.card-footer -->
                </div>
                <input type="hidden" value="{{Auth::user()->id}}" name="user_id">
                </form>
                <!-- KAYIT FORMU SON -->
            </div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </section>

    <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->



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
    <!--AYAR KODU SON-->
@endsection
