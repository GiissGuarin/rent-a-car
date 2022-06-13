import { InicioComponent } from "./components/inicio/inicio.component";
import { CarDetailsComponent } from "./components/car-details/car-details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "details", component: CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
