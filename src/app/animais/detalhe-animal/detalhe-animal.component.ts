import { Observable } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animais';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit{

  animalID!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animaisService: AnimaisService,
    private activateRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.animalID = this.activateRoute.snapshot.params[':animalID'];
    this.animal$ = this.animaisService.buscaPorID(this.animalID);
  }

}
