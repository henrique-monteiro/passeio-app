import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  camposForm: FormGroup;
  private categoriaService = inject(CategoriaService);

  constructor(){
    this.camposForm = new FormGroup({
        nome: new FormControl('', Validators.required),
        descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.categoriaService
        .salvar(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log('Salva com sucesso!', categoria);
            this.camposForm.reset();
          },
          error: erro => console.error('Ocorreu um erro: ', erro)
        });
    }
  }

  isCampoInvalido(nomeCampo: string) : boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required']
  }
}
