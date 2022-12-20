import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <venus-input name="input" placeholder="Input"></venus-input>
      <venus-button>Primary</venus-button>
      <venus-button variant="secondary">Secondary</venus-button>
      <venus-button variant="danger">Danger</venus-button>
      <venus-button variant="success">Success</venus-button>
      <venus-button variant="warning">Warning</venus-button>
    </div>
  `,
})
export class AppComponent {}
