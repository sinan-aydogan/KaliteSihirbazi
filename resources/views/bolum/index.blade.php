@extends('anasablon')
@section('baslik','Bölümler')
@section('anabaslik','Bölüm Yönetim Paneli')
@section('icerik')
    @php
        $controller=Request::segment(1);
        $controller1=$bolumler;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Bölümler') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{$controller}}\create">
                  <i class="fas fa-user-plus text-green"></i> {{ __('Yeni Bölüm Ekle') }}
            </a>
            <a class="btn btn-app" href="{{$controller}}\deleted">
                  <i class="fas fa-minus-circle text-red"></i> {{ __('Silinen Bölümler') }}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover table-valign-middle">
            <thead>
            <tr>
                <th style="width: 20%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 20%">{{ __('Yönetici') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Şikayet Alabilirlik') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Ürün Kaydedilebilirlik') }}</th>
                <th class="project-actions text-center" style="width: 10%">{{ __('Bölüm Rengi') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody class="">

            @foreach ($controller1 as $operator1)
    <tr>
        <td >{{$operator1->bolum_adi}}</td>
        <td class="project-actions text-center">@if($operator1->bolum_yonetici != null) {{$kullanicilar->find($operator1->bolum_yonetici)->name}}@else <span class="badge badge-danger">YÖNETİCİSİZ</span> @endif</td>
        <td class="project-actions text-center">@if($operator1->bolum_sikayet_alabilirlik=="on") <i class="fas fa-check-circle text-green"></i>@else <i class="fas fa-times-circle text-red"></i>@endif</td>
        <td class="project-actions text-center">@if($operator1->bolum_urun_kaydedilebilirlik=="on") <i class="fas fa-check-circle text-green"></i>@else <i class="fas fa-times-circle text-red"></i>@endif</td>
        <td class="project-actions text-center"><i class="fas fa-circle fa-2x text-{!! $operator1->bolum_rengi !!}"></i></td>
        <td class="project-actions text-center">

            <form method="post" id="{{$controller}}-sil" action="{{route($controller.'.destroy',$operator1->id)}}">
                <a class="btn btn-info btn-sm" href="{{$controller}}\{{$operator1->id}}\edit">
                    <i class="fas fa-pencil-alt">
                    </i>
                    {{ __('Düzenle') }}
                </a>
                @method('DELETE')
                @csrf
                <button class="btn btn-danger btn-sm" type="submit"> {{ __('Sil') }}  <i class="fas fa-trash"></i></button>
            </form>

        </td>
    </tr>
            @endforeach

            </tbody>
            <tfoot>
            <tr>
                <th style="width: 20%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 20%">{{ __('Yönetici') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Şikayet Alabilirlik') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Ürün Kaydedilebilirlik') }}</th>
                <th class="project-actions text-center" style="width: 10%">{{ __('Bölüm Rengi') }}</th>
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
<!--{{$controller}} LİSTESİ DATATABLE AYAR SON-->
@endsection
