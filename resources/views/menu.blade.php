<!-- Navbar -->
<nav class="main-header navbar navbar-expand navbar-white navbar-light text-sm">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="index3.html" class="nav-link">Ana Sayfa</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Denetim Takvimi</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Dönüm Noktaları</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Eğitim Merkezi</a>
        </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Ara" aria-label="Ara">
            <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-comments"></i>
                <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="{{ asset('dist/img/user1-128x128.jpg') }}" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                Brad Diesel
                                <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">Call me whenever you can...</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="{{ asset('dist/img/user8-128x128.jpg') }}" alt="User Avatar" class="img-size-50 img-circle mr-3">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                John Pierce
                                <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">I got your message bro</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <!-- Message Start -->
                    <div class="media">
                        <img src="{{ asset('dist/img/user3-128x128.jpg') }}" alt="User Avatar" class="img-size-50 img-circle mr-3">
                        <div class="media-body">
                            <h3 class="dropdown-item-title">
                                Nora Silvester
                                <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">The subject goes here</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                        </div>
                    </div>
                    <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
            </div>
        </li>
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
                <i class="far fa-bell"></i>
                <span class="badge badge-warning navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span class="dropdown-item dropdown-header">Bildirimler (3)</span>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-envelope mr-2"></i> 4 yeni mesaj
                    <span class="float-right text-muted text-sm">3 dakika</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-users mr-2"></i> 1 yaklaşan Denetim
                    <span class="float-right text-muted text-sm">30 gün</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item">
                    <i class="fas fa-file mr-2"></i> 2 yaklaşan Kalibrasyon
                    <span class="float-right text-muted text-sm">15 gün</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item dropdown-footer">Tüm Bildirimleri Göster</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
                    class="fas fa-th-large"></i></a>
        </li>
    </ul>
    <form method="post" id="logout-form" action="{{ route('logout') }}">
        @csrf
        <button class="btn btn-danger btn-sm" type="submit"> {{ __('Çıkış Yap') }}  <i class="fas fa-sign-out-alt"></i></button>
    </form>
</nav>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
        <img src="{{ asset('dist/img/logo.png') }}" alt="Kalite Sihirbazı" class="brand-image"
             style="opacity: .8">
        <span class="brand-text font-weight-light">KALİTE SİHİRBAZI</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{asset("storage/dosya/avatar/".Auth::user()->avatar)}}" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="{{url("kullanici/".Auth::user()->id)}}" class="d-block">{{ Auth::user()->name }}</a>
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar nav-legacy flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->

                <!-- BİRİNCİ MENÜ BAŞI -->
                <li class="nav-item has-treeview @if(Request::segment(1)=="musteri-sikayeti" or Request::segment(1)=="proje" or Request::segment(1)=="denetim"or Request::segment(1)=="urun-denetim"or Request::segment(1)=="sistem-denetim"or Request::segment(1)=="denetci") menu-open active @endif ">
                    <a href="{{URL::to('/')}}" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt "></i>
                        <p>
                            Kontrol Merkezi
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview ">
                            <a href="{{URL::to('/musteri-sikayeti')}}" class="nav-link @if(Request::segment(1)=="musteri-sikayeti") active @endif "">
                                <i class="fa fa-traffic-light nav-icon"></i>
                                <p>Müşteri Şikayetleri</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{URL::to('/proje')}}" class="nav-link">
                                <i class="fa fa-tasks nav-icon"></i>
                                <p>Projeler</p>
                            </a>
                        </li>
                        <li class="nav-item has-treeview @if( Request::segment(1)=="denetim"or Request::segment(1)=="urun-denetim"or Request::segment(1)=="sistem-denetim"or Request::segment(1)=="denetci") menu-open active @endif ">
                            <a href="{{URL::to('/')}}" class="nav-link">
                                <i class="fa fa-award nav-icon"></i>
                                <p>Denetimler
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href=" {{URL::to('/denetim')}}" class="nav-link @if(Request::segment(1)=="denetim") active @endif ">
                                        <i class="fa fa-calendar-alt nav-icon"></i>
                                        <p>Denetim Takvimi</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/urun-denetim')}}" class="nav-link @if(Request::segment(1)=="urun-denetim") active @endif ">
                                        <i class="fa fa-boxes nav-icon"></i>
                                        <p>Ürün Denetimi</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/sistem-denetim')}}" class="nav-link @if(Request::segment(1)=="sistem-denetim") active @endif ">
                                        <i class="fa fa-balance-scale nav-icon"></i>
                                        <p>Yön. Sistemi Denetimi</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/denetci')}}" class="nav-link @if(Request::segment(1)=="denetci") active @endif ">
                                        <i class="fa fa-user-tie nav-icon"></i>
                                        <p>Denetçiler</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <!-- BİRİNCİ MENÜ SONU -->
                <!-- İKİNCİ MENÜ BAŞI -->
                <li class="nav-item has-treeview
@if(Request::segment(1)=="urun" or
Request::segment(1)=="kullanici" or
Request::segment(1)=="urun-turu" or
Request::segment(1)=="paketleme-turu" or
Request::segment(1)=="hammadde-turu" or
Request::segment(1)=="bayi" or
Request::segment(1)=="sikayet-turu" or
Request::segment(1)=="sikayet-durum" or
Request::segment(1)=="sikayet-kategori" or
Request::segment(1)=="yerinde-inclemeci" or
Request::segment(1)=="bolum" or
Request::segment(1)=="malzeme-turu" or
Request::segment(1)=="cihaz-turu" or
Request::segment(1)=="kalibrasyon-periyodu" or
Request::segment(1)=="kalibrasyon-yeri"
                    ) menu-open active @endif ">
                    <a href=" {{URL::to('/')}}" class="nav-link">
                        <i class="nav-icon fas fa-industry"></i>
                        <p>
                            Fabrika Yönetimi
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item has-treeview ">
                            <a href="{{URL::to('/kullanici')}}" class="nav-link @if(Request::segment(1)=="kullanici") active @endif">
                                <i class="fas fa-users nav-icon"></i>
                                <p>Personeller</p>
                            </a>
                        </li>
                        <li class="nav-item has-treeview
@if(Request::segment(1)=="urun" or
Request::segment(1)=="urun-turu" or
Request::segment(1)=="paketleme-turu" or
Request::segment(1)=="hammadde-turu"
                    ) menu-open @endif
">
                            <a href=" {{URL::to('/')}}" class="nav-link
@if(Request::segment(1)=="urun" or
Request::segment(1)=="urun-turu" or
Request::segment(1)=="paketleme-turu" or
Request::segment(1)=="hammadde-turu"
                    ) active @endif
">
                                <i class="fa fa-boxes nav-icon"></i>
                                <p>
                                    Ürün Bilgileri
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item" >
                                    <a href=" {{URL::to('/urun')}}"  class="nav-link @if(Request::segment(1)=="urun") active @endif">
                                        <i class="fa fa-boxes nav-icon nav-icon"></i>
                                        <p>Ürünler</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/urun-turu')}}" class="nav-link @if(Request::segment(1)=="urun-turu") active @endif">
                                        <i class="fa fa-clipboard-list nav-icon"></i>
                                        <p>Ürün Türleri</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/paketleme-turu')}}" class="nav-link @if(Request::segment(1)=="paketleme-turu") active @endif">
                                        <i class="fa fa-box-open nav-icon"></i>
                                        <p>Paketlenme Türleri</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/hammadde-turu')}}" class="nav-link @if(Request::segment(1)=="hammadde-turu") active @endif">
                                        <i class="fa fa-clipboard-list nav-icon"></i>
                                        <p>Hammadde Türleri</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview
@if(Request::segment(1)=="bayi" or
Request::segment(1)=="sikayet-turu" or
Request::segment(1)=="sikayet-durum" or
Request::segment(1)=="sikayet-kategori" or
Request::segment(1)=="yerinde-inclemeci"
                    ) menu-open @endif
">
                            <a href="{{URL::to('/')}}" class="nav-link
@if(Request::segment(1)=="bayi" or
Request::segment(1)=="sikayet-turu" or
Request::segment(1)=="sikayet-durum" or
Request::segment(1)=="sikayet-kategori" or
Request::segment(1)=="yerinde-inclemeci"
                    ) menu-open active @endif
">
                                <i class="fa fa-traffic-light nav-icon"></i>
                                <p>
                                    Müşteri Şikayeti Bilgileri
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href=" {{URL::to('/bayi')}}" class="nav-link @if(Request::segment(1)=="bayi") active @endif">
                                        <i class="fa fa-id-card nav-icon"></i>
                                        <p>Bayiler</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/sikayet-turu')}}" class="nav-link @if(Request::segment(1)=="sikayet-turu") active @endif">
                                        <i class="fa fa-flag nav-icon"></i>
                                        <p>Şikayet Türleri</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/sikayet-durum')}}" class="nav-link @if(Request::segment(1)=="sikayet-durum") active @endif">
                                        <i class="fas fa-hashtag nav-icon"></i>
                                        <p>Şikayet Durumları</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/sikayet-kategori')}}" class="nav-link @if(Request::segment(1)=="sikayet-kategori") active @endif">
                                        <i class="fas fa-stream nav-icon"></i>
                                        <p>Şikayet Kategorileri</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="yerinde-incelemeci" class="nav-link @if(Request::segment(1)=="yerinde-incelemeci") active @endif">
                                        <i class="fa fa-user-shield nav-icon"></i>
                                        <p>Yerinde İncelemeciler</p>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href=" {{URL::to('/bolum')}}" class="nav-link @if(Request::segment(1)=="bolum") active @endif">
                                <i class="fa fa-tasks nav-icon"></i>
                                <p>Bölümler</p>
                            </a>
                        </li>
                        <li class="nav-item has-treeview
@if(Request::segment(1)=="malzeme-turu"
                    ) menu-open @endif
">
                            <a href=" {{URL::to('/envanter')}}" class="nav-link @if(Request::segment(1)=="envanter") active @endif">
                                <i class="fa fa-desktop nav-icon"></i>
                                <p>Envanter
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href=" {{URL::to('/malzeme-turu')}}" class="nav-link @if(Request::segment(1)=="malzeme-turu") active @endif">
                                        <i class="fa fa-clipboard-list nav-icon"></i>
                                        <p>Malzeme Türü</p>
                                    </a>
                                </li>
                            </ul>
                        <li class="nav-item
@if(Request::segment(1)=="cihaz-turu" or
Request::segment(1)=="kalibrasyon-periyodu" or
Request::segment(1)=="kalibrasyon-yeri"
                    ) menu-open @endif
">
                            <a href="" class="nav-link
@if(Request::segment(1)=="cihaz-turu" or
Request::segment(1)=="kalibrasyon-periyodu" or
Request::segment(1)=="kalibrasyon-yeri"
                    ) menu-open active @endif
">
                                <i class="fa fa-ruler-combined nav-icon"></i>
                                <p>Cihazlar
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href=" {{URL::to('/cihaz-turu')}}" class="nav-link @if(Request::segment(1)=="cihaz-turu") active @endif">
                                        <i class="fa fa-clipboard-list nav-icon"></i>
                                        <p>Cihaz Türü</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href=" {{URL::to('/kalibrasyon-periyodu')}}" class="nav-link @if(Request::segment(1)=="kalibrasyon-periyodu") active @endif">
                                        <i class="fa fa-calendar-alt nav-icon"></i>
                                        <p>Kalibrasyon Periyodu</p>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href=" {{URL::to('/kalibrasyon-yeri')}}" class="nav-link @if(Request::segment(1)=="kalibrasyon-yeri") active @endif">
                                        <i class="fa fa-map-marker-alt nav-icon"></i>
                                        <p>Kalibrasyon Yeri</p>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        </li>
                    </ul>

                </li>
                <!-- İKİNCİ MENÜ SON -->



            </ul>
        </nav>
        <!-- /.sidebar-menu -->
