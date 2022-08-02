import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificacaoService } from '../notificacao.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private notificacaoService: NotificacaoService,
  ) { }

  ngOnInit(): void {
  }
  
  formContato = this.fb.group({
    nome:["",[
     Validators.minLength(4),
     Validators.required
    ]],
    assunto:["",[
      Validators.minLength(10),
      Validators.required
    ]],
    telefone:["",[
      Validators.minLength(11),
      Validators.required
    ]],
    email:["",[
      Validators.email,
      Validators.required
    ]],
    mensagem:["",[
      Validators.minLength(20),
      Validators.required
    ]]
  });


  enviarFormulario(){
    this.notificacaoService.notificar("Formulário Enviado Com Sucesso");
    this.formContato.reset();
  }







  

}
