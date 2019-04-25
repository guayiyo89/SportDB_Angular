import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSinFoto'
})
export class ImageSinFotoPipe implements PipeTransform {

  transform(player:any): any {
    let noCutout = 'assets/sinCutout.png';
    if (player.strCutout){
      return player.strCutout;
    }else{
      return noCutout;
    }
  }

}
