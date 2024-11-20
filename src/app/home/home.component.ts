import { Component } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  totalResults = 0;
  articles: any = [];
  q: string = "";

  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.q=params.q?params.q:"All";
      this.dataService.getNewsArticle({q:this.q}).subscribe((response: any) => {
        this.totalResults = response.totalResults;
        this.articles = response.articles;
      })
    })
  }
}
