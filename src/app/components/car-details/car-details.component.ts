import { Router } from "@angular/router";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CarInterface } from "src/app/Interfaces/carInterface";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class CarDetailsComponent implements OnInit {
  car$: Observable<any>;
  public carSelected: CarInterface;

  constructor(private store: Store<CarInterface>, private router: Router) {
    this.car$ = this.store;
  }

  ngOnInit() {
    this.car$.subscribe((res) => {
      console.log(res);
      if (res.car.id == "") {
        this.router.navigate([""]);
      } else {
        this.carSelected = res.car;
      }
    });
  }
}
