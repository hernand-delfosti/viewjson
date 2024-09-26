import { Component } from '@angular/core';
import { VJsonComponent } from './v-json/v-json.component';
import { ReadPdfComponent } from './read-pdf/read-pdf.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [
    VJsonComponent,
    ReadPdfComponent
  ]
})
export class AppComponent {
  title = 'viewJson';
  urlPdf = '../assets/CurriculumHernanAbelRiosValencia_1__1_.pdf';

  constructor() {}
}