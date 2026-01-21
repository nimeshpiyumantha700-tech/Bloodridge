
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { ShoppingBag, ChevronLeft, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface Props {
  addToCart: (product: Product, size: string) => void;
}

const ProductDetailPage: React.FC<Props> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImg, setActiveImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-syncopate mb-8">PRODUCT NOT FOUND</h1>
        <Link to="/shop" className="underline tracking-widest text-xs uppercase">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <Link to="/shop" className="inline-flex items-center text-xs tracking-widest text-gray-500 hover:text-white mb-12 transition-colors">
        <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO SHOP
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-zinc-900 border border-white/5 overflow-hidden">
            <img 
              src={product.images[activeImg]} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)}
                  className={`aspect-[4/5] bg-zinc-900 border ${activeImg === i ? 'border-white' : 'border-white/5'} overflow-hidden`}
                >
                  <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover grayscale" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-10">
            <p className="text-red-500 text-xs tracking-[0.3em] font-bold mb-4 uppercase">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-syncopate font-bold mb-4 tracking-tighter">{product.name}</h1>
            <p className="text-2xl font-syncopate text-white">${product.price}</p>
          </div>

          <div className="mb-10">
            <h4 className="text-xs tracking-widest font-bold mb-4">SELECT SIZE</h4>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 flex items-center justify-center border text-xs font-bold tracking-widest transition-all ${
                    selectedSize === size 
                      ? 'bg-white text-black border-white' 
                      : 'border-white/20 text-white hover:border-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
            {product.description}
          </p>

          <button 
            onClick={handleAddToCart}
            className="w-full py-5 bg-white text-black font-bold tracking-widest text-sm hover:bg-red-500 hover:text-white transition-all flex items-center justify-center group mb-12"
          >
            ADD TO BAG <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 mb-3 text-gray-500" />
              <span className="text-[10px] tracking-widest font-bold">EXPRESS SHIPPING</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="w-6 h-6 mb-3 text-gray-500" />
              <span className="text-[10px] tracking-widest font-bold">EASY RETURNS</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-6 h-6 mb-3 text-gray-500" />
              <span className="text-[10px] tracking-widest font-bold">SECURE PAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
