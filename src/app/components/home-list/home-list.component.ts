import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CarInterface } from "src/app/Interfaces/carInterface";

import * as carActions from "../../store/carReducer.actions";

@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styleUrls: ["./home-list.component.css"],
})
export class HomeListComponent implements OnInit {
  @Input() carsList: Array<CarInterface>;
  car$: Observable<CarInterface>;

  constructor(private router: Router, private store: Store<CarInterface>) {
    this.car$ = this.store;
  }

  ngOnInit() {}
  viewDetails(car: CarInterface) {
    this.store.dispatch(new carActions.saveDetails(car));
    this.router.navigate(["/details"]);
  }
}
