@extends('anasablon')
@section('baslik','Yeni Ürün Türü Oluştur')
@section('anabaslik','Ürün Türü Oluşturma Paneli')
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
                        <h3 class="card-title">{{ __('Yeni Ürün Türü Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}" id="kayit">
                        @csrf
                        <!--BÖLÜM ADI BAŞ-->
                            <div class="form-group">
                                <label>Ürün Türü:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-list-alt"></i></span>
                                    </div>
                                    <input type="text" name="urun_turu_adi" id="urun_turu_adi"  class="form-control" placeholder="ÜRÜN TÜRÜNÜN ADI">
                                </div>
                            </div>
                            <!--BAYİ ADI SON-->

                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="../{{ $controller }}">Tüm ürün türlerini görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit').validate({
                rules: {
                    urun_turu_adi: {
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
