import { Component, OnInit, Input } from '@angular/core';
import {
  VenusBreadcrumbStyle,
  VenusBreadcrumbList,
} from './venus-breadcrumb.styles';

interface paths {
  name: string;
}

@Component({
  selector: 'venus-breadcrumb',
  template: `
    <div [ngClass]="[style]">
      <ul [ngClass]="[list]">
        <li *ngFor="let path of paths" [ngClass]="[list]">
          <a>{{ path.name }}</a>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class VenusBreadcrumbComponent implements OnInit {
  style: string = '';
  list: string = '';

  @Input() paths: paths[] = [];

  ngOnInit(): void {
    this.style = VenusBreadcrumbStyle().className;
    this.list = VenusBreadcrumbList().className;
  }
}
