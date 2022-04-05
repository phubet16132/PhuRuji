import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PicDes } from '../interface/PicDes';
import { ProgressService } from '../service/progress.service';

@Injectable({
  providedIn: 'root'
})
export class ProgressResolver implements Resolve<any> {

  constructor(private progressService: ProgressService) { }
  
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<PicDes[]> {
      console.log("rPro");
      return this.progressService.getProgressList();
  }
}
