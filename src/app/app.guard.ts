import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "./services/user.service";
import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable()
export class AppGuard implements CanActivate{

    // is_admin: boolean = false;

    constructor(private service: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
            return this.service.getAdmin().map((res:any) =>{
                console.log(res);
                // if(res.user && res.user.user_role_id == 1) {
                //                 //     return true;
                //                 // }
                //                 //
                //                 // return false;
                return true;
            });
    }

    // checkAdmin() {
    //     console.log(123);
    //     this.service.getAdmin().subscribe((res:any) =>{
    //         if(res.user && res.user.user_role_id == 1) {
    //             return true;
    //         }
    //         return false;
    //     });
    // }
}
