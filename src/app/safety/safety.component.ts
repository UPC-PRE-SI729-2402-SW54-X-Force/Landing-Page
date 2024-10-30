import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-safety',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent {}
