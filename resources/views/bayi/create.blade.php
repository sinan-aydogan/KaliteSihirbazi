@extends('anasablon')
@section('baslik','Yeni Bayi Oluştur')
@section('anabaslik','Bayi Oluşturma Paneli')
@section('icerik')

    @php
        $controller=Request::segment(1);
    @endphp
  <div class="row">
    <div class="col-12">



      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Yeni Bayi Oluştur') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">

            <!--KAYIT FORMU BAŞ-->
<form method="post" action="{{ route($controller.'.store') }}" id="yeni_kayit">
@csrf
            <!--BAYİ ADI BAŞ-->
            <div class="form-group">
                <label>Bayi Adı:</label>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="far fa-id-card"></i></span>
                    </div>
                    <input type="text" name="bayi_adi" id="bayi_adi"  class="form-control" placeholder="BAYİNİN KISA TİCARİ İSMİ" required>
                </div>
                <!-- /.input group -->
            </div>
            <!--BAYİ ADI SON-->

            <!--BAYİ KODU BAŞ-->
            <div class="form-group">
                <label>Bayi Kodu:</label>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-fingerprint"></i></span>
                    </div>
                    <input type="text" name="bayi_kodu" id="bayi_kodu"  class="form-control" minlength="3" maxlength="5" placeholder="XYZDC (MİN:3 - MAX:5 KARAKTERLİ)" required>
                </div>
                <!-- /.input group -->
            </div>
            <!--BAYİ KODU SON-->


            <div class="form-group">
                <label>Bayi İli:</label>
                <select name="bayi_il" id="bayi_il"  class="form-control select2bs4" style="width: 100%;">
                    <option value="1">Adana</option>
                    <option value="2">Adıyaman</option>
                    <option value="3">Afyonkarahisar</option>
                    <option value="4">Ağrı</option>
                    <option value="5">Amasya</option>
                    <option value="6">Ankara</option>
                    <option value="7">Antalya</option>
                    <option value="8">Artvin</option>
                    <option value="9">Aydın</option>
                    <option value="10">Balıkesir</option>
                    <option value="11">Bilecik</option>
                    <option value="12">Bingöl</option>
                    <option value="13">Bitlis</option>
                    <option value="14">Bolu</option>
                    <option value="15">Burdur</option>
                    <option value="16">Bursa</option>
                    <option value="17">Çanakkale</option>
                    <option value="18">Çankırı</option>
                    <option value="19">Çorum</option>
                    <option value="20">Denizli</option>
                    <option value="21">Diyarbakır</option>
                    <option value="22">Edirne</option>
                    <option value="23">Elazığ</option>
                    <option value="24">Erzincan</option>
                    <option value="25">Erzurum</option>
                    <option value="26">Eskişehir</option>
                    <option value="27">Gaziantep</option>
                    <option value="28">Giresun</option>
                    <option value="29">Gümüşhane</option>
                    <option value="30">Hakkâri</option>
                    <option value="31">Hatay</option>
                    <option value="32">Isparta</option>
                    <option value="33">Mersin</option>
                    <option value="34" selected="selected">İstanbul</option>
                    <option value="35">İzmir</option>
                    <option value="36">Kars</option>
                    <option value="37">Kastamonu</option>
                    <option value="38">Kayseri</option>
                    <option value="39">Kırklareli</option>
                    <option value="40">Kırşehir</option>
                    <option value="41">Kocaeli</option>
                    <option value="42">Konya</option>
                    <option value="43">Kütahya</option>
                    <option value="44">Malatya</option>
                    <option value="45">Manisa</option>
                    <option value="46">Kahramanmaraş</option>
                    <option value="47">Mardin</option>
                    <option value="48">Muğla</option>
                    <option value="49">Muş</option>
                    <option value="50">Nevşehir</option>
                    <option value="51">Niğde</option>
                    <option value="52">Ordu</option>
                    <option value="53">Rize</option>
                    <option value="54">Sakarya</option>
                    <option value="55">Samsun</option>
                    <option value="56">Siirt</option>
                    <option value="57">Sinop</option>
                    <option value="58">Sivas</option>
                    <option value="59">Tekirdağ</option>
                    <option value="60">Tokat</option>
                    <option value="61">Trabzon</option>
                    <option value="62">Tunceli</option>
                    <option value="63">Şanlıurfa</option>
                    <option value="64">Uşak</option>
                    <option value="65">Van</option>
                    <option value="66">Yozgat</option>
                    <option value="67">Zonguldak</option>
                    <option value="68">Aksaray</option>
                    <option value="69">Bayburt</option>
                    <option value="70">Karaman</option>
                    <option value="71">Kırıkkale</option>
                    <option value="72">Batman</option>
                    <option value="73">Şırnak</option>
                    <option value="74">Bartın</option>
                    <option value="75">Ardahan</option>
                    <option value="76">Iğdır</option>
                    <option value="77">Yalova</option>
                    <option value="78">Karabük</option>
                    <option value="79">Kilis</option>
                    <option value="80">Osmaniye</option>
                    <option value="81">Düzce</option>
                </select>
            </div>



        </div>
        <!-- /.card-body -->
          <div class="card-footer">
              <a href="../{{ $controller }}">Tüm bayileri görmek için tıklayınız</a> Lütfen istenen bilgileri eksiksiz ve doğru bir şekilde doldurunuz.
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
    <!--FORM SELECT2 STİLİ BAŞ-->
    <script>
        $(function () {
            //Initialize Select2 Elements
            $('.select2').select2()

            //Initialize Select2 Elements
            $('.select2bs4').select2({
                theme: 'bootstrap4'
            })
        })
    </script>
    <!--FORM SELECT2 STİLİ SON-->
    <!--form doğrulama-->
    <script type="text/javascript">
        $(document).ready(function () {
            $.validator.setDefaults({

            });

            $('#yeni_kayit').validate({
                rules: {
                    bayi_adi: {
                        required: true,
                    },

                    bayi_kodu: {
                        required: true,
                        minlength: 3,
                        maxlength: 5
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
@endsection
