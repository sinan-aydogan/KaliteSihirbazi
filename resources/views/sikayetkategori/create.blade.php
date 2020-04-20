@extends('anasablon')
@section('baslik','Yeni Şikayet Kategorisi Oluştur')
@section('anabaslik','Şikayet Kategorisi Oluşturma Paneli')
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
                        <h3 class="card-title">{{ __('Yeni Şikayet Kategorisi Oluştur') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">

                        <!--KAYIT FORMU BAŞ-->
                        <form method="post" action="{{ route($controller.'.store') }}">
                        @csrf
                        <!--DURUM ADI BAŞ-->
                            <div class="form-group">
                                <label>Kategori Adı:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-stream"></i></span>
                                    </div>
                                    <input type="text" name="sikayet_kategori_adi" id="sikayet_kategori_adi"  class="form-control" placeholder="KATEGORİNİN ADI">
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
                title: '{!! session('mesaj.title') !!}',
                html: '{!! session('mesaj.icerik')!!}',
                showConfirmButton: true,
                onBeforeOpen: () => {
                }
            })
        </script>
    @endif

    <!--AYAR KODU SON-->
@endsection
