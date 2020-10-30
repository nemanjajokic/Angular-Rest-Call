import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  countryName: string = "";
  country: any;
  b: boolean = false;

  constructor(private http: HttpClient) { }

  search() {
    this.http.get("https://restcountries.eu/rest/v2/name/" + this.countryName).subscribe((response) => {
      this.country = response;
      this.b = true;
      console.log("get the response");
    });
  }

  ngOnInit(): void {
  }

}
