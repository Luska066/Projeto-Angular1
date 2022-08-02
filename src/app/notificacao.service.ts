import { Injectable } from '@angular/core';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snackBar:MatSnackBar
  ) { }

  notificar(mensagem:string){
   this.snackBar.open(mensagem,"Ok!",{
    duration:1000,
    verticalPosition:"top",
    horizontalPosition:"center"
   })


  }
}
