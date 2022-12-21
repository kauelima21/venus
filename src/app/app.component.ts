import { Component, OnInit } from '@angular/core';
import { div } from './app.styles';

@Component({
  selector: 'app-root',
  template: `
    <css-reset>
      <div style="display: grid; gap: 30px; padding: 60px;">
        <h2>Verify Pipelines</h2>
        <form style="display: flex; flex-direction: column; gap: 10px;">
          <venus-input placeholder="Topology id"></venus-input>
          <venus-button>Buscar</venus-button>
        </form>
        <venus-card>
          <h3 card_header>Resultado</h3>
          <p card_section>
            Faça uma busca usando algum solver e o resultado estara aqui.
          </p>
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
