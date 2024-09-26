import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-read-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-pdf.component.html',
  styleUrls: ['./read-pdf.component.scss'],
})
export class ReadPdfComponent implements OnInit {
  @Input() pdfUrl: string = '';
  safeUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrl = this.getSafeUrl(this.pdfUrl);
  }

  private getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}