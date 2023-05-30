import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  isTestimonyActive: boolean = true;
  constructor() {}

  ngOnInit(): void {
    const testimonials = document.querySelectorAll(
      '.testimonial-section .info-box'
    ) as any;
    for (const testimonial of testimonials) {
      testimonial.addEventListener('mousemove', (e: any) => {
        if (!testimonial.classList.contains('first-testimonial')) {
          this.isTestimonyActive = false;
        } else {
          this.isTestimonyActive = true;
        }
      });
      testimonial.addEventListener('mouseout', (e: any) => {
        this.isTestimonyActive = true;
      });
    }
  }
}
