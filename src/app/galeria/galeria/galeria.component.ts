import { Component, inject, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria.component',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit{
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  private lugarService = inject(LugarService);
  private categoriaService = inject(CategoriaService);
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  ngOnInit(): void {
    console.log("Entrou no ngOnInit");
    this.categoriaService.obterTodas()
    .subscribe(categorias => this.categoriasFiltro = categorias);

    this.lugarService.obterTodos()
      .subscribe(lugaresResposta => this.lugares = lugaresResposta);
  }

  getTotalEstrelas(lugar: Lugar) : string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0) );
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe(resultado => this.lugares = resultado);
  }

}
