import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.page.html',
  styleUrls: ['./projeto.page.scss'],
})
export class ProjetoPage implements OnInit {

  form: FormGroup; 
  
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
  }

  iniciarForm() {
    this.form = this.formBuilder.group({
        id: [null],
        nome: [null, [Validators.required, Validators.minLength(3)]],
        testador: [null, [Validators.required, Validators.minLength(3)]],
        revisor: [null, [Validators.required, Validators.minLength(3)]],
        gerente: [null, [Validators.required, Validators.minLength(3)]],
        idLider: [null, [Validators.required, Validators.minLength(3)]],
        idCliente: [null, [Validators.required, Validators.minLength(3)]],
    })
}

cadastrarProjeto(){
  this.router.navigate(['tabs/projeto-novo'])
}

}
