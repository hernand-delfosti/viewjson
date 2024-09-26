import { Component } from '@angular/core';
import { VJsonComponent } from './v-json/v-json.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [VJsonComponent]
})
export class AppComponent {
  title = 'viewJson';
}