import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})



export class ClienteComponent implements OnInit {

  public lst!: any[];
  public columnas: string[] = ['id' , 'nombre']

constructor (
  private apiCliente: ApiclienteService
){ 

}
  
  
ngOnInit(): void {
    this.getClientes();
}

getClientes()
{
  
  this.apiCliente.getclientes().subscribe( Response => {
    this.lst = Response.data;
    
  });
}
}



