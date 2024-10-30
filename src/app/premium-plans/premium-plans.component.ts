import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-premium-plans',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './premium-plans.component.html',
  styleUrls: ['./premium-plans.component.css']
})
export class PremiumPlansComponent {}
