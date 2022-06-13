import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CarInterface } from "src/app/Interfaces/carInterface";
import * as data from "../../../assets/json/carsDB.json";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  public filterForm = new FormGroup({
    selectFilter: new FormControl(""),
    inputFilter: new FormControl(""),
  });

  public CarList: Array<CarInterface> = (data as any).default;
  @Output() dataCars = new EventEmitter<Array<CarInterface>>();
  public search: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.dataCars.emit(this.CarList);
    console.log(this.router.url);
    if (this.router.url != "/") {
      this.search = false;
    }
  }
  filterList() {
    const { value } = this.filterForm;
    var arrayfiltered: Array<CarInterface>;
    if (value.inputFilter) {
      arrayfiltered = this.CarList.filter((car) =>
        Object.keys(car).some(
          (k) =>
            car[k] != null &&
            car[k]
              .toString()
              .toLowerCase()
              .includes(value.inputFilter.toLowerCase())
        )
      );
      this.dataCars.emit(arrayfiltered);
    } else {
      this.dataCars.emit(this.CarList);
    }
  }
}
