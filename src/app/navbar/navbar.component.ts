

// ══ NAVBAR COMPONENT ═══════════════════════════════════════════════
// File: src/app/navbar/navbar.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() isScrolled = false;
  @Input() isMobileMenuOpen = false;
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() closeMenu = new EventEmitter<void>();

  onToggle(): void {
    this.toggleMenu.emit();
  }

  onClose(): void {
    this.closeMenu.emit();
  }
}