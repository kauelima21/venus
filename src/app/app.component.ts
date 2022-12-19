import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <venus-button
        height="50px"
        [border]="'none'"
        backgroundColor="$primaryMid"
        >Button</venus-button
      >
      <venus-button variant="secondary">Button</venus-button>
      <venus-button variant="danger">Button</venus-button>
      <venus-button variant="success">Button</venus-button>
      <venus-button variant="warning">Button</venus-button>
    </div>
  `,
})
export class AppComponent {}
