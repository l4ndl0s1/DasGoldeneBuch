import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventItem, events } from './events.data';
import { ArchiveHeaderComponent } from '../archive-header/archive-header.component';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule, FormsModule, ArchiveHeaderComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
})
export class ArchiveComponent implements OnInit {
  private readonly MAX_CHARS = 150;
  private readonly ALL_YEARS = 'all';

  events: EventItem[] = events;

  selectedYear: string = this.ALL_YEARS;
  groupedEvents: { [key: string]: EventItem[] } = {};
  availableYears: string[] = [];

  ngOnInit(): void {
    this.extractYears();
    this.groupEvents();
  }

  extractYears(): void {
    const years = new Set(this.events.map((event) => event.year));
    this.availableYears = [this.ALL_YEARS, ...Array.from(years).sort()];
  }

  groupEvents(): void {
    this.groupedEvents = this.events.reduce((acc, event) => {
      (acc[event.year] = acc[event.year] || []).push(event);
      return acc;
    }, {} as { [key: string]: EventItem[] });
  }

  onYearChange(): void {
    if (this.selectedYear === this.ALL_YEARS) {
      this.groupEvents();
    } else {
      this.groupedEvents = {
        [this.selectedYear]: this.events.filter(
          (event) => event.year === this.selectedYear
        ),
      };
    }
  }

  getHeadline(year: string): string {
    const headlines: { [key: string]: string } = {
      '2022': 'Befreiende Evas',
      '2023': 'Das goldene Buch',
      '2024': 'Workshops & Events 2024',
      '2025': 'Frauen Matinee',
    };
    return headlines[year] || 'Vergangene Ereignisse';
  }

  toggleDescription(event: EventItem): void {
    event.isExpanded = !event.isExpanded;
  }

  truncateText(text: string): string {
    if (!text) return '';
    if (text.length <= this.MAX_CHARS) return text;
    return text.substring(0, this.MAX_CHARS) + '...';
  }

  shouldShowExpandButton(text?: string): boolean {
    return text ? text.length > this.MAX_CHARS : false;
  }
}
