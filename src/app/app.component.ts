import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { brands, heroImages, products, stages } from './content';
import { business, navLinks, storeHours } from '../data/site';

type Category = 'all' | 'clothing' | 'footwear' | 'linen' | 'bags';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly business = business;
  protected readonly navLinks = navLinks;
  protected readonly storeHours = storeHours;
  protected readonly heroImages = heroImages;
  protected readonly products = products;
  protected readonly brands = brands;
  protected readonly stages = stages;
  protected readonly tabs: { id: Category; label: string }[] = [
    { id: 'all', label: 'Todo' },
    { id: 'clothing', label: 'Ropa' },
    { id: 'footwear', label: 'Calzado' },
    { id: 'linen', label: 'Blanquería' },
    { id: 'bags', label: 'Bolsos' },
  ];

  protected mobileMenuOpen = signal(false);
  protected activeTab = signal<Category>('all');
  protected selectedStageIndex = signal(1);
  protected selectedProduct = signal('');
  protected name = '';
  protected age = '';
  protected interest = 'general';
  protected message = '';

  protected filteredProducts = computed(() => {
    const tab = this.activeTab();
    return tab === 'all' ? this.products : this.products.filter((product) => product.category === tab);
  });

  protected currentStage = computed(() => this.stages[this.selectedStageIndex()]);

  protected selectProduct(productName: string): void {
    this.selectedProduct.set(productName);
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  protected clearProduct(): void {
    this.selectedProduct.set('');
  }

  protected copyAddress(): void {
    void navigator.clipboard.writeText(this.business.address);
  }

  protected sendWhatsApp(): void {
    const productText = this.selectedProduct() || this.interest;
    const text = `Hola ${this.business.owner}! Mi nombre es ${this.name || 'un cliente'}.\n\nQuería consultar por ${productText}.\nEdad o talle aproximado: ${this.age || 'no especificado'}.\n${this.message ? `\nDetalle: ${this.message}\n` : ''}\n¿Me podrías comentar disponibilidad? Muchas gracias.`;
    window.open(`https://wa.me/${this.business.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }
}
