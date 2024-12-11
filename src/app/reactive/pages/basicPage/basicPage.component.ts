import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-basic-page",
    templateUrl: "./basicPage.component.html",
    styleUrls: ["./basicPage.component.sass"],
})
export class BasicPageComponent implements OnInit {
    // readonly product = new FormControl("", [Validators.required]);

    //FORMA LARGA DE HACERLO QUE SE REMPLAZA POR LA DE ABAJO
    // myForm: FormGroup = new FormGroup({
    //     productName: new FormControl('', [], []),
    //     price: new FormControl(0, [], []),
    //     storage: new FormControl(0, [], []),
    // });

    constructor( private fb: FormBuilder ) {}

    ngOnInit(): void {
        this.myForm.reset({ productName: '', price: 0, inStorage: 0 });

        // Suscribirse a los cambios de estado para actualizaciones inmediatas
        this.myForm.get('productName')?.statusChanges.subscribe(() => {
            this.myForm.get('productName')?.markAsTouched(); // Marca como tocado para forzar validación
        });
    }

    isValidField = ({ theField = '', theError = '' }): boolean => {
        return this.myForm.get(theField)?.errors?.[theError];
    }

    public myForm: FormGroup = this.fb.group({
        productName: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(11)], []],
        price: ['',[Validators.required, Validators.min(100), Validators.max(1000001)],[]],
        inStorage: ['',[Validators.required, Validators.min(1), Validators.max(101)],[]],
    });

    onSaveForm = (): void => {
        this.myForm.markAllAsTouched();
        if(this.myForm.invalid){
            return
        };
        console.info('DATA SENT FORM: ',this.myForm.value);
        this.myForm.reset();
    };
}
