import { ProductCatalogItem } from '../types';

export const heroImages = {
  boutique: 'assets/images/hero_boutique_1781707371626.jpg',
  garments: 'assets/images/baby_garments_1781707386010.jpg',
  shoesAndBag: 'assets/images/shoes_and_bag_1781707399010.jpg',
};

export const products: ProductCatalogItem[] = [
  {
    id: 'c1',
    name: 'Ajuar de Nacimiento Premium',
    category: 'clothing',
    brand: "L'elefantino",
    description: 'Ajuar de bienvenida confeccionado en algodón pima. Incluye batita, ranita, gorrito, babitas y manta de algodón doble faz.',
    sizes: ['RN', '1-3M'],
    features: ['Algodón hipoalergénico', 'Costuras planas', 'Tonos pastel'],
    tag: 'Primer ajuar',
  },
  {
    id: 'c2',
    name: 'Vestido Reino Mora',
    category: 'clothing',
    brand: 'Reino Mora',
    description: 'Vestido infantil con detalles artesanales, pensado para eventos, cumpleaños y ocasiones especiales.',
    sizes: ['3-6M', '9-12M', '18-24M', '3 años', '4 años'],
    features: ['Bordado artesanal', 'Botones delicados', 'Algodón prelavado'],
    tag: 'Colección de autor',
  },
  {
    id: 'c3',
    name: 'Conjunto de Abrigo',
    category: 'clothing',
    brand: 'Brotecitos',
    description: 'Saco tejido y pantalón al tono, suave para los primeros meses del bebé.',
    sizes: ['Prematuro', 'RN', '1-3M', '3-6M'],
    features: ['Tejido suave', 'Broches reforzados', 'Abrigo intermedio'],
  },
  {
    id: 'f1',
    name: 'Zapatitos No Caminantes',
    category: 'footwear',
    brand: 'Calzado propio',
    description: 'Zapatitos blandos con suela antideslizante para acompañar los primeros movimientos.',
    sizes: ['14', '15', '16', '17'],
    features: ['Suela blanda', 'Velcro regulable', 'Horma cómoda'],
    tag: 'No caminantes',
  },
  {
    id: 'f2',
    name: 'Zapatilla Urbana Caminante',
    category: 'footwear',
    brand: 'Gepetto',
    description: 'Zapatilla infantil reforzada, flexible y cómoda para los primeros pasos firmes.',
    sizes: ['18', '20', '22', '24', '26'],
    features: ['Punta reforzada', 'Plantilla acolchada', 'Buena tracción'],
  },
  {
    id: 'l1',
    name: 'Juego de Sábanas de Cuna',
    category: 'linen',
    brand: 'Blanquería artesanal',
    description: 'Set de tres piezas en algodón suave para moisés, catre o cuna funcional.',
    sizes: ['Moisés', 'Cuna charriot', 'Cuna funcional'],
    features: ['Algodón puro', 'Lavado fácil', 'Bordados delicados'],
  },
  {
    id: 'b1',
    name: 'Bolso Maternal Premium',
    category: 'bags',
    brand: 'Maternal Premium',
    description: 'Bolso maternal resistente e impermeable, con espacio para cambiador, mamaderas y accesorios.',
    sizes: ['22 litros'],
    features: ['Incluye cambiador', 'Bolsillos térmicos', 'Ganchos para cochecito'],
    tag: 'Más buscado',
  },
];

export const brands = ['Reino Mora', "L'elefantino", 'Gepetto', 'Brotecitos', 'Cari'];

export const stages = [
  { label: 'Prematuro', clothingSize: '000 / Prematuro', shoeSize: '14 - 15', note: 'Prendas suaves con costuras planas.' },
  { label: 'Recién nacido', clothingSize: '00 / RN', shoeSize: '14 - 15', note: 'Bodies, batitas y ajuares fáciles de cambiar.' },
  { label: '1 a 3 meses', clothingSize: '3M', shoeSize: '15 - 16', note: 'Más libertad de movimiento y telas respirables.' },
  { label: '3 a 6 meses', clothingSize: '6M', shoeSize: '16 - 17', note: 'Ideal para etapa de giro y juego en el piso.' },
  { label: '6 a 12 meses', clothingSize: '9M - 12M', shoeSize: '17 - 18', note: 'Gateo, abrigo liviano y calzado antideslizante.' },
  { label: '12 a 18 meses', clothingSize: '18M', shoeSize: '18 - 20', note: 'Primeros pasos con calzado flexible.' },
  { label: '2 a 3 años', clothingSize: '3 / 4', shoeSize: '22 - 23', note: 'Prendas resistentes para jardín y paseos.' },
  { label: '4 a 5 años', clothingSize: '4 / 5', shoeSize: '23 - 24', note: 'Conjuntos cómodos para jugar todo el día.' },
  { label: '7 a 8 años', clothingSize: '8', shoeSize: '25 - 26', note: 'Última curva de talles disponible en el local.' },
];
