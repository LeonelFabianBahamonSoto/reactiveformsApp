import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic-page',
    templateUrl: './dynamicPage.component.html',
    styleUrls: ['./dynamicPage.component.sass'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DynamicPageComponent {

    constructor( private fb: FormBuilder ) {};

    dynamicForm: FormGroup = this.fb.group({
        personName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)], []],
        favoriteGames: this.fb.array([
            ['Metal Gear', Validators.required],
            ['DeadPool', Validators.required],
        ]),
    });

    isValidField = ({ theField = '', theError = '' }): boolean => {
        return this.dynamicForm.get(theField)?.errors?.[theError];
    };

    isValidFieldInArray = ({ theFieldArrayIndex = 0, theError = '' }): boolean => {
        console.info('theFieldArrayIndex: ', theFieldArrayIndex, '\ntheError: ', theError, '\nEXPRESSION: ', 
            this.dynamicForm?.controls[theFieldArrayIndex]?.errors
        );
        return false;
        // return this.dynamicForm.get(theField)?.errors?.[theError];
    };

    deleteItemFromArray = ( i: any ) => {
        console.info('DELETE ITEM i: ', i);
    };

    get favoriteGamesControl() {
        return this.dynamicForm.get('favoriteGames') as FormArray;
    }

    onSaveForm = (): void => {
        if( this.dynamicForm.invalid ){
            console.info('----> INVALID FORM');
            this.dynamicForm.markAllAsTouched();
            this.dynamicForm.reset();
            return;
        }
    };

}
