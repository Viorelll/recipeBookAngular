import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-app',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    isLoginMode = true;
    isLoading = false;
    error: string = null;

    /**
     *
     */
    constructor(private authService: AuthService,
        private router: Router) {}
    

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm) {
        console.log('Call onSubmit()');
        if (!authForm.valid) {
            return;
        }

        const email = authForm.value.email;
        const password = authForm.value.password;
        let authObs: Observable<AuthResponseData>;

        this.isLoading =  true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);         
        } else {
            authObs = this.authService.signUp(email, password);
        }

        authObs.subscribe(response => {
            this.isLoading =  false;
            this.router.navigate(['/recipes']);
        }, errorMessage => {
            this.error = errorMessage;
            this.isLoading =  false;
        });

        authForm.reset();
    }

}