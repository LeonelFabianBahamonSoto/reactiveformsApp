import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
    styleUrls: ['./registerPage.component.sass'],
})

export class RegisterPageComponent {
    public charactersRequired: number | string = 0;

    public registerForm: FormGroup = this.fb.group({
        confirmPassword: ['', [ Validators.required, this.validatorService.passwordMatchValidatorExm ]],
        password: ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(10) ]],
        personName: ['', [ Validators.required, Validators.pattern( this.validatorService.firstNameAndLastnamePattern ) ]],
        // userEmail: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ new EmailValidator() ]], //LA OPCION DE ABAJO COLABORA MAS EN EL PERFORMANCE DE LA APP
        userEmail: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ]],
        userPlatformName: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(10) ]],
    }, { validators: [ this.validatorService.passwordMatchValidator() ] });

    constructor( private fb: FormBuilder, private validatorService: ValidatorsService, private emailValidator: EmailValidator ) {};

    isValidField( theField: string, theError: string ): boolean {

        const controlField = this.registerForm.controls?.[ theField ];

        if( theField === 'confirmPassword' && theError === 'passwordMustMatch' ){
            return !!controlField?.errors?.['passwordMustMatch'];
        };

        ( controlField.errors?.['minlength'] )
            ? this.charactersRequired = controlField.errors?.['minlength'].requiredLength
            : ( controlField.errors?.['maxlength'] )
                && ( this.charactersRequired = controlField.errors?.['maxlength'].requiredLength );

        return controlField?.invalid && controlField?.touched && controlField?.errors?.[ theError ];
    };

    onSubmitForm = (): void => {
        if( this.registerForm.invalid ){
            this.registerForm.markAllAsTouched;
            return;
        };
        console.info('FInal FORM: ', this.registerForm.value);

        this.registerForm.reset({
            confirmPassword: '',
            password: '',
            personName: '',
            userEmail: '',
            userPlatformName: '',
        });
    }
}