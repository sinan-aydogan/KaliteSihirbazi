@extends('anasablon')
@section('baslik','Bayi Düzenle')
@section('anabaslik','Bayi Düzenleme Paneli')
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
                        <form method="POST" action="{{ route($controller.'.update', $bayiler->id) }}">
                        @csrf
                        @method('PATCH')
                        <!--BAYİ ADI BAŞ-->
                            <div class="form-group">
                                <label>Bayi Adı:</label>

                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="far fa-id-card"></i></span>
                                    </div>
                                    <input type="text" name="bayi_adi" id="bayi_adi"  value="{{$bayiler->bayi_adi}}"  class="form-control" placeholder="BAYİNİN KISA TİCARİ İSMİ">
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
                                    <input type="text" name="bayi_kodu" id="bayi_kodu"  value="{{$bayiler->bayi_kodu}}" class="form-control" minlength="5" maxlength="5" placeholder="XYZDC (5 KARAKTERLİ)">
                                </div>
                                <!-- /.input group -->
                            </div>
                            <!--BAYİ KODU SON-->


                            <div class="form-group">
                                <label>Bayi İli:</label>
                                <select name="bayi_il" id="bayi_il"  class="form-control select2bs4" style="width: 100%;">
                                    <option @if($bayiler->bayi_il=="1") selected @endif value="1">Adana</option>
                                    <option @if($bayiler->bayi_il=="2") selected @endif  value="2">Adıyaman</option>
                                    <option @if($bayiler->bayi_il=="3") selected @endif  value="3">Afyonkarahisar</option>
                                    <option @if($bayiler->bayi_il=="4") selected @endif  value="4">Ağrı</option>
                                    <option @if($bayiler->bayi_il=="5") selected @endif  value="5">Amasya</option>
                                    <option @if($bayiler->bayi_il=="6") selected @endif  value="6">Ankara</option>
                                    <option @if($bayiler->bayi_il=="7") selected @endif  value="7">Antalya</option>
                                    <option @if($bayiler->bayi_il=="8") selected @endif  value="8">Artvin</option>
                                    <option @if($bayiler->bayi_il=="9") selected @endif  value="9">Aydın</option>
                                    <option @if($bayiler->bayi_il=="10") selected @endif value="10">Balıkesir</option>
                                    <option @if($bayiler->bayi_il=="11") selected @endif value="11">Bilecik</option>
                                    <option @if($bayiler->bayi_il=="12") selected @endif value="12">Bingöl</option>
                                    <option @if($bayiler->bayi_il=="13") selected @endif value="13">Bitlis</option>
                                    <option @if($bayiler->bayi_il=="14") selected @endif value="14">Bolu</option>
                                    <option @if($bayiler->bayi_il=="15") selected @endif value="15">Burdur</option>
                                    <option @if($bayiler->bayi_il=="16") selected @endif value="16">Bursa</option>
                                    <option @if($bayiler->bayi_il=="17") selected @endif value="17">Çanakkale</option>
                                    <option @if($bayiler->bayi_il=="18") selected @endif value="18">Çankırı</option>
                                    <option @if($bayiler->bayi_il=="19") selected @endif value="19">Çorum</option>
                                    <option @if($bayiler->bayi_il=="20") selected @endif value="20">Denizli</option>
                                    <option @if($bayiler->bayi_il=="21") selected @endif value="21">Diyarbakır</option>
                                    <option @if($bayiler->bayi_il=="22") selected @endif value="22">Edirne</option>
                                    <option @if($bayiler->bayi_il=="23") selected @endif value="23">Elazığ</option>
                                    <option @if($bayiler->bayi_il=="24") selected @endif value="24">Erzincan</option>
                                    <option @if($bayiler->bayi_il=="25") selected @endif value="25">Erzurum</option>
                                    <option @if($bayiler->bayi_il=="26") selected @endif value="26">Eskişehir</option>
                                    <option @if($bayiler->bayi_il=="27") selected @endif value="27">Gaziantep</option>
                                    <option @if($bayiler->bayi_il=="28") selected @endif value="28">Giresun</option>
                                    <option @if($bayiler->bayi_il=="29") selected @endif value="29">Gümüşhane</option>
                                    <option @if($bayiler->bayi_il=="30") selected @endif value="30">Hakkâri</option>
                                    <option @if($bayiler->bayi_il=="31") selected @endif value="31">Hatay</option>
                                    <option @if($bayiler->bayi_il=="32") selected @endif value="32">Isparta</option>
                                    <option @if($bayiler->bayi_il=="33") selected @endif value="33">Mersin</option>
                                    <option @if($bayiler->bayi_il=="34") selected @endif value="34" selected="selected">İstanbul</option>
                                    <option @if($bayiler->bayi_il=="35") selected @endif value="35">İzmir</option>
                                    <option @if($bayiler->bayi_il=="36") selected @endif value="36">Kars</option>
                                    <option @if($bayiler->bayi_il=="37") selected @endif value="37">Kastamonu</option>
                                    <option @if($bayiler->bayi_il=="38") selected @endif value="38">Kayseri</option>
                                    <option @if($bayiler->bayi_il=="39") selected @endif value="39">Kırklareli</option>
                                    <option @if($bayiler->bayi_il=="40") selected @endif value="40">Kırşehir</option>
                                    <option @if($bayiler->bayi_il=="41") selected @endif value="41">Kocaeli</option>
                                    <option  @if($bayiler->bayi_il=="42") selected @endif value="42">Konya</option>
                                    <option  @if($bayiler->bayi_il=="43") selected @endif value="43">Kütahya</option>
                                    <option  @if($bayiler->bayi_il=="44") selected @endif value="44">Malatya</option>
                                    <option  @if($bayiler->bayi_il=="45") selected @endif value="45">Manisa</option>
                                    <option  @if($bayiler->bayi_il=="46") selected @endif value="46">Kahramanmaraş</option>
                                    <option  @if($bayiler->bayi_il=="47") selected @endif value="47">Mardin</option>
                                    <option  @if($bayiler->bayi_il=="48") selected @endif value="48">Muğla</option>
                                    <option  @if($bayiler->bayi_il=="49") selected @endif value="49">Muş</option>
                                    <option  @if($bayiler->bayi_il=="50") selected @endif value="50">Nevşehir</option>
                                    <option  @if($bayiler->bayi_il=="51") selected @endif value="51">Niğde</option>
                                    <option  @if($bayiler->bayi_il=="52") selected @endif value="52">Ordu</option>
                                    <option  @if($bayiler->bayi_il=="53") selected @endif value="53">Rize</option>
                                    <option  @if($bayiler->bayi_il=="54") selected @endif value="54">Sakarya</option>
                                    <option  @if($bayiler->bayi_il=="55") selected @endif value="55">Samsun</option>
                                    <option  @if($bayiler->bayi_il=="56") selected @endif value="56">Siirt</option>
                                    <option  @if($bayiler->bayi_il=="57") selected @endif value="57">Sinop</option>
                                    <option  @if($bayiler->bayi_il=="58") selected @endif value="58">Sivas</option>
                                    <option  @if($bayiler->bayi_il=="59") selected @endif value="59">Tekirdağ</option>
                                    <option  @if($bayiler->bayi_il=="60") selected @endif value="60">Tokat</option>
                                    <option  @if($bayiler->bayi_il=="61") selected @endif value="61">Trabzon</option>
                                    <option  @if($bayiler->bayi_il=="62") selected @endif value="62">Tunceli</option>
                                    <option  @if($bayiler->bayi_il=="63") selected @endif value="63">Şanlıurfa</option>
                                    <option  @if($bayiler->bayi_il=="64") selected @endif value="64">Uşak</option>
                                    <option  @if($bayiler->bayi_il=="65") selected @endif value="65">Van</option>
                                    <option  @if($bayiler->bayi_il=="66") selected @endif value="66">Yozgat</option>
                                    <option  @if($bayiler->bayi_il=="67") selected @endif value="67">Zonguldak</option>
                                    <option  @if($bayiler->bayi_il=="68") selected @endif value="68">Aksaray</option>
                                    <option  @if($bayiler->bayi_il=="69") selected @endif value="69">Bayburt</option>
                                    <option  @if($bayiler->bayi_il=="70") selected @endif value="70">Karaman</option>
                                    <option  @if($bayiler->bayi_il=="71") selected @endif value="71">Kırıkkale</option>
                                    <option  @if($bayiler->bayi_il=="72") selected @endif value="72">Batman</option>
                                    <option  @if($bayiler->bayi_il=="73") selected @endif value="73">Şırnak</option>
                                    <option  @if($bayiler->bayi_il=="74") selected @endif value="74">Bartın</option>
                                    <option  @if($bayiler->bayi_il=="75") selected @endif value="75">Ardahan</option>
                                    <option  @if($bayiler->bayi_il=="76") selected @endif value="76">Iğdır</option>
                                    <option  @if($bayiler->bayi_il=="77") selected @endif value="77">Yalova</option>
                                    <option  @if($bayiler->bayi_il=="78") selected @endif value="78">Karabük</option>
                                    <option  @if($bayiler->bayi_il=="79") selected @endif value="79">Kilis</option>
                                    <option  @if($bayiler->bayi_il=="80") selected @endif value="80">Osmaniye</option>
                                    <option  @if($bayiler->bayi_il=="81") selected @endif value="81">Düzce</option>
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
@endsection
