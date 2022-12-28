import { Component, OnInit } from '@angular/core';
import { div } from './app.styles';

@Component({
  selector: 'app-root',
  template: `
    <css-reset>
      <venus-breadcrumb
        [paths]="[
          {
            name: 'Home',
            endpoint: '/home',
            child: [
              {
                name: 'Label 01',
                endpoint: '/'
              }
            ]
          }
        ]"
      ></venus-breadcrumb>
      <div style="display: grid; gap: 30px; padding: 60px;">
        <h3>Resultado</h3>
        <p>Faça uma busca usando algum solver e o resultado estara aqui.</p>
        <venus-button>
          <venus-icon name="info" color="light" size="sm"></venus-icon>
          Info
        </venus-button>
        <venus-card radius="lg">
          <venus-card-header title="Lorem ipsum">
            <venus-icon name="expand_more" color="dark" size="md"></venus-icon>
          </venus-card-header>
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
