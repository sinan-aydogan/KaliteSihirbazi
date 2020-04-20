@extends('anasablon')
@section('baslik','Şikayet Türünü Güncelle')
@section('anabaslik','Şikayet Türü Güncelleme Paneli')
@section('csskodu')
    <!-- SUMMER NOTE -->
    <link rel="stylesheet" href="{{ asset('plugins/summernote/summernote-bs4.css') }}">
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
                        <h3 class="card-title">{{ __('Şikayeti Güncelle') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="POST" action="{{ route($controller.'.update', $sikayet_turleri->id) }}">
                        @csrf
                        @method('PATCH')
                            <!--BAYİ ADI BAŞ-->
                            <div class="form-group">
                                <label>Şikayet Türü Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-bug"></i></span>
                                    </div>
                                    <input type="text" name="sikayet_turu_adi" id="sikayet_turu_adi"  class="form-control" value="{{$sikayet_turleri->sikayet_turu_adi}}" placeholder="ŞİKAYETİN KISA TANIMI">
                                </div>
                            </div>
                            <!--BAYİ ADI SON-->

                            <!--BÖLÜM BAŞ-->
                            <div class="form-group">
                                <label>İlgili Bölüm:</label>
                                <select name="sikayet_turu_bolum" id="sikayet_turu_bolum"  class="form-control select2bs4" style="width: 100%;">
                                    @foreach($bolumler as $bolum)
                                        <option value="{{$bolum->id}}" @if($sikayet_turleri->sikayet_turu_bolum=$bolum->id)<selected="selected">@endif{{$bolum->bolum_adi}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--BÖLÜM SON-->

                            <!--ÜRÜNLER BAŞ-->
                            <div class="form-group">
                                <label>İlgili Ürünler:</label>
                                <select name="sikayet_turu_urunler" multiple="multiple" id="sikayet_turu_urunler"  class="form-control select2bs4" style="width: 100%;">
                                    <option value="1" selected="selected">FLEX</option>
                                    <option value="2">DİAMANT</option>
                                    <option value="3">[GUARD]EX</option>
                                    <option value="4">T24 PRO 30</option>
                                    <option value="5">T24 PRO 40</option>
                                    <option value="6">JETGİPS BASE</option>
                                    <option value="7">JETGİPS ULTRA</option>
                                    <option value="8">JETCEMENT ULTRA</option>
                                    <option value="9">CLEANEO SK 8/18 D</option>
                                </select>
                            </div>
                            <!--ÜRÜNLER SON-->

                            <!--ŞİKAYET KAYNAĞI BAŞ-->
                            <div class="form-group text-red">
                                <label>Şikayetin Olası Kaynakları:</label>
                            <div class="mb-3">
                <textarea name="sikayet_turu_kaynak" id="sikayet_turu_kaynak"class="form-control"  placeholder="Şikayeti ortaya çıkartabilecek temel problemleri yazınız"
                          style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{{$sikayet_turleri->sikayet_turu_kaynak}}</textarea>
                            </div>
                            </div>

                            <!--ŞİKAYET KAYNAĞI SON-->

                            <!--ÇÖZÜM ÖNERİSİ BAŞ-->
                            <div class="form-group text-green">
                                <label>Yerinde İnceleme Önerileri:</label>
                            <div class="mb-3">
                <textarea  name="sikayet_turu_oneri" id="sikayet_turu_oneri" class="form-control" placeholder="Şikayet durumunda yapılması gerekenler."
                          style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">{{$sikayet_turleri->sikayet_turu_oneri}}</textarea>
                            </div>
                            </div>

                            <!--ÇÖZÜM ÖNERİSİ SON-->

                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm şikayet türlerini görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
    </section>

    <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->



@endsection

@section('javakodu')

    <!--JAVASCRİPT IMPORT BAŞ-->

    <script src="{{asset('plugins/summernote/summernote-bs4.min.js')}}"></script>

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
    </script>
    <!--AYAR KODU SON-->
@endsection
