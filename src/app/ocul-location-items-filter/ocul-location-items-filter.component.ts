import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-ocul-location-items-filter',
  standalone: true,
  imports: [],
  templateUrl: './ocul-location-items-filter.component.html',
  styleUrl: './ocul-location-items-filter.component.scss'
})

export class OculLocationItemsFilterComponent {
  @Input() private hostComponent!: any;
  
  // When it initializes, set the filtersVisible property of the host component to true to expand the filter section by default.
  ngOnInit(): void {
    this.hostComponent.filtersVisible = true;
  }
}
