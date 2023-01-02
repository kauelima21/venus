import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {
  VenusBreadcrumbStyle,
  VenusBreadcrumbList,
  VenusBreadcrumbItem,
  VenusBreadcrumbIcon,
  VenusBreadcrumbItemSelected,
} from './venus-breadcrumb.styles';
import { Router } from '@angular/router';
import { VenusBreadcrumbItems } from './venus-breadcrumb-items';

@Component({
  selector: 'venus-breadcrumb',
  template: `
    <div [ngClass]="[style]">
      <ul [ngClass]="[list]">
        <li *ngFor="let path of paths" style="display: 'flex';">
          <a
            *ngIf="router.url === path.endpoint"
            [ngClass]="[itemSelect]"
            [routerLink]="path.endpoint"
            >{{ path.name }}</a
          >
          <ng-container *ngFor="let child of path.child">
            <ng-container *ngIf="router.url === child.endpoint">
              <a [ngClass]="[item]" [routerLink]="path.endpoint">{{
                path.name
              }}</a>
              <venus-icon name="navigate_next" [ngClass]="[icon]"></venus-icon>
              <a [ngClass]="[itemSelect]" [routerLink]="child.endpoint">{{
                child.name
              }}</a>
            </ng-container>
          </ng-container>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class VenusBreadcrumbComponent implements OnInit, OnChanges {
  constructor(public router: Router) {}
  style: string = '';
  list: string = '';
  item: string = '';
  itemSelect: string = '';
  icon: string = '';

  @Input() paths: Array<VenusBreadcrumbItems> = [];

  ngOnInit(): void {
    this.style = VenusBreadcrumbStyle().className;
    this.list = VenusBreadcrumbList().className;
    this.item = VenusBreadcrumbItem().className;
    this.itemSelect = VenusBreadcrumbItemSelected().className;
    this.icon = VenusBreadcrumbIcon().className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
