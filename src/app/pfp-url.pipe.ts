import { Pipe, PipeTransform } from '@angular/core';
import * as CryptoJS from 'crypto-js'; // To create the MD5 hash

@Pipe({
  name: 'pfpUrl'
})
export class PfpUrlPipe implements PipeTransform {

  private gravatarUrlStart = 'https://www.gravatar.com/avatar/';
  private gravatarUrlEnd = '?s=50&d=identicon&r=PG';

  transform(username: string): string {
    if (!username) {
      return '';
    }

    const md5Hash = CryptoJS.MD5(username.trim().toLowerCase()).toString();
    return this.gravatarUrlStart + md5Hash + this.gravatarUrlEnd;
  }

}

