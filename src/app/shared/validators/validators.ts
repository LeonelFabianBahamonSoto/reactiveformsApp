import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';


//SE MUDA AL VALIDATORS.SERVICE
// export function passwordMatchValidator(): ValidatorFn {
//     return (formGroup: AbstractControl): ValidationErrors | null => {
//         const passwordOne = formGroup.get('password')?.value;
//         const passwordTwo = formGroup.get('confirmPassword')?.value;

//         if (!passwordOne || !passwordTwo) return null;
//         const matchError = passwordOne === passwordTwo ? null : { 'passwordMustMatch': true };
//         formGroup.get('confirmPassword')?.setErrors( matchError );

//         return matchError;
//     }
// };

//SE MUDA AL VALIDATORS.SERVICE
// export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
// export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// //Validacion personalizada EMAIL
// export const emailValidator = ( control: FormControl ): ValidationErrors | null => {

//     console.info('passwordMatchValidatorExm: ', control );

//     return { ex: true };
// };

//Validacion personalizada II
export const passwordMatchValidatorExm = ( control: FormControl ): ValidationErrors | null => {

    console.info('passwordMatchValidatorExm: ', control );

    return { ex: true };
};