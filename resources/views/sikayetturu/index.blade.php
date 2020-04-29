@extends('anasablon')
@section('baslik','Şikayet Türleri')
@section('anabaslik','Şikayet Türü Yönetim Paneli')
@section('icerik')
    @php
        $controller=Request::segment(1);
        $controller1=$sikayet_turleri;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Şikayet Türleri') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{url($controller.'\create')}}">
                  <i class="fas fa-user-plus text-green"></i> {{ __('Yeni Şikayet Türü Ekle') }}
            </a>
            <a class="btn btn-app" href="{{$controller}}\deleted">
                  <i class="fas fa-minus-circle text-red"></i> {{ __('Silinen Şikayet Türleri') }}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover table-valign-middle">
            <thead>
            <tr>
                <th style="width: 20%">{{ __('Şikayet') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Ürün Grubu') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Problem Kaynağı') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody class="">

            @foreach ($controller1 as $operator1)
    <tr>
        <td >{{$operator1->sikayet_turu_adi}}</td>
        <td class="project-actions text-center">{{$bolumler->find($operator1->sikayet_turu_bolum)->bolum_adi}}</td>
        <td class="project-actions text-center">@if($operator1->sikayet_turu_urunler != null)
                @php
                    $urunseri = $operator1->sikayet_turu_urunler;
     foreach (explode(',',$urunseri) as $urunid){
        echo "&nbsp<span class='badge badge-btn badge-primary'>".$urunler->find($urunid)->urun_adi."</span> ";
     }
                @endphp
            @endif
           </td>
        <td class="project-actions text-center">{!! $operator1->sikayet_turu_kaynak !!}</td>
        <td class="project-actions text-center">



            <form method="post" id="{{$controller}}-sil-{{$operator1->id}}" action="{{route($controller.'.destroy',$operator1->id)}}">
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
                <th style="width: 20%">{{ __('Şikayet') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bölüm') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Ürün Grubu') }}</th>
                <th class="project-actions text-center" style="width: 25%">{{ __('Problem Kaynağı') }}</th>
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
