import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  name = '';
  email = '';
  message = '';

  sendMail(): void {

    const recipient = 'ajayvishnu121@gmail.com';

    const subject =
      `DayVia — Message from ${this.name || 'a user'}`;

    const body = ` Name: ${this.name} Email: ${this.email} Message: ${this.message} `;

    const mailto =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }
}