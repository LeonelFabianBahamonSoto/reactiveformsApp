import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    public passwordMatchValidator(): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const passwordOne = formGroup.get('password')?.value;
            const passwordTwo = formGroup.get('confirmPassword')?.value;

            let matchError: Object | null = null;

            if (!passwordOne || !passwordTwo) return null;

            if( passwordOne !== passwordTwo ){
                formGroup.get('confirmPassword')?.setErrors({ 'passwordMustMatch': true });
                matchError = { 'passwordMustMatch': true };
            } else {
                formGroup.get('confirmPassword')?.setErrors( null );
                matchError = null;
            };

            return matchError;
        }
    };


    public passwordMatchValidatorExm = ( control: FormControl ): ValidationErrors | null => {
        console.info('passwordMatchValidatorExm: ', control );

        return { ex: true };
    };
}