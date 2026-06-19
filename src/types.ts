export interface Brand {
  id: string;
  name: string;
  description: string;
  badge?: string;
  style: string;
}

export interface ProductCatalogItem {
  id: string;
  name: string;
  category: 'clothing' | 'footwear' | 'linen' | 'bags';
  brand?: string;
  description: string;
  priceEstimate?: string;
  sizes: string[];
  features: string[];
  tag?: string;
}

export interface SizeRecommendation {
  clothingSize: string;
  shoeSize: string;
  shoeType: 'No Caminante (con Antideslizante)' | 'Caminante' | 'No caminante / Caminante' | 'No aplica';
  notes: string;
}
