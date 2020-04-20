@extends('anasablon')
@section('baslik','Ürün Listesi')
@section('anabaslik','Ürün Listesi Yönetim Paneli')
@section('icerik')

    @php
        $controller=Request::segment(1);
        $controller1=$urunler;
        $controller2=$bolumler;
        $controller3=$urunturleri;
        $controller4=$standartlar;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Ürünler') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{$controller}}\create">
                  <i class="fas fa-user-plus text-green"></i> {{ __('Yeni Ürün Ekle') }}
            </a>
            <a class="btn btn-app" href="{{$controller}}\deleted">
                  <i class="fas fa-minus-circle text-red"></i> {{ __('Silinen Ürünler') }}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover table-valign-middle">
            <thead>
            <tr>
                <th style="width: 20%">{{ __('Ürün Adı') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Ürün Türü') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Ürün Standart') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody class="">

            @foreach ($controller1 as $operator1)
    <tr>
        <td ><b>{{$operator1->urun_adi}}</b></td>
        <td class="project-actions text-center text-{{$controller2->find($operator1->urun_bolum)->bolum_rengi}}"><b>{{$controller2->find($operator1->urun_bolum)->bolum_adi}}</b></td>
        <td class="project-actions text-center">{{$controller3->find($operator1->urun_turu)->urun_turu_adi}}</td>
        <td class="project-actions text-center">@if($operator1->urun_standart=="") <span class="badge badge-warning">Belgesiz</span> @else {{$controller4->find($operator1->urun_standart)->standart_kodu}} @endif</td>
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
                <th style="width: 20%">{{ __('Ürün Adı') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Ürün Türü') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Ürün Standart') }}</th>
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
