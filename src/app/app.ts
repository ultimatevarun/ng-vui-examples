import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
//import {AccordionComponent} from "../../lib/src/accordion/accordion.component"
import {AccordionComponent} from "@ertpl-ui/accordion";
import {TextInputComponent} from "@ertpl-ui/text-input";

@Component({
  selector: 'app-root',
  imports: [AccordionComponent, ReactiveFormsModule, TextInputComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ertpl-ui-example';
  name = '';
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      name: [''],
      category: ['']
    });
  }

  onToggle(expanded: boolean): void {
    console.log('Accordion is now:', expanded ? 'expanded' : 'collapsed');
  }

  getActiveFilters(): string {
    const values = this.searchForm.value;
    const filters = Object.entries(values)
        .filter(([_, value]) => value)
        .map(([key]) => key);
    return filters.length ? `Active filters: ${filters.join(', ')}` : 'No filters applied';
  }
}
