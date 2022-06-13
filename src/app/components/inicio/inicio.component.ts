import { Component, OnInit } from "@angular/core";
import { CarInterface } from "src/app/Interfaces/carInterface";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"],
})
export class InicioComponent implements OnInit {
  public carsList: Array<CarInterface> = [];
  constructor() {}

  ngOnInit() {}

  receiveCars(cars: Array<CarInterface>) {
    this.carsList = cars;
  }
}
