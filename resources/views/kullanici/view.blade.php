@php
    $controller=Request::segment(1);
    $controller1=$kullanici;
@endphp
@extends('anasablon')
@section('baslik',$controller1->name)
@section('anabaslik','Kullanıcı Yönetim Paneli')
@section('icerik')

  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

          <div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">

                      <!-- Profile Image -->
                      <div class="card card-primary card-outline">
                          <div class="card-body box-profile">
                              <div class="text-center">
                                  <img class="profile-user-img img-fluid img-circle"
                                       src="{{asset('storage/dosya/avatar/'.$controller1->avatar)}}"
                                       alt="User profile picture">
                              </div>

                              <h3 class="profile-username text-center">{{$controller1->name}}</h3>

                              <p class="text-muted text-center text-md">{{$controller1->pozisyon}}</p>

                              <ul class="list-group list-group-unbordered mb-3">
                                  <li class="list-group-item">
                                      <b>Bölüm</b> <a class="float-right">{{$bolumler->find($controller1->bolum)->bolum_adi}}</a>
                                  </li>
                                  <li class="list-group-item">
                                      <b>İş Başlangıç</b> <a class="float-right">{{date('d.m.Y',strtotime($controller1->ise_giris) )}}</a>
                                  </li>
                                  <li class="list-group-item">
                                      <b>Yöneticisi</b> <a class="float-right"> İlker ÖNDER</a>
                                  </li>
                              </ul>

                              <a href="#" class="btn btn-primary btn-block"><b>Mesaj Gönder</b></a>
                          </div>
                          <!-- /.card-body -->
                      </div>
                      <!-- /.card -->

                      <!-- About Me Box -->
                      <div class="card card-primary">
                          <div class="card-header">
                              <h3 class="card-title">Hakkında</h3>
                          </div>
                          <!-- /.card-header -->
                          <div class="card-body">
                              <strong><i class="fas fa-book mr-1"></i> Eğitim</strong>

                              <p class="text-muted" style="margin-top: 10px">
                                  @if($controller1->egitim != null)
                                  @php
                                  $egitimlerarray = explode(',', $controller1->egitim)
                                  @endphp
                                  @foreach($egitimlerarray as $egitim)
                                  <span class="badge badge-danger">{{$egitim}}</span><br>
                                      @endforeach
                                      @else
                                  --YETERLİ BİLGİ YOK--
                                      @endif
                              </p>


                              <hr>

                              <strong><i class="fas fa-map-marker-alt mr-1"></i> Adres</strong>

                              <p class="text-muted" style="margin-top: 10px">
                                  @if($controller1->konum != null)
                                      {{$controller1->konum}}
                                  @else
                                      --YETERLİ BİLGİ YOK--
                                  @endif
                              </p>

                              <hr>

                              <strong><i class="fas fa-pencil-alt mr-1"></i> Yetenekler</strong>

                              <p class="text-muted" style="margin-top: 10px">
                                  @if($controller1->yetenek != null)
                                      @php
                                          $yetenekarray = explode(',', $controller1->yetenek)
                                      @endphp
                                      @foreach($yetenekarray as $yetenek)
                                          <span class="badge badge-info text-nowrap">{{$yetenek}}</span>
                                      @endforeach
                                  @else
                                      --YETERLİ BİLGİ YOK--
                                  @endif
                              </p>

                              <hr>

                              <strong><i class="far fa-file-alt mr-1"></i> Sorumluluklar</strong>
                              <p class="text-muted" style="margin-top: 10px">
                              @if($controller1->gorev != null)
                                  @php
                                      $gorevarray = explode(',', $controller1->gorev);
                                  @endphp
                                  @foreach($gorevarray as $gorev)
                                      <span class="badge badge-success text-nowrap">{{$gorev}}</span>
                                  @endforeach
                              @else
                              -YETERLİ BİLGİ YOK-
                                  @endif
                              </p>
                          </div>
                          <!-- /.card-body -->
                      </div>
                      <!-- /.card -->
                  </div>
                  <!-- /.col -->
                  <div class="col-md-9">
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
                         {{date('d.m.Y',strtotime($controller1->created_at))}}
                        </span>
                                          </div>
                                          <!-- /.timeline-label -->
                                          <!-- timeline item -->
                                          <div>
                                              <i class="fas fa-key bg-red"></i>

                                              <div class="timeline-item">
                                                  <span class="time"><i class="far fa-clock"></i>
                                                   @php
                                                       $ilk=strtotime($controller1->created_at);
                                                       $son=time();
                                                       $fark=($son-$ilk)/(60*60*24*7*4.35*12);
                                                       $fark2=($fark-intval($fark))*12;
                                                           $periods= array("second", "minute", "hour", "day", "week", "month", "year", "decade");
                                                           $lengths= array("60","60","24","7","4.35","12","10");
                                                          echo "(".intval($fark)." Yıl ".intval($fark2)." Ay)";
                                                   @endphp

                                                  </span>

                                                  <h3 class="timeline-header"><a href="#">{{$controller1->name}}</a> sistemize kayıt oldunuz, aramıza Hoşgeldiniz !!!</h3>

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
                                          <form method="POST" class="form-horizontal" action="{{ route($controller.'.update', $controller1->id) }}">
                                          @csrf
                                          @method('PUT')
                                         <!--KULLANICI DÜZENLEME FORMU BAŞ-->
                                              <div>
                                              <!--PERSONEL ADI BAŞ-->
                                              <div class="form-group">
                                                  <label>İsim:</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text"><i class="fas fa-user-tie"></i></span>
                                                      </div>
                                                      <input type="text" name="name" id="name"  class="form-control text-bold text-primary" placeholder="PERSONELİN ADI VE SOYADI" value="{{$controller1->name}}">
                                                  </div>
                                              </div>
                                              <!--PERSONEL ADI SON-->

                                              <!--EMAİL ADI BAŞ-->
                                              <div class="form-group">
                                                  <label>Email Adresi:</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                                      </div>
                                                      <input type="text" name="email" id="email"  class="form-control text-bold text-primary" placeholder="PERSONELİN EMAİL ADRESİ" value="{{$controller1->email}}">
                                                  </div>
                                              </div>
                                              <!--EMAİL ADI SON-->

                                              <!--BÖLÜM BAŞ-->
                                              <div class="form-group">
                                                  <label>Bağlı Olduğu Bölüm:</label>
                                                  <div class="input-group">
                                                      <style>
                                                          .select2 {
                                                              color: #007bff;
                                                              font-weight: bold;
                                                          }

                                                          .select2-results__option[aria-selected=true]{
                                                              color: #007bff;
                                                              font-weight: bold;
                                                          }

                                                      </style>
                                                      <select class="form-control select2bs4" name="bolum" id="bolum">
                                                          <option>--BÖLÜM SEÇİNİZ--</option>
                                                          @foreach($bolumler as $bolum)
                                                              <option value="{{$bolum->id}}" @if($controller1->bolum == $bolum->id) selected="selected"@endif>{{$bolum->bolum_adi}}</option>
                                                          @endforeach
                                                      </select>

                                                  </div>
                                              </div>
                                              <!--BÖLÜM SON-->

                                              <!--POZİSYON BAŞ-->
                                              <div class="form-group">
                                                  <label>Pozisyon (Title):</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text"><i class="fas fa-cog"></i></span>
                                                      </div>
                                                      <input type="text" name="pozisyon" id="pozisyon"  class="form-control text-bold text-primary" placeholder="PERSONELİN POZİSYONU" value="{{$controller1->pozisyon}}">
                                                  </div>
                                              </div>
                                              <!--POZİSYON SON-->

                                              <!--İŞE GİRİŞ BAŞ-->
                                              <div class="form-group">
                                                  <label>İşe Giriş Tarihi:</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
                                                      </div>
                                                      <input type="text" name="ise_giris" id="ise_giris" class="form-control tarih text-bold text-primary" placeholder="İŞE GİRİŞ TARİHİ" value="{{date('d.m.Y', strtotime($controller1->ise_giris))}}">
                                                  </div>
                                              </div>
                                              <!--İŞE GİRİŞ SON-->

                                              <!--ŞİFRE BAŞ-->
                                              <div class="form-group">
                                                  <label>Şifre:</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text"><i class="fas fa-key"></i></span>
                                                      </div>
                                                      <input type="text" name="password" id="password"  class="form-control text-bold text-primary">
                                                  </div>
                                                  <span class="text-muted font-italic text-sm">Şifreyi değiştirmek değiştirmek istemiyorsanız boş bırakınız.</span>
                                              </div>
                                              <!--ŞİFRE SON-->

                                              <!--PROFİL FOTO BAŞ-->
                                              <div class="form-group">
                                                  <label>Profil Resmi:</label>
                                                  <div class="input-group">
                                                      <div class="container">
                                                      <div class="row">
                                                          <div class="cl-2 align-self-center">
                                                          <img class="profile-user-img img-fluid img-circle"
                                                               src="{{asset('storage/dosya/avatar/'.$controller1->avatar)}}"
                                                               alt="User profile picture">
                                                          </div>
                                                          <div class="col-10 align-self-center pr-2">
                                                          <div class="custom-file">
                                                              <input type="file" class="custom-file-input" name="avatar" id="exampleInputFile">
                                                              <label class="custom-file-label" for="avatar">Fotoğrafı Seçiniz</label>
                                                          </div>
                                                          </div>
                                                      </div>
                                                      </div>

                                                  </div>
                                              </div>

                                              <!--PROFİL FOTO SON-->
</div>
                                  <!-- /.card-body -->

                                  <!-- /.card-footer -->

                                  <div class="card card-red card-outline">

                                  <div class="card-header" style="height: 35px">
                                      <h3 class="card-title text-red" style="margin-top: -5px"><b>{{ __('Personel Diğer Bilgiler') }}</b></h3>
                                  </div>

                                  <!-- /.card-header -->
                                  <div class="card-body">

                                      <!--EĞİTİM BAŞ-->
                                      <div class="form-group">
                                          <label>BİTİRDİĞİ OKULLAR:</label>
                                          <div class="input-group">
                                              <select class="form-control select2bs4" name="egitim[]" multiple="multiple">
                                                  @if($controller1->egitim != null)

                                                      @foreach(explode(',', $controller1->egitim) as $egitim)
                                                          <option value="{{$egitim}}" selected="selected">{{$egitim}}</option>
                                                          @endforeach
                                                      @endif
                                              </select>
                                          </div>
                                          <span class="text-muted text-sm font-italic">Okulun adını yazıp ENTER tuşuna veya VİRGÜ tuşuna basın.</span>

                                      </div>
                                      <!--EĞİTİM SON-->

                                      <!--KONUM BAŞ-->
                                      <div class="form-group">
                                          <label>Yaşadığı Yer:</label>
                                          <div class="input-group">
                                              <div class="input-group-prepend">
                                                  <span class="input-group-text"><i class="fas fa-street-view"></i></span>
                                              </div>
                                              <input type="text" name="konum" id="konum"  class="form-control  text-bold text-primary" placeholder="PERSONELİN ADRESİ" value="{{$controller1->konum}}">
                                          </div>
                                      </div>
                                      <!--KONUM SON-->

                                      <!--YETENEK BAŞ-->
                                      <div class="form-group">
                                          <label>Yetenekler:</label>
                                          <div class="input-group">
                                              <select class="form-control select2bs4" name="yetenek[]" multiple="multiple">
                                                  @if($controller1->yetenek != null)

                                                      @foreach(explode(',', $controller1->yetenek) as $yetenek)
                                                          <option value="{{$yetenek}}" selected="selected">{{$yetenek}}</option>
                                                      @endforeach
                                                  @endif
                                              </select>
                                          </div>
                                          <span class="text-muted text-sm font-italic">Her bir yetenekten sonra ENTER tuşuna veya VİRGÜ tuşuna basın.</span>

                                      </div>
                                      <!--YETENEK SON-->

                                      <!--EK BİLGİ BAŞ-->
                                      <div class="form-group">
                                          <label>Görevleri:</label>
                                          <div class="input-group">
                                              <select class="form-control select2bs4" name="gorev[]" multiple="multiple">
                                                  @if($controller1->gorev != null)

                                                      @foreach(explode(',', $controller1->gorev) as $gorev)
                                                          <option value="{{$gorev}}" selected="selected">{{$gorev}}</option>
                                                      @endforeach
                                                  @endif
                                              </select>
                                          </div>
                                          <span class="text-muted text-sm font-italic">Her bir görevden sonra ENTER tuşuna veya VİRGÜ tuşuna basın.</span>

                                      </div>

                                      <!--EK BİLGİ SON-->

                                  </div>
                              </div>

                                              <button type="submit" class="btn btn-success btn-block">{{__('Kaydet')}}</button>

                                          <!--KULLANICI DÜZENLEME FORMU SON-->
                                      </form>
                                  </div>
                                  <!-- /.tab-pane -->
                              </div>
                              <!-- /.tab-content -->
                          </div><!-- /.card-body -->
                      </div>
                      <!-- /.nav-tabs-custom -->
                  </div>
                  <!-- /.col -->
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
<!--{{$controller}} LİSTESİ DATATABLE AYAR BAŞ-->
<script>
  $(function () {
    $('#{{$controller}}').DataTable({
      "paging": true,
      "lengthChange": true,
      "searching": true,
      "ordering": true,
      "info": true,
      "autoWidth": true,
      "language": {
          "url": "//cdn.datatables.net/plug-ins/1.10.20/i18n/Turkish.json"
      }


    });
  });
</script>
<!--{{$controller}} LİSTESİ DATATABLE AYAR SON-->

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

<script>
    $(function () {
        //Initialize Select2 Elements
        $('.select2').select2()

        //Initialize Select2 Elements
        $('.select2bs4').select2({
            theme: 'bootstrap4',
            tags: true,
            tokenSeparators: [','],
        })
        // Summernote
        $('.textarea').summernote()
    })
</script>

@endsection
