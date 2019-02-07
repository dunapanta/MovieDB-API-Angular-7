import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

// servicio
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
