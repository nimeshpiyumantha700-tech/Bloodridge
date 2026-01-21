
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: 'Tees' | 'Hoodies' | 'Accessories' | 'Outerwear';
  sizes: string[];
}

export interface Tattoo {
  id: string;
  title: string;
  artist: string;
  image: string;
  style: 'Blackwork' | 'Traditional' | 'Realism' | 'Geometric' | 'Cyberpunk';
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface Booking {
  name: string;
  email: string;
  date: string;
  time: string;
  style: string;
  description: string;
}
