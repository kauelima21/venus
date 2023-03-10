import { Component, OnInit } from '@angular/core';
import { div } from './app.styles';
import { theme } from 'venus';

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
        <form (ngSubmit)="send()" ngNativeValidate>
          <venus-input
            placeholder="Placeholder"
            [(model)]="modelo"
            name="modelo"
            [isRequired]="true"
          ></venus-input>
          <venus-input
            type="datetime-local"
            step="1"
            [(model)]="data"
            name="data"
          ></venus-input>
          <venus-input type="date" step="1"></venus-input>
          <venus-input type="time" step="1"></venus-input>
          <venus-button type="submit">
            <venus-icon name="info" color="light" size="sm"></venus-icon>
            Info
          </venus-button>
        </form>
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
  modelo = '';
  data = '';

  send() {
    alert(this.modelo);
    alert(this.data);
  }

  ngOnInit() {
    this.style = div().className;
    let tokens = Object.entries(theme.colors).map(([key, value]) => value);
    let colors = tokens.map(
      (token) => `name: ${token.token} value: ${token.value}`
    );
    console.log(colors);
  }
}
