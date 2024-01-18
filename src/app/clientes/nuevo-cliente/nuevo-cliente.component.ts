import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NuevoCliente } from './nuevo-cliente';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {
  nuevoHotelForm!: FormGroup;
  /*reactiveForm: UntypedFormGroup*/

  constructor(private formBuilder: FormBuilder, private clientesService: ClientesService, private router: Router) {}

  ngOnInit(): void {
    this.nuevoHotelForm = this.formBuilder.group({
      fullName: ['', [ Validators.required, Validators.minLength(4)]],
      userName: [''],
      email: ['', [ Validators.required, Validators.email]],
      password: [''],
    },{
      validators: [],
    })
  }

  agregarCliente() {
    if (this.nuevoHotelForm.valid) {
      const nuevoCliente = this.nuevoHotelForm.getRawValue() as NuevoCliente;
      this.clientesService.registrarCliente(nuevoCliente).subscribe({
        complete: () => this.close(),
        error: () => alert('No fue posible hacer el registro'),
      });
    }else {
      alert ('Verifica el formulario')
    }
  }

  close() {
    this.router.navigate(['home'])
  }
}
