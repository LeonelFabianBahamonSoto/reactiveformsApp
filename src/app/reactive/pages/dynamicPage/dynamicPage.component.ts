import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic-page',
    templateUrl: './dynamicPage.component.html',
    styleUrls: ['./dynamicPage.component.sass'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DynamicPageComponent {

    constructor( private fb: FormBuilder ) {
        console.info('newFavoriteGame: ', this.newFavoriteGame?.value);
    };

    public minLengthFavoriteCharacters: number = 2;
    public maxLengthFavoriteCharacters: number = 15;
    public messageErrorResponse: string = '';

    public dynamicForm: FormGroup = this.fb.group({
        personName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)], []],
        favoriteGames: this.fb.array([
            ['Metal Gear',[ Validators.required, Validators.minLength(2), Validators.maxLength(15) ]],
            ['DeadPool', [ Validators.required, Validators.minLength(2), Validators.maxLength(15) ]],
        ]),
    });

    public newFavoriteGame: FormControl = new FormControl( '', [ Validators.minLength(3), Validators.maxLength(15) ] );

    get favoriteGamesControl() {
        return this.dynamicForm?.controls['favoriteGames'] as FormArray;
    };

    isValidField = ({ theField = '', theError = '' }): boolean => {
        return this.dynamicForm.get(theField)?.errors?.[theError];
    };

    isValidFieldInArray = ( formArray: FormArray, index: number ): boolean => {
        const control = formArray.controls[index] || false;

        control?.statusChanges.subscribe(() => {
            const isError = control?.errors;

            if( isError?.['minlength'] ){
                this.messageErrorResponse = `El nombre debe ser minimo de ${ this.minLengthFavoriteCharacters } caracteres`;
                control.markAsTouched();
            } else if( isError?.['maxlength'] ){
                this.messageErrorResponse = `El nombre del juego requiere máximo de ${ this.maxLengthFavoriteCharacters } caracteres`;
                control.markAsTouched();
            } else {
                this.messageErrorResponse = `El campo es requerido`;
                control.markAsTouched();
            };
        });

        return control.invalid && (control.dirty || control.touched);
    };

    addFavoriteGame = () => {
        if( this.newFavoriteGame.invalid || this.newFavoriteGame.value.length < this.minLengthFavoriteCharacters ) return;

        this.favoriteGamesControl.push(
            this.fb.control( this.newFavoriteGame.value, [ Validators.required, Validators.minLength(2), Validators.maxLength(15) ] )
        );

        this.newFavoriteGame.reset();
    };

    deleteItemFromArray = ( favoriteArrayIndex: number ) => {
        this.favoriteGamesControl.removeAt( favoriteArrayIndex );
    };

    onSaveForm = (): void => {
        if( this.dynamicForm.invalid ){
            this.dynamicForm.markAllAsTouched();
            return;
        };

        console.info('---> FORM: ', this.dynamicForm.value);

        this.dynamicForm.reset({
            personName: '',
            favoriteGames: ['Metal Gear', 'DeadPool'],
        });
    };

}
