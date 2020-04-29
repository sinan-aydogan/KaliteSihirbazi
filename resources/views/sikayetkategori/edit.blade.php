@extends('anasablon')
@section('baslik','Şikayet Kategorisi Güncelle')
@section('anabaslik','Şikayet Kategorisi Güncelleme Paneli')
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
                        <h3 class="card-title">{{ __('Şikayet Kategorisi Güncelle') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.update',$sikayet_kategorisi->id) }}" id="kayit">
                            @method('PATCH')
                        @csrf
                        <!--DURUM ADI BAŞ-->
                            <div class="form-group">
                                <label>Kategori Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-stream"></i></span>
                                    </div>
                                    <input type="text" name="sikayet_kategori_adi" id="sikayet_kategori_adi"  class="form-control" placeholder="KATEGORİNİN ADI" value="{{$sikayet_kategorisi->sikayet_kategori_adi}}">
                                </div>
                            </div>
                            <!--DURUM ADI SON-->



                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="{{URL($controller)  }}">Tüm şikayet kategorilerini görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit').validate({
                rules: {
                    sikayet_kategori_adi: {
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
