import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, Subject, takeUntil, tap, throwError } from 'rxjs';
import { AuthApiService } from 'src/app/@core/api/auth.api.service';
import { AuthService } from 'src/app/@core/services/auth.service';
import { markFormAsTouched } from 'src/app/@core/utils/generic.utils';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  signInForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  credentialError: boolean = false;

  unsubscribe$: Subject<void> = new Subject();

  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService,
    private router: Router
  ) {
    this.signInForm.valueChanges
      .pipe(tap(() => (this.credentialError = false)))
      .subscribe();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSignIn() {
    if (this.signInForm.valid) {
      const user = { ...this.signInForm.value };
      this.authApiService
        .signIn(user)
        .pipe(
          takeUntil(this.unsubscribe$),
          tap((data: any) => {
            this.authService.setCurrentUser(data);
            this.router.navigate(['/']);
          }),
          catchError(() => {
            this.credentialError = true;
            return of();
          })
        )
        .subscribe();
    } else {
      markFormAsTouched(this.signInForm);
    }
  }

  onOpenSignUp() {
    this.router.navigate(['/auth/sign-up']);
  }
}
