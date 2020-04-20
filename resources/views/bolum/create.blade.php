@extends('anasablon')
@section('baslik','Yeni Bölüm Oluştur')
@section('anabaslik','Bölüm Oluşturma Paneli')
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
                        <h3 class="card-title">{{ __('Yeni Bölüm Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}">
                        @csrf
                        <!--BÖLÜM ADI BAŞ-->
                            <div class="form-group">
                                <label>Bölüm Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-archway"></i></span>
                                    </div>
                                    <input type="text" name="bolum_adi" id="bolum_adi"  class="form-control" placeholder="BÖLÜMÜN ADI">
                                </div>
                            </div>
                            <!--BAYİ ADI SON-->

                            <!--YÖNETİCİ ADI BAŞ-->
                            <div class="form-group">
                                <label>Bölüm Yöneticisi:</label>
                                <div class="input-group">
                                    <select class="form-control select2bs4" name="bolum_yonetici">
                                        <option>--YÖNETİCİ SEÇ--</option>
                                        @foreach($kullanicilar as $kullanici)
                                            <option value="{{$kullanici->id}}">{{$kullanici->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <!--YÖNETİCİADI SON-->




                            <!--ŞİKAYET ALABİLİRLİK BAŞ-->
                            <div class="form-group  clearfix">
                                <label>Bölüm Müşteri Şikayeti Alabilir mi?:</label>
                                <div class="input-group">

                                    <input type="checkbox" data-off-text="Şikayet Alamaz" data-size="normal" data-animate="true" data-label-width="15px" data-handle-width="75px" data-on-text="Şikayet Alabilir" name="bolum_sikayet_alabilirlik" id="bolum_sikayet_alabilirlik" checked data-bootstrap-switch data-off-color="danger" data-on-color="success">
                                </div>
                            </div>
                            <!--ŞİKAYET ALABİLİRLİK SON-->

                            <!--ÜRÜN KAYDEDİLEBİLİRLİK BAŞ-->
                            <div class="form-group  clearfix">
                                <label>Bölüm Üzerine Ürün Kaydedilebilir mi?:</label>
                                <div class="input-group">

                                    <input type="checkbox" data-off-text="Hayır" data-size="normal" data-animate="true" data-label-width="15px" data-handle-width="75px" data-on-text="Evet" name="bolum_urun_kaydedilebilirlik" id="bolum_urun_kaydedilebilirlik" checked data-bootstrap-switch data-off-color="danger" data-on-color="success">
                                </div>
                            </div>
                            <!--ÜRÜN KAYDEDİLEBİLİRLİK SON-->

                            <!--BÖLÜM RENGİ BAŞ-->
                            <div class="form-group clearfix">
                                <label>Bölüm Rengi:</label>
                                <div class="icheck-danger d-inline">
                                    <input type="radio" id="bolum_kirmizi" value="red" name="bolum_rengi">
                                    <label class="text-red" for="bolum_kirmizi">
                                        Kırmızı
                                    </label>
                                </div>
                                <div class="icheck-blue d-inline">
                                    <input type="radio" id="bolum_mavi" value="blue" name="bolum_rengi">
                                    <label class="text-blue" for="bolum_mavi">
                                        Mavi
                                    </label>
                                </div>
                                <div class="icheck-green d-inline">
                                    <input type="radio" id="bolum_yesil" value="green" name="bolum_rengi">
                                    <label class="text-green" for="bolum_yesil">
                                        Yeşil
                                    </label>
                                </div>
                                <div class="icheck-purple d-inline">
                                    <input type="radio" id="bolum_mor" value="purple" name="bolum_rengi">
                                    <label class="text-purple" for="bolum_mor">
                                        Mor
                                    </label>
                                </div>
                                <div class="icheck-orange d-inline">
                                    <input type="radio" id="bolum_turuncu" value="orange" name="bolum_rengi">
                                    <label class="text-orange" for="bolum_turuncu">
                                        Turuncu
                                    </label>
                                </div>
                                <div class="icheck-greensea d-inline">
                                    <input type="radio" id="bolum_eflatun" value="green-sea" name="bolum_rengi">
                                    <label class="text-green-sea" for="bolum_eflatun">
                                        Eflatun
                                    </label>
                                </div>
                                <div class="icheck-gray d-inline">
                                    <input type="radio" id="bolum_gri" value="gray" name="bolum_rengi">
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

    <!--JAVASCRİPT IMPORT SON-->

    <!--AYAR KODU BAŞ-->
    <!--switch-->
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
    <!--AYAR KODU SON-->
@endsection
