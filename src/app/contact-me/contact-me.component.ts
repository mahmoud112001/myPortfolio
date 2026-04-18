// File: src/app/contact-me/contact-me.component.ts
// Replace your existing contact-me.component.ts with this

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  isSubmitting = false;
  formSuccess = false;

  onFormSubmit(event: Event): void {
    const form = event.target as HTMLFormElement;

    // If Formspree ID not set yet, show alert
    if (form.action.includes('YOUR_FORM_ID')) {
      event.preventDefault();
      alert('⚠️ Contact form not configured yet. Please email directly: mahmoudawad112001@gmail.com');
      return;
    }

    // Let Formspree handle the actual submission (no preventDefault)
    this.isSubmitting = true;

    // Show success state after redirect back (or simulate with timeout)
    // For a real SPA, intercept with fetch instead:
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          this.formSuccess = true;
          form.reset();
        } else {
          alert('Something went wrong. Please email me directly: mahmoudawad112001@gmail.com');
        }
      })
      .catch(() => {
        alert('Network error. Please email me directly: mahmoudawad112001@gmail.com');
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}