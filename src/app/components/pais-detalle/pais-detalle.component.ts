import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from 'src/app/entities/pais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  pais: Pais;

  constructor( private activatedroute: ActivatedRoute, private paiservice: PaisesService) { }

  ngOnInit(): void {

    const id = this.activatedroute.snapshot.paramMap.get('id');

    if (id !== null) {
      
    }

    this.paiservice.paisdatos(id).subscribe((resp: Pais) => {
      this.pais = resp;
      console.log(this.pais)
    })


  }

}
