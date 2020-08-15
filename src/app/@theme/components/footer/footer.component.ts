import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    All Rights Reserved - Chronicle Books @ 2020
    </span>
    <div class="socials">
      <a href="https://facebook.com/ChronicleBooks" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/ChronicleBooks" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}
