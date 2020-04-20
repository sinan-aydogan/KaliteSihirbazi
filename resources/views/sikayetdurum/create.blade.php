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
                        <form method="post" action="{{ route($controller.'.store') }}">
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
                                    <input type="radio" id="kirmizi" value="red" name="sikayet_durum_renk">
                                    <label class="text-red" for="kirmizi">
                                        Kırmızı
                                    </label>
                                </div>
                                <div class="icheck-blue d-inline">
                                    <input type="radio" id="mavi" value="blue" name="sikayet_durum_renk">
                                    <label class="text-blue" for="mavi">
                                        Mavi
                                    </label>
                                </div>
                                <div class="icheck-green d-inline">
                                    <input type="radio" id="yesil" value="green" name="sikayet_durum_renk">
                                    <label class="text-green" for="yesil">
                                        Yeşil
                                    </label>
                                </div>
                                <div class="icheck-purple d-inline">
                                    <input type="radio" id="mor" value="purple" name="sikayet_durum_renk">
                                    <label class="text-purple" for="mor">
                                        Mor
                                    </label>
                                </div>
                                <div class="icheck-orange d-inline">
                                    <input type="radio" id="turuncu" value="orange" name="sikayet_durum_renk">
                                    <label class="text-orange" for="turuncu">
                                        Turuncu
                                    </label>
                                </div>
                                <div class="icheck-greensea d-inline">
                                    <input type="radio" id="eflatun" value="green-sea" name="sikayet_durum_renk">
                                    <label class="text-green-sea" for="eflatun">
                                        Eflatun
                                    </label>
                                </div>
                                <div class="icheck-gray d-inline">
                                    <input type="radio" id="gri" value="gray" name="sikayet_durum_renk">
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
    @if(session('mesaj'))
        <script type="text/javascript">
            Swal.fire ({
                type: '{{session('mesaj.tur')}}',
                title: '{{session('mesaj.icerik')}}',
                showConfirmButton: true,
                onBeforeOpen: () => {
                }
            })
        </script>

    @endif

    <!--AYAR KODU SON-->
@endsection
