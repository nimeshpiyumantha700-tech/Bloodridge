
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
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
        <h1 className="text-2xl font-cinzel mb-8 text-black">PRODUCT NOT FOUND</h1>
        <Link to="/shop" className="underline tracking-widest text-xs uppercase font-cinzel text-black">Back to Shop</Link>
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
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <Link to="/shop" className="inline-flex items-center text-xs tracking-widest text-gray-400 hover:text-black mb-12 transition-colors font-cinzel">
        <ChevronLeft className="w-4 h-4 mr-1" /> BACK TO SHOP
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-gray-50 border border-gray-100 overflow-hidden rounded-3xl shadow-sm">
            <img 
              src={product.images[activeImg]} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)}
                  className={`aspect-[4/5] bg-gray-50 border-2 ${activeImg === i ? 'border-black shadow-md' : 'border-gray-100'} overflow-hidden rounded-xl transition-all`}
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
            <p className="text-red-600 text-xs tracking-[0.3em] font-bold mb-4 uppercase font-cinzel">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold mb-4 tracking-tighter text-black">{product.name}</h1>
            <p className="text-2xl font-cinzel text-black font-bold">${product.price}</p>
          </div>

          <div className="mb-10">
            <h4 className="text-xs tracking-widest font-bold mb-4 font-cinzel text-gray-500">SELECT SIZE</h4>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 flex items-center justify-center border-2 text-xs font-bold tracking-widest transition-all rounded-xl ${
                    selectedSize === size 
                      ? 'bg-black text-white border-black shadow-lg scale-105' 
                      : 'border-gray-100 text-black hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-600 font-medium italic leading-relaxed mb-10 text-lg font-serif">
            {product.description}
          </p>

          <button 
            onClick={handleAddToCart}
            className="w-full py-5 bg-black text-white font-bold tracking-widest text-sm hover:bg-red-600 transition-all flex items-center justify-center group mb-12 rounded-2xl font-cinzel shadow-xl"
          >
            ADD TO BAG <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <Truck className="w-6 h-6 mb-3 text-red-600" />
              <span className="text-[10px] tracking-widest font-bold font-cinzel text-black">EXPRESS SHIPPING</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <RefreshCw className="w-6 h-6 mb-3 text-red-600" />
              <span className="text-[10px] tracking-widest font-bold font-cinzel text-black">EASY RETURNS</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-6 h-6 mb-3 text-red-600" />
              <span className="text-[10px] tracking-widest font-bold font-cinzel text-black">SECURE PAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
