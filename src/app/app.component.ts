import { Component } from '@angular/core';
import { FEATURE_FLAGS } from './shared/feature-flag.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sumukham';
  isWebsiteEnabled = FEATURE_FLAGS.is_website_enabled;
}
