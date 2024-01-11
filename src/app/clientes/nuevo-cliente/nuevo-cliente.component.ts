import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {
  FormNuevoHotel!: FormGroup
  /*reactiveForm: UntypedFormGroup*/

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.FormNuevoHotel = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
        email: ['', Validators.required, Validators.email],
      })
  }

  registrar() {}
}
