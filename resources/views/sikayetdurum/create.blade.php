@extends('anasablon')
@section('baslik','Yeni Şikayet Durumu Oluştur')
@section('anabaslik','Şikayet Durumu Oluşturma Paneli')
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
                        <h3 class="card-title">{{ __('Yeni Şikayet Durumu Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}" id="kayit">
                        @csrf
                        <!--DURUM ADI BAŞ-->
                            <div class="form-group">
                                <label>Durum Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-hashtag"></i></span>
                                    </div>
                                    <input type="text" name="sikayet_durum_adi" id="sikayet_durum_adi"  class="form-control" placeholder="DURUMUN ADI">
                                </div>
                            </div>
                            <!--DURUM ADI SON-->


                            <!--BÖLÜM RENGİ BAŞ-->
                            <div class="form-group clearfix">
                                <label>Durum Rengi:</label>
                                <div class="icheck-danger d-inline">
                                    <input type="radio" id="kirmizi" value="220,20,60" name="sikayet_durum_renk">
                                    <label class="text-red" for="kirmizi">
                                        Kırmızı
                                    </label>
                                </div>
                                <div class="icheck-blue d-inline">
                                    <input type="radio" id="mavi" value="100,149,237" name="sikayet_durum_renk">
                                    <label class="text-blue" for="mavi">
                                        Mavi
                                    </label>
                                </div>
                                <div class="icheck-green d-inline">
                                    <input type="radio" id="yesil" value="0, 255, 0" name="sikayet_durum_renk">
                                    <label class="text-green" for="yesil">
                                        Yeşil
                                    </label>
                                </div>
                                <div class="icheck-purple d-inline">
                                    <input type="radio" id="mor" value="218,112,214" name="sikayet_durum_renk">
                                    <label class="text-purple" for="mor">
                                        Mor
                                    </label>
                                </div>
                                <div class="icheck-orange d-inline">
                                    <input type="radio" id="turuncu" value="255,215,0" name="sikayet_durum_renk">
                                    <label class="text-orange" for="turuncu">
                                        Turuncu
                                    </label>
                                </div>
                                <div class="icheck-greensea d-inline">
                                    <input type="radio" id="eflatun" value="46,139,87" name="sikayet_durum_renk">
                                    <label class="text-green-sea" for="eflatun">
                                        Eflatun
                                    </label>
                                </div>
                                <div class="icheck-gray d-inline">
                                    <input type="radio" id="gri" value="47,79,79" name="sikayet_durum_renk">
                                    <label class="text-gray"  for="gri">
                                        Gri
                                    </label>
                                </div>
                            </div>
                            <!--BÖLÜM RENGİ SON-->


                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                        <a href="{{URL($controller)  }}">Tüm şikayet durumlarını görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
                    sikayet_durum_adi: {
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
