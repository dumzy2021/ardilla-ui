import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ProductsComponent } from './products/products.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';
import { UnlimitedInvestmentComponent } from './unlimited-investment/unlimited-investment.component';
import { AccessMoreComponent } from './access-more/access-more.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InvestorsComponent } from './investors/investors.component';
import { TractionComponent } from './traction/traction.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertCardComponent } from './advert-card/advert-card.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProductsComponent,
    InterestCalculatorComponent,
    UnlimitedInvestmentComponent,
    AccessMoreComponent,
    TestimonialsComponent,
    InvestorsComponent,
    TractionComponent,
    FooterComponent,
    AdvertCardComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
