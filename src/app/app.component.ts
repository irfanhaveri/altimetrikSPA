import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResults } from './search-results';
import { FormsModule, Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  searchResults : SearchResults;
  form: Form;


  constructor(private http: HttpClient){

  }

  onSubmit(form){
    this.http.get<any>('http://localhost:8080/filter?country=AUS&region=true&income=false&lending=false').subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(){
    this.http.get<SearchResults>('http://localhost:8080/filter?country=AUS&region=true&income=false&lending=false').subscribe(data => {
      console.log(data);
      this.searchResults = data;
    })
  }
}
