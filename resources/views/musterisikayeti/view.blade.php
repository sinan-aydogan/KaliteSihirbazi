@php
    $controller=Request::segment(1);
@endphp
@extends('anasablon')
@section('baslik','Şikayet: '.$sikayet['key']->id)
@section('anabaslik','Kullanıcı Yönetim Paneli')
@section('csskodu')
    <!--açılır takvim-->
    <link href="{{asset('/plugins/datepicker/css/bootstrap-datepicker.min.css')}}" rel="stylesheet">

@endsection
@section('icerik')

  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

          <div class="container-fluid">
              <div class="row">
                  <div class="col-lg-3 col-md-12">

                          <!--ŞİKAYET ÖZETİ BAŞ-->
                          <div class="p-3 bg-white rounded shadow-sm card card-primary">
                              <h6 class="border-bottom border-gray pb-2 mb-0">Şikayet Bilgileri</h6>
                              <div class="media text-muted pt-3 border-bottom border-gray">
                                  <div class="d-flex bd-highlight">
                                      <div class="p-2 flex-fill bd-highlight"><i class="fas fa-2x fa-id-card"></i></div>
                                      <div class="p-2 flex-fill bd-highlight">
                                          <p class="media-body pb-3 mb-0 small lh-125">
                                              Bayi
                                              <strong class="d-block text-gray-dark">{{$sikayet['bayi']->bayi_adi}}</strong>
                                          </p></div>
                                  </div>


                              </div>
                              <div class="media text-muted pt-3">
                                  <i class="fa fa-boxes nav-icon nav-icon"></i>
                                  <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                      Ürün
                                      <strong class="d-block text-gray-dark"><span class="info-box-number">{{$sikayet['urun']->urun_adi}}</span></strong>
                                  </p>
                              </div>
                              <div class="media text-muted pt-3">
                                  <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1"></rect><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>
                                  <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                      <strong class="d-block text-gray-dark">@username</strong>
                                      Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                                  </p>
                              </div>
                              <small class="d-block text-right mt-3">
                                  <a href="#">All updates</a>
                              </small>
                          </div>

                          <!--ŞİKAYET ÖZETİ SON-->

                      <!-- Profile Image -->


                      <!-- About Me Box -->
                      <div class="card card-primary">
                          <div class="card-body">
                             <!--ŞİKAYET AKIŞI-->

                          </div>
                          <!-- /.card-body -->
                      </div>
                      <!-- /.card -->
                  </div>
                  <!-- /.col -->
                  <div class="col-lg-9 col-sm-12">
                      <div class="card">
                          <div class="card-header p-2">
                              <ul class="nav nav-pills" id="myTab">
                                  <li class="nav-item"><a class="nav-link active" href="#timeline" data-toggle="tab">Hareketler</a></li>
                                  <li class="nav-item"><a class="nav-link " href="#settings" data-toggle="tab">Ayarlar</a></li>
                              </ul>
                          </div><!-- /.card-header -->
                          <div class="card-body">
                              <div class="tab-content">
                                  <div class="tab-pane active" id="timeline">
                                      <!-- The timeline -->
                                      <div class="timeline timeline-inverse">
                                          <!-- timeline time label -->
                                          <div class="time-label">
                        <span class="bg-success">
                         TARİH
                        </span>
                                          </div>
                                          <!-- /.timeline-label -->
                                          <!-- timeline item -->
                                          <div>
                                              <i class="fas fa-key bg-red"></i>

                                              <div class="timeline-item">
                                                  <span class="time"><i class="far fa-clock"></i>
                                                  METİN1
                                                  </span>

                                                  <h3 class="timeline-header"><a href="#">METİN2</a> sistemize kayıt oldunuz, aramıza Hoşgeldiniz !!!</h3>

                                              </div>
                                          </div>
                                          <!-- END timeline item -->
                                          <div>
                                              <i class="far fa-clock bg-gray"></i>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- /.tab-pane -->

                                  <div class="tab-pane" id="settings">
                                          METİN3
              </div>
              <!-- /.row -->
          </div><!-- /.container-fluid -->

      <!--{{$controller}} LİSTESİ SON-->
    </div>
    <!-- /.col -->
  </div>
  <!-- /.row -->
@endsection

@section('javakodu')

    <!--JAVASCRİPT IMPORT BAŞ-->


    <script src="{{asset('plugins/summernote/summernote-bs4.min.js')}}"></script>
    <!--fotoğraf yükleme-->
    <script src="{{asset('plugins/bs-custom-file-input/bs-custom-file-input.min.js')}}"></script>
    <!--açılır takvim-->
    <script src="{{asset('plugins/datepicker/js/bootstrap-datepicker.min.js')}}"></script>
    <script src="{{asset('plugins/datepicker/js/bootstrap-datepicker.tr.min.js')}}"></script>


    <!--JAVASCRİPT IMPORT SON-->


<!--otomatik tab seçici-->
<script>
    $(function(){
        var hash = window.location.hash;
        hash && $('ul.nav.nav-pills a[href="' + hash + '"]').tab('show');
        $('ul.nav.nav-pills a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
        });
    });
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

    <!--fotoğraf yükleme-->
    <script>
        $(document).ready(function () {
            bsCustomFileInput.init();
        });
    </script>

    <!--açılır takvim-->
    <script>
        $('.tarih').datepicker({
            language: "tr"
        });
    </script>

    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#kayit').validate({
                rules: {
                    name: {
                        required: true,
                    },

                    email: {
                        required: true,
                        email: true,
                    },
                    pozisyon: {
                        required: true,
                    },
                    ise_giris: {
                        required: true,
                    },
                    password: {
                        required: true,
                        minlength: 8
                    },
                    password_tekrar: {
                        equalTo: "#password"
                    },
                    avatar: {
                        extension: "png|jpg|jpeg|bmp|gif"
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

<!--şifre alanı koşullu gösterme-->
<script>
    checkbox = $('#sifre_checkbox'),
        chShipBlock = $('#sifre_input');

    chShipBlock.hide();

    checkbox.on('click', function() {
        if($(this).is(':checked')) {
            chShipBlock.show();
            chShipBlock.find('input').attr('required', true);
        } else {
            chShipBlock.hide();
            chShipBlock.find('input').attr('required', false);
        }
    });
</script>


@endsection
