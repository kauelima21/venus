import { Component, OnInit } from '@angular/core';
import { div } from './app.styles';

@Component({
  selector: 'app-root',
  template: `
    <css-reset>
      <div style="display: grid; gap: 30px; padding: 60px;">
        <h3 card_header>Resultado</h3>
        <p card_section>
          Faça uma busca usando algum solver e o resultado estara aqui.
        </p>
        <venus-button>
          <venus-icon name="info" color="light" size="small"></venus-icon>
          Info
        </venus-button>
        <venus-button size="lg" [full]="true" bg="success"
          >Confirmar</venus-button
        >
        <venus-button size="lg" bg="danger">Cancelar</venus-button>
        <venus-button size="sm" bg="warning">Comprar</venus-button>
        <venus-card radius="lg">
          <venus-card-header title="Lorem ipsum"></venus-card-header>
          <venus-card-content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt
              incidunt accusantium dolorem quod nesciunt facere, sequi
              consectetur assumenda laboriosam libero quidem sint ipsum, fugit
              culpa, minus facilis vitae voluptatem expedita soluta autem
              labore. Ullam quos, recusandae facilis similique assumenda eum
              adipisci alias, incidunt rem veritatis quasi!
            </p>
          </venus-card-content>
        </venus-card>
      </div>
    </css-reset>
  `,
})
export class AppComponent implements OnInit {
  style = '';

  ngOnInit() {
    this.style = div().className;
  }
}
