import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {}
