import { Component, OnInit } from '@angular/core';
import { CadastroCarrosService } from '../services/cadastro-carros.service';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  carros;
  selectedCarro ;

  constructor(private dataService: CadastroCarrosService) { }

  ngOnInit() {
    this.dataService.getCarros().subscribe(r => {
      this.carros = r;
    });
    

  }
  public selectCarros(carros) {
    this.selectedCarro  = this.carros;

  }

 deleteCarro(id: number){
  this.dataService.deleteCarro(id)
  .subscribe(
    data => {
      console.log(data);
      this.carros();
    },
    error => console.log(error));
 }
  
}
