@extends('anasablon')
@section('baslik','Müşteri Şikayetleri')
@section('anabaslik','Müşteri Şikayeti Yönetim Paneli')
@section('icerik')
    @php
        $controller=Request::segment(1);
        $controller1=$musteri_sikayetleri;
        $controller2=$bayiler;
        $controller3=$sikayet_turleri;
        $controller4=$urunler;
        $controller5=$bolumler;
    @endphp
<!-- Main content -->
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Müşteri Şikayetleri') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{$controller}}\create">
                  <i class="fas fa-user-plus text-green"></i> {{ __('Yeni Şikayet Ekle') }}
            </a>
            <a class="btn btn-app" href="{{$controller}}\deleted">
                  <i class="fas fa-minus-circle text-red"></i> {{ __('Silinen Şikayetler') }}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover table-valign-middle">
            <thead>
            <tr>
                <th style="width: 7%">{{ __('Tarih') }}</th>
                <th class="project-actions text-center" style="width: 10%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bayi') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Ürün') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Şikayet') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Durum') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody class="">

            @foreach ($controller1 as $operator1)
    <tr>
        <td >{{date('d.m.Y', strtotime($operator1->sikayet_tarihi))}}</td>
        <td class="project-actions text-center">{{$controller5->find($operator1->sikayet_bolum)->bolum_adi}}</td>
        <td class="project-actions text-center">{{$controller2->find($operator1->sikayet_bayi)->bayi_adi}}</td>
        <td class="project-actions text-center">{{$controller4->find($operator1->sikayet_urun)->urun_adi}}</td>
        <td class="project-actions text-center">{{$controller3->find($operator1->sikayet_turu)->sikayet_turu_adi}}</td>
        <td class="project-actions text-center">{{ $operator1->sikayet_durum != null ? $operator1->sikayet_durum : 'Belirsiz' }}</td>
        <td class="project-actions text-center">



            <form method="post" action="{{route($controller.'.destroy',$operator1->id)}}">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <a  class="btn btn-primary" href="{{$controller}}\{{$operator1->id}}"><i class="fas fa-eye"></i></a>
                    <a  class="btn btn-warning" href="{{$controller}}\{{$operator1->id}}\edit"><i class="fas fa-pencil-alt"></i></a>

                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger"><i class="fas fa-trash"></i></button>

                </div>
            </form>

        </td>
    </tr>
            @endforeach

            </tbody>
            <tfoot>
            <tr>
                <th style="width: 7%">{{ __('Tarih') }}</th>
                <th class="project-actions text-center" style="width: 10%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bayi') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Ürün') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Şikayet') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Durum') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </tfoot>
          </table>

        </div>
        <!-- /.card-body -->
      </div>

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
<!--{{$controller}} LİSTESİ DATATABLE AYAR SON-->
@endsection
