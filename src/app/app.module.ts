import { RouterModule } from "@angular/router";
import { CarDetailsComponent } from "./components/car-details/car-details.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TitleBannerComponent } from "./components/title-banner/title-banner.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { FilterComponent } from "./components/filter/filter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeListComponent } from "./components/home-list/home-list.component";
import { StoreModule } from "@ngrx/store";
import { carReducer } from "./store/app.reducer";
import { reducers, metaReducers } from "./reducers";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBannerComponent,
    InicioComponent,
    FilterComponent,
    CarDetailsComponent,
    HomeListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    StoreModule.forRoot({ car: carReducer }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
