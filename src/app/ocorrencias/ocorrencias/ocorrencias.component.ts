import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaEtariaService } from '../service/faixa-etaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit {

  regioes: Regiao[] = [];
  ocorrencias: Ocorrencia[] = [];
  faixasEtarias: Faixaetaria[] = [];

  constructor(private regiaoService:RegiaoService, private ocorrenciaService:OcorrenciaService, private faixaEtariaService:FaixaEtariaService) { }

  ngOnInit(): void {
    this.regiaoService.listRegiao().subscribe(regioes => {this.regioes = regioes});
    this.ocorrenciaService.listOcorrencia().subscribe(ocorrencias => this.ocorrencias = ocorrencias);
    this.faixaEtariaService.listFaixaEtaria().subscribe(faixasEtarias => this.faixasEtarias = faixasEtarias);
  }


}
