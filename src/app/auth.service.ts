import { Injectable } from '@angular/core';
import { Observable , delay, tap , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

isLoggedIn:boolean=false;
redirectUrl:string;


  login(name : string , password : string) : Observable<boolean>{
  const isLoggedIn=(name=='pikatchu' && password=='pikatchu');

  return of(isLoggedIn).pipe(
    delay(1000),
    tap(isLoggedIn => this.isLoggedIn=isLoggedIn)
  );
  }

  
  logout(){
this.isLoggedIn=false;
  }
}
