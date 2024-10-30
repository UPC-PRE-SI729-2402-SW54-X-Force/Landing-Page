import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SafetyComponent } from './safety/safety.component';
import { PremiumPlansComponent } from './premium-plans/premium-plans.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {AboutTheProductComponent} from "./about-the-product/about-the-product.component";
import {AboutTheTeamComponent} from "./about-the-team/about-the-team.component"; // Importa el componente de footer

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    HeroComponent,
    WhyChooseUsComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    SafetyComponent,
    PremiumPlansComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    TranslateModule,
    AboutTheProductComponent,
    AboutTheTeamComponent
  ]
})
export class AppComponent {
  title = 'LandingPage';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
