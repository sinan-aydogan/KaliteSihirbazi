@extends('anasablon')
@section('baslik','Şikayet Kategorileri')
@section('anabaslik','Şikayet Kategorileri Yönetim Paneli')
@section('icerik')
    @php
        $controller=Request::segment(1);
        $controller1=$sikayet_kategorileri;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Şikayet Kategorileri') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{$controller}}\create">
                  <i class="fas fa-user-plus text-green"></i> {{ __('Yeni Şikayet Kategorisi Ekle') }}
            </a>
            <a class="btn btn-app" href="{{$controller}}\deleted">
                  <i class="fas fa-minus-circle text-red"></i> {{ __('Silinen Şikayet Kategorileri') }}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover table-valign-middle">
            <thead>
            <tr>
                <th style="width: 85%">{{ __('Kategori') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody class="">

            @foreach ($controller1 as $operator1)
    <tr>
        <td >{{$operator1->sikayet_kategori_adi}}</td>
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
                <th style="width: 85%">{{ __('Durum') }}</th>
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
