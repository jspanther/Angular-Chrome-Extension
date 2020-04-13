import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgImageVal = 'https://source.unsplash.com/1600x900/?nature,water';
  quoteContent = '';
  quoteAuthor = '';

  constructor(private $http: Http) {
  	this.getRandomQuote();
  }

  getRandomQuote() {
  	//const response = $http.get('https://api.quotable.io/random');
    
    console.log(this.quoteContent, this.quoteAuthor);

  }
}


