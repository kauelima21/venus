import { Component, Input } from '@angular/core';

export abstract class VenusRootComponent {
  @Input() height = '';
  @Input() backgroundColor = '';
  @Input() border = '';
}
