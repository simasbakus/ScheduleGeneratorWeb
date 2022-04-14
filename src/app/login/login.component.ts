import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
      <div class="center pad-top">
        <h1>Login</h1>
        <form>
          <div>
            <label></label>
            <input/>
          </div>
          <div>
            <label></label>
            <input/>
          </div>
          <button>Login</button>
        </form>
      </div>
    `,
    styles: [`
      .center { text-align: center }
      .pad-top { padding-top: 5%}
      input { width: 20%; font-size: 20px }
    `]
  })
export class LoginComponent {

}