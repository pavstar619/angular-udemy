import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show = true;
  counter = 0;
  counterArr = [];

  toggleParagraph() {
    this.show = !this.show;
    this.counter++;
    this.counterArr.push(this.counter);
  }

  addBlueBg() {
    if (this.counter >= 5) {
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
