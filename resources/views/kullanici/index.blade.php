@extends('anasablon')
@section('baslik','Kullanıcılar')
@section('anabaslik','Kullanıcı Yönetim Paneli')
@section('icerik')
    @php
        $controller=Request::segment(1);
        $controller1=$kullanicilar;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Kullanıcılar') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{ URL($controller."/create")  }}">
                  <i class="fas fa-user-plus text-green"></i> {!! __('Yeni Kullanıcı Ekle') !!}
            </a>
            <a class="btn btn-app" href="{{ URL("silinmis/".$controller)  }}">
                  <i class="fas fa-minus-circle text-red"></i> {!!  __('Silinen Kullanıcılar')  !!}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover table-valign-middle">
            <thead>
            <tr>
                <th style="width: 25%">{{ __('İsim') }}</th>
                <th style="width: 15%">{{ __('Bölüm') }}</th>
                <th style="width: 15%">{{ __('Pozisyon') }}</th>
                <th style="width: 15%">{{ __('Yetki') }}</th>
                <th style="width: 15%">{{ __('İşe Giriş') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody class="">

            @foreach ($controller1 as $operator1)
    <tr>
        <td >
            <div class="d-flex">
            <div class="align-self-stretch"><img src="{{asset('storage/dosya/avatar/'.$operator1->avatar)}}" class="img-circle img-bordered-sm float-left img-size-50" style="height: 50px" alt="User Image"></div>
                <div class="align-self-center"><span class="p-3 text-bold"> <a href="{{ route('kullanici.show', $operator1->id)}}"> {{$operator1->name}}</a></span></div>
            </div>
            </td>
        <td >@if($operator1->bolum != null){{$bolumler->find($operator1->bolum)->bolum_adi}}@endif</td>
        <td >{{$operator1->pozisyon}}</td>
        <td >{{$operator1->yetki}}</td>
        <td >{{date('d.m.Y', strtotime($operator1->ise_giris))}} <span class="text-sm font-italic">
                @php
        $ilk=strtotime($operator1->ise_giris);
        $son=time();
        $fark=($son-$ilk)/(60*60*24*7*4.35*12);
        $fark2=($fark-intval($fark))*12;
            $periods= array("second", "minute", "hour", "day", "week", "month", "year", "decade");
            $lengths= array("60","60","24","7","4.35","12","10");
           echo "(".intval($fark)." Yıl ".intval($fark2)." Ay)";
            @endphp</span></td>
        <td class="project-actions text-center">

            <form method="post" action="{{route($controller.'.destroy',$operator1->id)}}">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <a  class="btn btn-primary" href="{{$controller}}\{{$operator1->id}}"><i class="fas fa-eye"></i></a>
                    <a  class="btn btn-warning" href="{{$controller}}\{{$operator1->id}}#settings"><i class="fas fa-pencil-alt"></i></a>

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
                <th style="width: 25%">{{ __('İsim') }}</th>
                <th style="width: 15%">{{ __('Bölüm') }}</th>
                <th style="width: 15%">{{ __('Pozisyon') }}</th>
                <th style="width: 15%">{{ __('Yetki') }}</th>
                <th style="width: 15%">{{ __('İşe Giriş') }}</th>
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
