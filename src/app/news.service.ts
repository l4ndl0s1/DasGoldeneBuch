import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NewsItem {
  id?: number;
  title: string;
  place: string;
  image: string;
  eventDate: string;
  link: string;
  shortInfo: string;
  details: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = 'http://127.0.0.1:8000/api/news';

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.apiUrl);
  }

  getNews(id: number): Observable<NewsItem> {
    return this.http.get<NewsItem>(`${this.apiUrl}/${id}`);
  }

  createNews(item: NewsItem): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateNews(id: number, item: NewsItem): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteNews(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
