import { Component, OnInit } from '@angular/core';
import { NewsService, NewsItem } from '../news.service';

@Component({
  selector: 'app-news-list',
  standalone: false,
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  newsList: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(
      (data) => {
        this.newsList = data;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
