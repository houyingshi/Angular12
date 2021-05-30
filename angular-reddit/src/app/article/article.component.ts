import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less'],
  host:{
    class:'row'
  }
})
export class ArticleComponent implements OnInit {
  // votes: number;
  // title: string;
  // link: string;
  // votes: number;
  // title: string;
  // link: string;
  @Input()
  article!: Article;

  constructor() { 
    // this.title = "Angular 12";
    // this.link = "http://angular.io";
    // this.votes = 10;
    // this.article = new Article("Angular 12", "http://angular.io", 10);
  }

  voteUp(): boolean{
    // this.votes += 1;
    // this.article.votes += 1;
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean{
    // this.votes -= 1;
    // this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
