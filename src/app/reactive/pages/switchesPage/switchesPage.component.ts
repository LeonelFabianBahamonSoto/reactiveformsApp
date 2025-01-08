import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-switches-page',
    templateUrl: './switchesPage.component.html',
    styleUrls: ['./switchesPage.component.sass'],
})

export class SwitchesPageComponent implements OnInit {
    public switchesForm: FormGroup = this.fb.group({
        gender: [ '', Validators.required ],
        wantNotification: [ false, Validators.required ],
        termsAndCondition: [ false, Validators.required ]
    });

    public onSubmitButtonEnable: boolean = false;

    constructor( private fb:FormBuilder ) {};

    ngOnInit(): void {
        this.switchesForm.valueChanges.subscribe(() => {
            this.onSubmitButtonEnable = !this.switchesForm.invalid && this.switchesForm.get('termsAndCondition')?.value;
        });
    };

    termsAndConditionValidation = () => {
        if( this.switchesForm.get('termsAndCondition')?.value !== true && this.switchesForm.controls['termsAndCondition']?.touched ){
            return true;
        }
        else return false;
    };

    onSave = () => {
        if( !this.switchesForm.invalid
            && this.switchesForm.controls["termsAndCondition"]?.value === true
        ){
            this.switchesForm.reset({
                gender: '',
                wantNotification: false,
                termsAndCondition: false,
            });
            console.info('FINAL FORM: ', this.switchesForm.value);
        };

        this.switchesForm.markAllAsTouched();
        return;
    }
}
