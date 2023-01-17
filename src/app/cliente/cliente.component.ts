import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

constructor (
  private apiCliente: ApiclienteService
){
  apiCliente.getclientes().subscribe(Response => {
    console.log(Response);
  })
}
  
  
ngOnInit(): void {
    
}
}

