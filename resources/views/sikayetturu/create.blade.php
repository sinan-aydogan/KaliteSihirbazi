@extends('anasablon')
@section('baslik','Yeni Şikayet Türü Oluştur')
@section('anabaslik','Şikayet Türü Oluşturma Paneli')
@section('csskodu')
    <!-- SUMMER NOTE -->
    <link rel="stylesheet" href="{{ asset('plugins/summernote/summernote-bs4.css') }}">
@endsection
@section('icerik')




    @php
        $controller=Request::segment(1);
    @endphp
        <div class="row">
            <div class="col-12">



                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{ __('Yeni Şikayet Türü Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}" id="kayit">
                        @csrf
                            <!--BAYİ ADI BAŞ-->
                            <div class="form-group">
                                <label>Şikayet Türü Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-bug"></i></span>
                                    </div>
                                    <input type="text" name="sikayet_turu_adi" id="sikayet_turu_adi"  class="form-control" placeholder="ŞİKAYETİN KISA TANIMI">
                                </div>
                            </div>
                            <!--BAYİ ADI SON-->

                            <!--BÖLÜM BAŞ-->
                            <div class="form-group">
                                <label>İlgili Bölüm:</label>
                                <select name="sikayet_turu_bolum" id="sikayet_turu_bolum"  class="form-control select2bs4" style="width: 100%;" data-placeholder="-BÖLÜM SEÇ-">
                                    <option value="">-BÖLÜM SEÇ-</option>
                                    @foreach($bolumler as $bolum)
                                    <option value="{{$bolum->id}}">{{$bolum->bolum_adi}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <!--BÖLÜM SON-->

                            <!--ÜRÜNLER BAŞ-->
                            <div class="form-group">
                                <label>İlgili Ürünler:</label>
                                <select name="sikayet_turu_urunler[]" id="sikayet_turu_urunler" class="form-control select2bs4" multiple="multiple" data-placeholder="-ÜRÜN SEÇ-">
                                </select>
                            </div>
                            <!--ÜRÜNLER SON-->

                            <!--ŞİKAYET KAYNAĞI BAŞ-->
                            <div class="form-group text-red">
                                <label>Şikayetin Olası Kaynakları:</label>
                            <div class="mb-3">
                <textarea name="sikayet_turu_kaynak" rows="3" id="sikayet_turu_kaynak"class="form-control"  placeholder="Şikayeti ortaya çıkartabilecek temel problemleri yazınız"
                          style="width: 100%;  font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
                            </div>
                            </div>

                            <!--ŞİKAYET KAYNAĞI SON-->

                            <!--ÇÖZÜM ÖNERİSİ BAŞ-->
                            <div class="form-group text-green">
                                <label>Yerinde İnceleme Önerileri:</label>
                            <div class="mb-3">
                <textarea name="sikayet_turu_oneri" rows="3" id="sikayet_turu_oneri" class="form-control" placeholder="Şikayet durumunda yapılması gerekenler."
                          style="width: 100%; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
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

    <!--bölüme bağlı ürün listesi-->

    <script>
        $(document).ready(function() {
            $('#sikayet_turu_bolum').on('change', function() {
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
                                $('#sikayet_turu_urunler').empty();
                                $('#sikayet_turu_urunler').focus;
                                $('#sikayet_turu_urunler').append('<option value="">-- Ürün Seçin --</option>');
                                $.each(data, function(key, value){
                                    $('select[name="sikayet_turu_urunler[]"]').append('<option value="'+ value.id +'">' + value.urun_adi+ '</option>');
                                });
                            }else{
                                $('#sikayet_turu_urunler').empty();
                            }
                        }
                    });
                }else{
                    $('#sikayet_turu_urunler').empty();
                }
            });
        });
    </script>
    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit1').validate({
                rules: {
                    sikayet_turu_adi: {
                        required: true,
                    },

                    sikayet_turu_bolum: {
                        required: true,
                    },
                    sikayet_turu_oneri: {
                        maxlength:2000
                    },
                    sikayet_turu_kaynak: {
                        maxlength:2000
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
