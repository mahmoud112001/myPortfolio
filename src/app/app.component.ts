// ══ APP COMPONENT — with scroll reveal, navbar scroll, and typewriter ══
// File: src/app/app.component.ts
// Replace your existing app.component.ts with this

import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mahmoud-portfolio-v2';

  // Navbar state
  isScrolled = false;
  isMobileMenuOpen = false;

  // Typewriter
  private roles = [
    'Full-Stack Developer',
    'MEARN Stack Engineer',
    'AI App Builder',
    'Angular Developer',
    'React Developer',
  ];
  private currentRoleIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typewriterElement: HTMLElement | null = null;

  ngOnInit(): void {
    // Start scroll reveal observer
    this.initScrollReveal();

    // Start typewriter after slight delay
    setTimeout(() => {
      this.typewriterElement = document.getElementById('typewriter-text');
      this.runTypewriter();
    }, 1500);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  private initScrollReveal(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Observe all .reveal elements
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 100);
  }

  private runTypewriter(): void {
    if (!this.typewriterElement) return;

    const currentRole = this.roles[this.currentRoleIndex];
    const speed = this.isDeleting ? 60 : 110;

    if (!this.isDeleting) {
      // Typing
      this.typewriterElement.textContent = currentRole.slice(0, this.currentCharIndex + 1);
      this.currentCharIndex++;

      if (this.currentCharIndex === currentRole.length) {
        // Pause at end of word
        setTimeout(() => {
          this.isDeleting = true;
          this.runTypewriter();
        }, 2000);
        return;
      }
    } else {
      // Deleting
      this.typewriterElement.textContent = currentRole.slice(0, this.currentCharIndex - 1);
      this.currentCharIndex--;

      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      }
    }

    setTimeout(() => this.runTypewriter(), speed);
  }
}


