@extends('anasablon')
@section('baslik','Kalite Sihirbazı')
@section('anabaslik','')
@section('icerik')

      <div class="container-fluid">

<!-- ÜST İSTATİSTİKLER BAŞ-->

        <div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box bg-info">
              <span class="info-box-icon"><i class="fa fa-traffic-light"></i></span>

              <div class="info-box-content">
                <span class="info-box-number">Müşteri Şikayeti</span>
                <span class="info-box-text">Haklı: <b>8</b> | Haksız: <b>3</b></span>
                <div class="progress">
                  <div class="progress-bar" style="width: 100%"></div>
                </div>
                <span class="progress-description">
                  Toplam Şikayet: 12
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box bg-success">
              <span class="info-box-icon"><i class="fas fa-ruler-combined"></i></span>

              <div class="info-box-content">
                <span class="info-box-number">Kalibrasyon</span>
                <span class="info-box-text">İç: <b>8</b> | Dış: <b>3</b></span>
                <div class="progress">
                  <div class="progress-bar" style="width: 100%"></div>
                </div>
                <span class="progress-description">
                  Toplam Cihaz: <b>154</b>
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box bg-warning">
              <span class="info-box-icon"><i class="fas fa-meteor"></i></span>

              <div class="info-box-content">
                <span class="info-box-number">Kaizen</span>
                <span class="info-box-text">Ö/S: <b>8</b> | Kobetsu: <b>3</b></span>
                <div class="progress">
                  <div class="progress-bar" style="width: 100%"></div>
                </div>
                <span class="progress-description">
                  Toplam: <b>Ö/S (2/20)</b> - Kobetsu <b>(1/5)</b>
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box bg-danger">
              <span class="info-box-icon"><i class="fas fa-clipboard-list"></i></span>

              <div class="info-box-content">
                <span class="info-box-number">Yapılacak İşler</span>
                <span class="info-box-text">Başlanmamış: <b>8</b> | Devam Eden: <b>3</b></span>
                <div class="progress">
                  <div class="progress-bar" style="width: 70%"></div>
                </div>
                <span class="progress-description">
                  Toplam: <b>8 </b>Proje -  <b>9 </b>İş Emri
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>

<!-- ÜST İSTATİSTİKLER SON-->

<!-- MÜŞTERİ ŞİKAYETİ DETAYLI GRAFİK BAŞ -->

      <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                  <h3 class="card-title"><?php use Carbon\Carbon; $datetime = Carbon::now('Europe/Istanbul');setlocale(LC_ALL, array('tr_TR.UTF-8','tr_TR','tr-TR.UTF-8','tr-TR'));
                  echo $datetime ->formatLocalized('%B'); ?> Ayının Müşteri Şikayeti Dağılımı</h3>
                  <a href="javascript:void(0);">Bölüm Bazlı Raporları Gör</a>
                </div>
              </div>
              <div class="card-body">
                <div class="d-flex">
                  <p class="d-flex flex-column">
                    <span class="text-bold text-lg">Haklı Şikayet : <b>25</b></span>
                    <span>Toplam Şikayet: <b>12</b></span>
                  </p>
                  <p class="ml-auto d-flex flex-column text-right">
                    <span class="text-success">
                      <i class="fas fa-arrow-up"></i> 33.1%
                    </span>
                    <span class="text-muted">Geçen Aya Göre</span>
                  </p>
                </div>
                <!-- /.d-flex -->

                <div class="position-relative mb-4">
                  <canvas id="musterisikayeti" height="200"></canvas>



                </div>

                <div class="d-flex flex-row justify-content-end">
                  <span class="mr-2">
                    <i class="fas fa-square text-red"></i> Haklı
                  </span>

                  <span>
                    <i class="fas fa-square text-green"></i> Haksız
                  </span>

                  <span>
                    <i class="fas fa-square text-blue"></i> Tamamı
                  </span>
                </div>
              </div>
            </div>
      </div>

<!-- MÜŞTERİ ŞİKAYETİ DETAYLI GRAFİK SON -->

<!-- MÜŞTERİ ŞİKAYETİ LİSTESİ BAŞ -->


          <div class="col-lg-12">

            <div class="card">
              <div class="card-header border-0">
                <h3 class="card-title">Müşteri Şikayetleri</h3>
                <div class="card-tools">
                  <a href="#" class="btn btn-tool btn-sm">
                    <i class="fas fa-download"></i>
                  </a>
                  <a href="#" class="btn btn-tool btn-sm">
                    <i class="fas fa-bars"></i>
                  </a>
                </div>
              </div>
              <div class="card-body table-responsive p-0">
                <table class="table table-striped table-valign-middle">
                  <thead>
                  <tr>
                    <th>Tarih</th>
                    <th>Bölüm</th>
                    <th>Ürün</th>
                    <th>Bayi</th>
                    <th>Şikayet Türü</th>
                    <th>Durum</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                        12.02.2020
                    </td>
                    <td>
                        Alçıpan
                    </td>
                    <td>Flex</td>
                    <td>
                        Burmar
                    </td>
                    <td>
                        Kağıt Kalması
                    </td>
                    <td>
                      <span class="right badge badge-info">Haklı</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        23.01.2020
                    </td>
                    <td>
                        Profil
                    </td>
                    <td>
                      T24 Tali Taşıyı-60
                    </td>
                    <td>
                        Burmar
                    </td>
                    <td>
                        Kağıt Kalması
                    </td>
                    <td>
                      <span class="right badge badge-info">Haklı</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- /.card -->
          </div>


<!-- MÜŞTERİ ŞİKAYETİ LİSTESİ SON -->

    </div>
      <!-- /.container-fluid -->
    </div><!-- /.container-fluid -->

@endsection

@section('javakodu')
    <!-- İSTATİSTİKLER BAŞ-->
    <script>
        $(function () {
            'use strict'

            var ticksStyle = {
                fontColor: '#495057',
                fontStyle: 'bold'
            }

            var mode      = 'index'
            var intersect = true
            var $musterisikayeti = $('#musterisikayeti')
            var musterisikayeti  = new Chart($musterisikayeti, {
                data   : {
                    labels  : ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
                    datasets: [{
                        type                : 'line',
                        data                : [100, 120, 170, 167, 180, 177, 160],
                        backgroundColor     : 'transparent',
                        borderColor         : '#007bff',
                        pointBorderColor    : '#007bff',
                        pointBackgroundColor: '#007bff',
                        fill                : false
                        // pointHoverBackgroundColor: '#007bff',
                        // pointHoverBorderColor    : '#007bff'
                    },
                        {
                            type                : 'line',
                            data                : [60, 80, 70, 67, 80, 77, 100],
                            backgroundColor     : 'tansparent',
                            borderColor         : '#ced4da',
                            pointBorderColor    : '#ced4da',
                            pointBackgroundColor: '#ced4da',
                            fill                : false
                            // pointHoverBackgroundColor: '#ced4da',
                            // pointHoverBorderColor    : '#ced4da'
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips           : {
                        mode     : mode,
                        intersect: intersect
                    },
                    hover              : {
                        mode     : mode,
                        intersect: intersect
                    },
                    legend             : {
                        display: false
                    },
                    scales             : {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display      : true,
                                lineWidth    : '4px',
                                color        : 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks    : $.extend({
                                beginAtZero : true,
                                suggestedMax: 200
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display  : true,
                            gridLines: {
                                display: false
                            },
                            ticks    : ticksStyle
                        }]
                    }
                }
            })
        })
    </script>
    <script>

        $(function () {
            'use strict'

            var ticksStyle = {
                fontColor: '#495057',
                fontStyle: 'bold'
            }

            var mode      = 'index'
            var intersect = true

            var $salesChart = $('#musterisikayeti')
            var salesChart  = new Chart($salesChart, {
                type   : 'bar',
                data   : {
                    labels  : ['ALÇIPAN', 'PROFİL', 'TÜREV','YÜKLEME','SEVKİYAT','TİCARİ'],
                    datasets: [
                        {
                            label          : 'HAKLI',
                            backgroundColor: '#dc3545',
                            borderColor    : '#dc3545',
                            data           : [2, 5, 3, 7, 2, 5, 2]
                        },
                        {
                            label          : 'HAKSIZ',
                            backgroundColor: '#28a745',
                            borderColor    : '#28a745',
                            data           : [5, 10, 9, 12, 4, 6, 4]
                        },
                        {
                            label          : 'TAMAMI',
                            backgroundColor: '#007bff',
                            borderColor    : '#007bff',
                            data           : [5, 10, 9, 12, 4, 6, 4]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips           : {
                        mode     : mode,
                        intersect: intersect
                    },
                    hover              : {
                        mode     : mode,
                        intersect: intersect
                    },
                    legend             : {
                        display: false
                    },
                    scales             : {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display      : true,
                                lineWidth    : '4px',
                                color        : 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks    : $.extend({
                                beginAtZero: true,

                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                    if (value >= 1000) {
                                        value /= 1000
                                        value += 'k'
                                    }
                                    return '$' + value
                                }
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display  : true,
                            gridLines: {
                                display: false
                            },
                            ticks    : ticksStyle
                        }]
                    }
                }
            })


            var $salesChart = $('#sales-chart')
            var salesChart  = new Chart($salesChart, {
                type   : 'bar',
                data   : {
                    labels  : ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                    datasets: [
                        {
                            backgroundColor: '#007bff',
                            borderColor    : '#007bff',
                            data           : [1000, 2000, 3000, 2500, 2700, 2500, 3000]
                        },
                        {
                            backgroundColor: '#ced4da',
                            borderColor    : '#ced4da',
                            data           : [700, 1700, 2700, 2000, 1800, 1500, 2000]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips           : {
                        mode     : mode,
                        intersect: intersect
                    },
                    hover              : {
                        mode     : mode,
                        intersect: intersect
                    },
                    legend             : {
                        display: false
                    },
                    scales             : {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display      : true,
                                lineWidth    : '4px',
                                color        : 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks    : $.extend({
                                beginAtZero: true,

                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                    if (value >= 1000) {
                                        value /= 1000
                                        value += 'k'
                                    }
                                    return '$' + value
                                }
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display  : true,
                            gridLines: {
                                display: false
                            },
                            ticks    : ticksStyle
                        }]
                    }
                }
            })

            var $visitorsChart = $('#visitors-chart')
            var visitorsChart  = new Chart($visitorsChart, {
                data   : {
                    labels  : ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
                    datasets: [{
                        type                : 'line',
                        data                : [100, 120, 170, 167, 180, 177, 160],
                        backgroundColor     : 'transparent',
                        borderColor         : '#007bff',
                        pointBorderColor    : '#007bff',
                        pointBackgroundColor: '#007bff',
                        fill                : false
                        // pointHoverBackgroundColor: '#007bff',
                        // pointHoverBorderColor    : '#007bff'
                    },
                        {
                            type                : 'line',
                            data                : [60, 80, 70, 67, 80, 77, 100],
                            backgroundColor     : 'tansparent',
                            borderColor         : '#ced4da',
                            pointBorderColor    : '#ced4da',
                            pointBackgroundColor: '#ced4da',
                            fill                : false
                            // pointHoverBackgroundColor: '#ced4da',
                            // pointHoverBorderColor    : '#ced4da'
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    tooltips           : {
                        mode     : mode,
                        intersect: intersect
                    },
                    hover              : {
                        mode     : mode,
                        intersect: intersect
                    },
                    legend             : {
                        display: false
                    },
                    scales             : {
                        yAxes: [{
                            // display: false,
                            gridLines: {
                                display      : true,
                                lineWidth    : '4px',
                                color        : 'rgba(0, 0, 0, .2)',
                                zeroLineColor: 'transparent'
                            },
                            ticks    : $.extend({
                                beginAtZero : true,
                                suggestedMax: 200
                            }, ticksStyle)
                        }],
                        xAxes: [{
                            display  : true,
                            gridLines: {
                                display: false
                            },
                            ticks    : ticksStyle
                        }]
                    }
                }
            })

        })

    </script>

    <!--İSTATİSTİKLER SON-->
@endsection
