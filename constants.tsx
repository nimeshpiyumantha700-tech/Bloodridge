
import { Product, Tattoo } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Bloodridge Signature Tee',
    price: 45,
    description: '100% heavyweight cotton. Oversized fit with high-density screen print.',
    images: ['https://picsum.photos/seed/tee1/600/800', 'https://picsum.photos/seed/tee1_back/600/800'],
    category: 'Tees',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'p2',
    name: 'Anarchy Hoodie',
    price: 85,
    description: 'Premium fleece lining. Custom metal hardware. Relaxed drop shoulder silhouette.',
    images: ['https://picsum.photos/seed/hoodie1/600/800'],
    category: 'Hoodies',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'p3',
    name: 'Cyber Sigilism Crop',
    price: 40,
    description: 'Fine knit ribbed cotton. Intricate chest embroidery inspired by tribal aesthetics.',
    images: ['https://picsum.photos/seed/crop1/600/800'],
    category: 'Tees',
    sizes: ['XS', 'S', 'M']
  },
  {
    id: 'p4',
    name: 'Obsidian Beanie',
    price: 30,
    description: 'Double layer knit. Minimalist Bloodridge logo tag.',
    images: ['https://picsum.photos/seed/beanie1/600/800'],
    category: 'Accessories',
    sizes: ['One Size']
  },
  {
    id: 'p5',
    name: 'Vanguard Cargo Jacket',
    price: 150,
    description: 'Water-resistant tech shell. 8-pocket utility system. Custom patches.',
    images: ['https://picsum.photos/seed/jacket1/600/800'],
    category: 'Outerwear',
    sizes: ['M', 'L', 'XL']
  }
];

export const TATTOOS: Tattoo[] = [
  {
    id: 't1',
    title: 'Void Gazer',
    artist: 'Nimesh',
    image: 'https://picsum.photos/seed/tat1/800/1000',
    style: 'Blackwork'
  },
  {
    id: 't2',
    title: 'Neon Ronin',
    artist: 'Piyumantha',
    image: 'https://picsum.photos/seed/tat2/800/1000',
    style: 'Cyberpunk'
  },
  {
    id: 't3',
    title: 'Mechanical Soul',
    artist: 'Nimesh',
    image: 'https://picsum.photos/seed/tat3/800/1000',
    style: 'Realism'
  },
  {
    id: 't4',
    title: 'Fractured Reality',
    artist: 'Vihan',
    image: 'https://picsum.photos/seed/tat4/800/1000',
    style: 'Geometric'
  },
  {
    id: 't5',
    title: 'Ancient Whisper',
    artist: 'Nimesh',
    image: 'https://picsum.photos/seed/tat5/800/1000',
    style: 'Traditional'
  },
  {
    id: 't6',
    title: 'Cyber Sigil Arm Piece',
    artist: 'Piyumantha',
    image: 'https://picsum.photos/seed/tat6/800/1000',
    style: 'Cyberpunk'
  }
];

export const CONTACT_INFO = {
  address: 'No-23, Nisalasewana, Mawadawila, Rathgama',
  phone: '+94 763152724',
  email: 'nimeshpiyumantha700@gmail.com',
};
