import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Coffee {
  id: number;
  name: string;
  image_url: string;
  region: string;
  price: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coffee: Coffee[] = [];
  filteredCoffee: Coffee[] = [];
  selectedRegions: string[] = [];
  priceRange: number = 20; // Set a default maximum price

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchCoffees();
  }

  fetchCoffees() {
    fetch('https://fake-coffee-api.vercel.app/api')
      .then((response) => response.json())
      .then((result: Coffee[]) => {
        this.coffee = result;
        this.filteredCoffee = result; // Initialize filteredCoffee with all items
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  updatePriceValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.priceRange = Number(input.value);
  }

  toggleRegion(region: string) {
    const index = this.selectedRegions.indexOf(region);
    if (index === -1) {
      this.selectedRegions.push(region);
    } else {
      this.selectedRegions.splice(index, 1);
    }
  }

  applyFilters() {
    this.filteredCoffee = this.coffee.filter(item => {
      const withinPriceRange = item.price <= this.priceRange;
      const inSelectedRegion = this.selectedRegions.length === 0 || this.selectedRegions.includes(item.region);
      return withinPriceRange && inSelectedRegion;
    });
  }
}
