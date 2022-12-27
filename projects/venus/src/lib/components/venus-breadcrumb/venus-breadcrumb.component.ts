import { Component, OnInit, Input } from '@angular/core';
import {
  VenusBreadcrumbStyle,
  VenusBreadcrumbList,
  VenusBreadcrumbItem,
} from './venus-breadcrumb.styles';
import { Router } from '@angular/router';

@Component({
  selector: 'venus-breadcrumb',
  template: `
    <div [ngClass]="[style]">
      <ul [ngClass]="[list]">
        <li *ngFor="let path of paths" [ngClass]="[item]">
          <a *ngIf="router.url === path.endpoint">{{ path.name }}</a>
          <ng-container *ngFor="let child of path.child">
            <ng-container *ngIf="router.url === child.endpoint">
              <a>{{ path.name }}</a>
              <strong>></strong>
              <a>{{ child.name }}</a>
            </ng-container>
          </ng-container>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class VenusBreadcrumbComponent implements OnInit {
  constructor(public router: Router) {}
  style: string = '';
  list: string = '';
  item: string = '';

  @Input() paths: Array<any> = [];

  ngOnInit() {
    console.log(this.router.url);
    this.style = VenusBreadcrumbStyle().className;
    this.list = VenusBreadcrumbList().className;
    this.item = VenusBreadcrumbItem().className;
  }
}
