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
        throw new Error("Method not implemented.");
    }

    public myForm: FormGroup = this.fb.group({
        productName: ['',[Validators.required, Validators.minLength(3)],[]],
        price: [0,[Validators.required, Validators.min(1)],[]],
        inStorage: [0,[Validators.required, Validators.min(1)],[]],
    });

    onSaveForm = (): void => {
        if(this.myForm.invalid) return;
        console.info('FORM: ',this.myForm.value);

        this.myForm.reset({
            productName: 'RESET',
            price: 1,
            inStorage: 1,
        });
    };
}
