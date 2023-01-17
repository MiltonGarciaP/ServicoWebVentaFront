import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})



export class ClienteComponent implements OnInit {

  lst: any[] = [];
constructor (
  private apiCliente: ApiclienteService
){ 
}
  
  
ngOnInit(): void {
    this.getClientes();
}

getClientes()
{
  
  this.apiCliente.getclientes().subscribe( response => {
    
    this.lst = response.data;
    
  });
}
}



