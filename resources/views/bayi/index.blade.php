@extends('anasablon')
@section('baslik','Bayi Listesi')
@section('anabaslik','Bayi Yönetim Paneli')
@section('icerik')

    @php
        $controller=Request::segment(1);
        $controller1=$bayiler;
    @endphp
  <div class="row">
    <div class="col-12">

      <!--{{$controller}} LİSTESİ BAŞ-->

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">{{ __('Bayi Listesi') }}</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="text-right">
            <a class="btn btn-app" href="{{$controller}}\create">
                  <i class="fas fa-user-plus text-green"></i> {{ __('Yeni Bayi Ekle') }}
            </a>
            <a class="btn btn-app" href="{{$controller}}\deleted">
                  <i class="fas fa-minus-circle text-red"></i> {{ __('Silinen Bayiler') }}
            </a>
          </div>

          <table id="{{$controller}}" class="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <th style="width: 35%">{{ __('Bayi Adı') }}</th>
                <th class="project-actions text-center" style="width: 20%">{{ __('İl') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bayi Kodu') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Toplam Şikayet') }}</th>
                <th style="width: 15%"></th>
            </tr>
            </thead>
            <tbody>

            @foreach ($controller1 as $operator1)
    <tr>
        <td >{{$operator1->bayi_adi}}</td>
        <td class="project-actions text-center">
            @if ($operator1->bayi_il==1)Adana
            @elseif($operator1->bayi_il==2)Adıyaman
            @elseif($operator1->bayi_il==2)Adıyaman
            @elseif($operator1->bayi_il==3)Afyonkarahisar
            @elseif($operator1->bayi_il==4)Ağrı
            @elseif($operator1->bayi_il==5)Amasya
            @elseif($operator1->bayi_il==6)Ankara
            @elseif($operator1->bayi_il==7)Antalya
            @elseif($operator1->bayi_il==8)Artvin
            @elseif($operator1->bayi_il==9)Aydın
            @elseif($operator1->bayi_il==10)Balıkesir
            @elseif($operator1->bayi_il==11)Bilecik
            @elseif($operator1->bayi_il==12)Bingöl
            @elseif($operator1->bayi_il==13)Bitlis
            @elseif($operator1->bayi_il==14)Bolu
            @elseif($operator1->bayi_il==15)Burdur
            @elseif($operator1->bayi_il==16)Bursa
            @elseif($operator1->bayi_il==17)Çanakkale
            @elseif($operator1->bayi_il==18)Çankırı
            @elseif($operator1->bayi_il==19)Çorum
            @elseif($operator1->bayi_il==20)Denizli
            @elseif($operator1->bayi_il==21)Diyarbakır
            @elseif($operator1->bayi_il==22)Edirne
            @elseif($operator1->bayi_il==23)Elazığ
            @elseif($operator1->bayi_il==24)Erzincan
            @elseif($operator1->bayi_il==25)Erzurum
            @elseif($operator1->bayi_il==26)Eskişehir
            @elseif($operator1->bayi_il==27)Gaziantep
            @elseif($operator1->bayi_il==28)Giresun
            @elseif($operator1->bayi_il==29)Gümüşhane
            @elseif($operator1->bayi_il==30)Hakkâri
            @elseif($operator1->bayi_il==31)Hatay
            @elseif($operator1->bayi_il==32)Isparta
            @elseif($operator1->bayi_il==33)Mersin
            @elseif($operator1->bayi_il==34)İstanbul
            @elseif($operator1->bayi_il==35)İzmir
            @elseif($operator1->bayi_il==36)Kars
            @elseif($operator1->bayi_il==37)Kastamonu
            @elseif($operator1->bayi_il==38)Kayseri
            @elseif($operator1->bayi_il==39)Kırklareli
            @elseif($operator1->bayi_il==40)Kırşehir
            @elseif($operator1->bayi_il==41)Kocaeli
            @elseif($operator1->bayi_il==42)Konya
            @elseif($operator1->bayi_il==43)Kütahya
            @elseif($operator1->bayi_il==44)Malatya
            @elseif($operator1->bayi_il==45)Manisa
            @elseif($operator1->bayi_il==46)Kahramanmaraş
            @elseif($operator1->bayi_il==47)Mardin
            @elseif($operator1->bayi_il==48)Muğla
            @elseif($operator1->bayi_il==49)Muş
            @elseif($operator1->bayi_il==50)Nevşehir
            @elseif($operator1->bayi_il==51)Niğde
            @elseif($operator1->bayi_il==52)Ordu
            @elseif($operator1->bayi_il==53)Rize
            @elseif($operator1->bayi_il==54)Sakarya
            @elseif($operator1->bayi_il==55)Samsun
            @elseif($operator1->bayi_il==56)Siirt
            @elseif($operator1->bayi_il==57)Sinop
            @elseif($operator1->bayi_il==58)Sivas
            @elseif($operator1->bayi_il==59)Tekirdağ
            @elseif($operator1->bayi_il==60)Tokat
            @elseif($operator1->bayi_il==61)Trabzon
            @elseif($operator1->bayi_il==62)Tunceli
            @elseif($operator1->bayi_il==63)Şanlıurfa
            @elseif($operator1->bayi_il==64)Uşak
            @elseif($operator1->bayi_il==65)Van
            @elseif($operator1->bayi_il==66)Yozgat
            @elseif($operator1->bayi_il==67)Zonguldak
            @elseif($operator1->bayi_il==68)Aksaray
            @elseif($operator1->bayi_il==69)Bayburt
            @elseif($operator1->bayi_il==70)Karaman
            @elseif($operator1->bayi_il==71)Kırıkkale
            @elseif($operator1->bayi_il==72)Batman
            @elseif($operator1->bayi_il==73)Şırnak
            @elseif($operator1->bayi_il==74)Bartın
            @elseif($operator1->bayi_il==75)Ardahan
            @elseif($operator1->bayi_il==76)Iğdır
            @elseif($operator1->bayi_il==77)Yalova
            @elseif($operator1->bayi_il==78)Karabük
            @elseif($operator1->bayi_il==79)Kilis
            @elseif($operator1->bayi_il==80)Osmaniye
            @elseif($operator1->bayi_il==81)Düzce
            @endif</td>
        <td class="project-actions text-center">{{$operator1->bayi_kodu}}</td>
        <td class="project-actions text-center"> {{(count($musteri_sikayeti->where('sikayet_bayi',$operator1->id)) == 0 ? "" : count($musteri_sikayeti->where('sikayet_bayi',$operator1->id)))}}</td>
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
                <th style="width: 35%">{{ __('Bayi Adı') }}</th>
                <th class="project-actions text-center" style="width: 20%">{{ __('İl') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Bayi Kodu') }}</th>
                <th class="project-actions text-center" style="width: 15%">{{ __('Toplam Şikayet') }}</th>
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
