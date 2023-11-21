import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input()
  public title: string = '';

  @Input()
  public linkUrl: string = '';

  @Input()
  public linkLabel: string = '';
}
