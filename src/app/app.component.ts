import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>This is fron main app component</h1>
      <router-outlet></router-outlet>
    `,
})
export class AppComponent  {

}
