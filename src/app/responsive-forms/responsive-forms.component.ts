import { Component } from '@angular/core';
import { FILTER_FORM_ENUM } from './filter-form-fields.enum';

@Component({
  templateUrl: './responsive-forms.component.html',
})
export class ResponsiveFormsComponent {
  keys: FILTER_FORM_ENUM[] = [];
}
