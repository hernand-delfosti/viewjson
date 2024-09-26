import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-v-json',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v-json.component.html',
  styleUrls: ['./v-json.component.scss'],
})
export class VJsonComponent implements OnInit, AfterViewInit {

  @Input() jsonData: any = [
    {
      id: '3',
      title: 'Editar cliente',
      username: 'nombre.usuario',
      user_id: '25',
      slug: '/logotipo/3',
      status: 'ACTIVE',
      created_at: '2023-08-31 14:45:14',
      updated_at: '2023-08-31 14:45:14'
    },
    {
      roles: [
        "ssasa",
        "dsadgggg",
        "uuytuuytu"
      ]
    },
    {
      date: {
        id: '3',
        title: 'Editar cliente',
        username: 'nombre.usuario',
        user_id: '25',
        slug: '/logotipo/3',
        status: 'ACTIVE',
        created_at: '2023-08-31 14:45:14',
        updated_at: {
          id: '3',
          title: 'Editar cliente',
          username: 'nombre.usuario',
          user_id: '25',
          slug: '/logotipo/3',
          status: 'ACTIVE',
          created_at: '2023-08-31 14:45:14',
          updated_at: '2023-08-31 14:45:14'
        },
      },
    }
  ];


formattedJson: SafeHtml;
  isCollapsed: boolean[] = [];

  constructor() {
    this.formattedJson = '';
  }

  ngOnInit() {
    this.isCollapsed = this.jsonData.map(() => false);
  }

  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];
    const keys = document.querySelectorAll('span.string');
    keys.forEach((key) => {
      const element = key as HTMLElement;
      element.style.color = '#0f7c00';
      element.style.fontWeight = '500';
    });
    
  }

  ngAfterViewInit() {
    const keys = document.querySelectorAll('span.string');
    keys.forEach((key) => {
      const element = key as HTMLElement;
      element.style.color = '#0f7c00';
      element.style.fontWeight = '500';
    });
  }

  syntaxHighlight(json: string): string {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
          match = match.replace(/"/g, '');
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }

  formatJson(item: any): string {
    return this.syntaxHighlight(JSON.stringify(item, null, 2));
  }

}
