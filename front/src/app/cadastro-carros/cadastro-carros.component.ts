import { Component, OnInit } from '@angular/core';
import { CadastroCarrosService } from '../services/cadastro-carros.service';

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent implements OnInit {

  carros: {id, ano, descricao, marca, modelo} =  {id: null, ano: "", descricao: "", marca: "", modelo:""}

  constructor(private dataService: CadastroCarrosService) { }

  ngOnInit() {
  }

  createCarros(){
    console.log(this.carros);
    this.dataService.createCarros(this.carros).subscribe(r => {
      this.carros = {id: null, ano:"", descricao:"", marca: "", modelo:""};
    });
  }


}
