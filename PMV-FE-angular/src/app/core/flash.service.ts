import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export declare type classNames = 'info' | 'danger' | 'warn' | 'success';

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  constructor(public _snackBar: MatSnackBar) { }

  flash(message: string, pClass: classNames, action: string = '✖', options?: MatSnackBarConfig) {
    this._snackBar.open(message, action, {
      horizontalPosition: options?.horizontalPosition || 'end',
      verticalPosition: options?.verticalPosition || 'top',
      duration: options?.duration || 5000,
      panelClass: ['mat-flash', `mat-flash-${pClass}`]
    });
  }

  warn(message: string, options?: MatSnackBarConfig) {
    this.flash(message, "warn", '✖', options);
  }

  error(message: string, options?: MatSnackBarConfig) {
    this.flash(message, "danger", '✖', options);
  }

  success(message: string, options?: MatSnackBarConfig) {
    this.flash(message, "success", '✖', options);
  }

  errorMessageCheck(err: any) {
    const errorResult = err.error?.message ? err.error?.message : err.statusText ? err.statusText : err.error?.text ? err.error?.text : (typeof err.error != 'object') ? err.error : err.error?.error ? err.error?.error : err.message ? err.message : 'Something went wrong';
    return errorResult
  }
}
