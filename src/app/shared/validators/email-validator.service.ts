import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const email = control.value;

        const httpCallObservable = new Observable<ValidationErrors|null>( (subscriber) => {
            console.info('EMAIL: ', email);

            if(email === 'bahamon@gmail.com'){
                subscriber.next({ emailTaken: true });
                subscriber.complete();
            };

            subscriber.next( null );
        })

        return httpCallObservable;
    };

    

    // validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.info('EMAIL: ', email);

    //     return of({ emailTaken: true });
    // }

    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }

}