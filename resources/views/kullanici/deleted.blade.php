@extends('anasablon')
@section('baslik','Silinmiş Kullanıcılar')
@section('anabaslik','Silinmiş Kullanıcı Yönetim Paneli')
@section('icerik')
    @php
        $controller=Request::segment(2);
        $controller1=$silinmis_kullanicilar;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card ">
        <div class="card-header card-outline card-danger">
          <h3 class="card-title">{{ __('Silinmiş Kullanıcılar') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
              <a class="btn btn-app" href="{{url($controller)}}">
                  <i class="fas fa-arrow-left text-primary"></i>{!!  __('Asil Listeye Geri Dön')  !!}
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
        <td >{{$bolumler->find($operator1->bolum)->bolum_adi}}</td>
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

            <form method="post" action="{{route('silinmis_'.$controller.'_destroy',$operator1->id)}}">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <a  class="btn btn-primary" href="{{url('silinmis/'.$controller.'/restore/'.$operator1->id)}}"><i class="fas fa-undo-alt"></i></a>
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

@if(session('mesaj'))
    <script type="text/javascript">
        Swal.fire ({
            type: '{{session('mesaj.tur')}}',
            title: '{!! session('mesaj.title')!!}',
            html: '{!! session('mesaj.icerik')!!}',
            showConfirmButton: true,
            onBeforeOpen: () => {
            }
        })
    </script>
@endif

@endsection
