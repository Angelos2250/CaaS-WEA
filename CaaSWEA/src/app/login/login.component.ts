import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
   selector: 'wea5-login',
   templateUrl: './login.component.html',
   styles: [
   ]
 })
 export class LoginComponent implements OnInit {
 
   constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }
   
   login: any = {
       username: '',
       password: ''
   };
 
   private returnTo: string = '';
 
   ngOnInit() {
     this.route.queryParams.subscribe(params => this.returnTo = params['returnUrl'])
   }
 
   submitForm() {
     if (this.auth.login(this.login.username, this.login.password)) {
       this.router.navigateByUrl(this.returnTo);
     } else {
       // TODO error message
     }
   }
 
 }
