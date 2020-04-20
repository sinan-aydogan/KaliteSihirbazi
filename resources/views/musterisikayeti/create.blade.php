@extends('anasablon')
@section('baslik','Yeni Müşteri Şikayeti Oluştur')
@section('anabaslik','Müşteri Şikayeti Oluşturma Paneli')
@section('csskodu')
    <!-- SUMMER NOTE -->
    <link rel="stylesheet" href="{{ asset('plugins/summernote/summernote-bs4.css') }}">
    <!--açılır takvim-->
    <link href="{{asset('/plugins/datepicker/css/bootstrap-datepicker.min.css')}}" rel="stylesheet">
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
                        <h3 class="card-title">{{ __('Yeni Müşteri Şikayeti Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}">
                        @csrf

                        <!--ŞİKAYET KATEGORİSİ BAŞ-->
                            <div class="form-group">
                                <label>Şikayet Kategorisi:</label>
                                <select name="sikayet_kategorisi" id="sikayet_kategorisi"  class="form-control select2bs4" style="width: 100%;">
                                    <option value="1">Normal</option>
                                    <option value="2">Müşteri Memnuniyeti</option>
                                    <option value="3">Keyfi İade</option>
                                    <option value="4">Ticari</option>
                                </select>

                            </div>
                            <!--ŞİKAYET KATEGORİSİ SON-->

                            <!--BAYİ ADI BAŞ-->
                            <div class="form-group">
                                <label>Şikayet Tarihi:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                                    </div>
                                    <input type="text" name="sikayet_tarihi" id="sikayet_tarihi"  class="form-control tarih" placeholder="GÜN.AY.YIL">
                                </div>
                            </div>
                            <!--BAYİ ADI SON-->

                            <!--BÖLÜM BAŞ-->
                            <div class="form-group">
                                <label>İlgili Bölüm:</label>
                                <select name="sikayet_bolum" id="sikayet_bolum"  class="form-control select2bs4" style="width: 100%;">
                                    <option>--Bölün Seçin--</option>
                                    @foreach($bolumler as $bolum)
                                    <option value="{{$bolum->id}}">{{$bolum->bolum_adi}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--BÖLÜM SON-->

                            <!--ÜRÜNLER BAŞ-->
                            <div class="form-group" style="position:relative">
                                <label>İlgili Ürün:</label>
                                <select name="sikayet_urun" id="sikayet_urun"  class="form-control select2bs4" style="width: 100%;">
                                </select>
                            </div>


                            <!--ÜRÜNLER SON-->

                            <!--BAYİ BAŞ-->
                            <div class="form-group">
                                <label>Şikayet Eden Bayi:</label>
                                <select name="sikayet_bayi" id="sikayet_bayi"  class="form-control select2bs4" style="width: 100%;">
                                    <option>--Bayi Seçin--</option>
                                    @foreach($bayiler as $bayi)
                                        <option value="{{$bayi->id}}">{{$bayi->bayi_adi}}</option>
                                    @endforeach
                                </select>

                            </div>
                            <!--BAYİ SON-->

                            <!--BAYİ BAŞ-->
                            <div class="form-group">
                                <label>Şikayet Türü:</label>
                                <select name="sikayet_turu" id="sikayet_turu"  class="form-control select2bs4" style="width: 100%;">
                                </select>

                            </div>
                            <!--BAYİ SON-->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm şikayet türlerini görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
    <!--açılır takvim-->
    <script src="{{asset('plugins/datepicker/js/bootstrap-datepicker.min.js')}}"></script>
    <script src="{{asset('plugins/datepicker/js/bootstrap-datepicker.tr.min.js')}}"></script>

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
<!--açılır takvim-->
    <script>
        $('.tarih').datepicker({
            language: "tr",
            orientation: "bottom"
        });
    </script>
    <!--başarılı mesajı-->

    @if(session('mesaj'))
        <script type="text/javascript">
            Swal.fire ({
                type: '{{session('mesaj.tur')}}',
                title: '{!! session('mesaj.title') !!}',
                html: '{!! session('mesaj.icerik') !!}',
                showConfirmButton: true,
                onBeforeOpen: () => {
                }
            })
        </script>
    @endif
<!--bölüme bağlı ürün listesi-->

    <script>
        $(document).ready(function() {
            $('#sikayet_bolum').on('change', function() {
                var stateID = $(this).val();
                if(stateID) {
                    $.ajax({
                        url: '/veri/sikayet_urunu/'+stateID,
                        type: "GET",
                        data : {"_token":"{{ csrf_token() }}"},
                        dataType: "json",
                        success:function(data) {
                            //console.log(data);
                            if(data){
                                $('#sikayet_urun').empty();
                                $('#sikayet_urun').focus;
                                $('#sikayet_urun').append('<option value="">-- Ürün Seçin --</option>');
                                $.each(data, function(key, value){
                                    $('select[name="sikayet_urun"]').append('<option value="'+ value.id +'">' + value.urun_adi+ '</option>');
                                });
                            }else{
                                $('#sikayet_urun').empty();
                            }
                        }
                    });
                }else{
                    $('#sikayet_urun').empty();
                }
            });
        });
    </script>
    <!--bölüme bağlı şikayet türü listesi-->
    <script>
        $(document).ready(function() {
            $('#sikayet_bolum').on('change', function() {
                var stateID = $(this).val();
                if(stateID) {
                    $.ajax({
                        url: '/veri/sikayet_turu/'+stateID,
                        type: "GET",
                        data : {"_token":"{{ csrf_token() }}"},
                        dataType: "json",
                        success:function(data) {
                            //console.log(data);
                            if(data){
                                $('#sikayet_turu').empty();
                                $('#sikayet_turu').focus;
                                $('#sikayet_turu').append('<option value="">-- Şikayet Türü Seçin --</option>');
                                $.each(data, function(key, value){
                                    $('select[name="sikayet_turu"]').append('<option value="'+ value.id +'">' + value.sikayet_turu_adi+ '</option>');
                                });
                            }else{
                                $('#sikayet_turu').empty();
                            }
                        }
                    });
                }else{
                    $('#sikayet_turu').empty();
                }
            });
        });
    </script>

    <!--AYAR KODU SON-->
@endsection






