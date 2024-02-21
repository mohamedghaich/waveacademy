import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waveac';
  loading: boolean = false;

  fetchData() {
    this.loading = true;
    // Perform data fetching operation
    // Once operation is complete, set loading to false
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
