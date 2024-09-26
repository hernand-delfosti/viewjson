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
      title: 'Edit client',
      username: 'username',
      user_id: '25',
      slug: '/logo/3',
      status: 'ACTIVE',
      created_at: '2023-08-31 14:45:14',
      updated_at: '2023-08-31 14:45:14'
     },
    // {
    //   roles: [
    //     "ssasa",
    //     "dsadgggg",
    //     "uuytuuytu"
    //   ]
    // },
    // {
    //   date: {
    //     id: '3',
    //     title: 'Edit client',
    //     username: 'username',
    //     user_id: '25',
    //     slug: '/logo/3',
    //     status: 'ACTIVE',
    //     created_at: '2023-08-31 14:45:14',
    //     updated_at: {
    //       id: '3',
    //       title: 'Edit client',
    //       username: 'username',
    //       user_id: '25',
    //       slug: '/logo/3',
    //       status: 'ACTIVE',
    //       created_at: '2023-08-31 14:45:14',
    //       updated_at: '2023-08-31 14:45:14'
    //     },
    //   },
    // }
  ];

  // styles the key, value, and braces of the JSON
  styleConfig = {
    colorKey: '#616a6b',
    colorValue: '#0f7c00',
    colorBraces: '#0f7c00',
    weightKey: '500',
    weightValue: '500',
    fontSizeKey: '14px',
    fontSizeValue: '14px'
  };

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
    this.applyStyles();
  }

  ngAfterViewInit() {
    this.applyStyles();
  }

  applyStyles() {
    const values = document.querySelectorAll('span.string');
    const keys = document.querySelectorAll('span.key');
    const braces = document.querySelectorAll('span.braces');

    /** values */
    values.forEach((key) => {
      const element = key as HTMLElement;
      element.style.color = this.styleConfig.colorValue; // color of the value
      element.style.fontWeight = this.styleConfig.weightValue; // weight of the value
      element.style.lineHeight = '1.5';
    });

    /** keys */
    keys.forEach((key) => {
      const element = key as HTMLElement;
      element.style.color = this.styleConfig.colorKey; // color of the key
      element.style.fontWeight = this.styleConfig.weightKey; // weight of the key
      element.style.marginLeft='15px'
    });

    /** braces of the JSON */
    braces.forEach((brace) => {
      const element = brace as HTMLElement; 
      element.style.color = this.styleConfig.colorBraces; // color of braces
    });
  }

  syntaxHighlight(json: string): string {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|[{}\[\]]/g, function (match) {
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
      } else if (/[{}\[\]]/.test(match)) {
        cls = 'braces';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    });
  }

  formatJson(item: any): string {
    return this.syntaxHighlight(JSON.stringify(item, null, 2));
  }

}