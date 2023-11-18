import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  @Input()
  title: string = '';

  @Input()
  linkUrl: string = '';

  @Input()
  linkLabel: string = '';

}
