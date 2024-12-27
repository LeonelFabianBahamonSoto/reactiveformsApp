import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic-page',
    templateUrl: './dynamicPage.component.html',
    styleUrls: ['./dynamicPage.component.sass'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DynamicPageComponent {

    constructor( private fb: FormBuilder ) {};

    dynamicForm: FormGroup = this.fb.group({
        personName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)], []],
        favoriteGames: this.fb.array([
            ['Metal Gear', Validators.required],
            ['DeadPool', Validators.required],
        ]),
    });

    isValidField = ({ theField = '', theError = '' }): boolean => {
        return false;
    };

    onSaveForm = (): void => {
        this.dynamicForm.markAllAsTouched();
        this.dynamicForm.reset();
    };

}
