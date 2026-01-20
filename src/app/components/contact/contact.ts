import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { response } from 'express';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  isSubmitted = false;
  senderName = '';
  private fb = inject(FormBuilder);

  // Define the form structure
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.senderName = this.contactForm.value.name;

      // Send the data to Formspree
      fetch('https://formspree.io/f/xojjjekg', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          this.isSubmitted = true;
          this.contactForm.reset();
        } else {
          alert('Oops! There was a problem sending your message.');
        }
      });
    }
  }

  get formattedName() {
    return this.senderName.charAt(0).toUpperCase() + this.senderName.slice(1);
  }
}
