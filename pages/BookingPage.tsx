
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, FileText, Send, CheckCircle2 } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    style: 'Blackwork',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-white">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 animate-bounce shadow-sm">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-6 text-black">BOOKING RECEIVED</h1>
        <p className="text-gray-500 max-w-lg mb-12 text-lg italic font-serif">
          Our manager will contact you via email within 24 hours to confirm your session and discuss the design in detail.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="px-10 py-4 bg-black text-white hover:bg-red-600 transition-all font-bold tracking-widest uppercase text-xs rounded-2xl font-cinzel shadow-lg"
        >
          BOOK ANOTHER SESSION
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-red-600 font-cinzel text-sm mb-4 tracking-[0.5em] font-bold uppercase">Reservation</h2>
          <h1 className="text-5xl md:text-7xl font-cinzel font-black mb-10 leading-none text-black">RESERVE A SLOT</h1>
          <p className="text-gray-600 text-lg mb-12 font-medium italic leading-relaxed font-serif">
            Bloodridge sessions are highly exclusive. Secure your time with our world-class artists. A deposit may be required after initial consultation.
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 border border-gray-100 flex items-start space-x-6 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <Calendar className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-1 font-cinzel text-black">FLEXIBLE DATES</h4>
                <p className="text-sm text-gray-500 italic">Pick a day that works. We operate Tuesday - Sunday, 10 AM to 8 PM.</p>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-100 flex items-start space-x-6 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                <User className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-1 font-cinzel text-black">EXPERT ARTISTS</h4>
                <p className="text-sm text-gray-500 italic">Nimesh, Piyumantha, and Vihan are available for custom commission work.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-100 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-400 flex items-center font-cinzel">
                  <User className="w-3 h-3 mr-2" /> FULL NAME
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic"
                  placeholder="EX: JOHN DOE"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-400 flex items-center font-cinzel">
                  <Mail className="w-3 h-3 mr-2" /> EMAIL ADDRESS
                </label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic"
                  placeholder="EX: JOHN@EXAMPLE.COM"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-400 flex items-center font-cinzel">
                  <Calendar className="w-3 h-3 mr-2" /> PREFERRED DATE
                </label>
                <input 
                  required
                  type="date" 
                  className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic"
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest font-bold text-gray-400 flex items-center font-cinzel">
                  <Clock className="w-3 h-3 mr-2" /> PREFERRED TIME
                </label>
                <select 
                  className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic"
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                >
                  <option value="">SELECT TIME</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-400 font-cinzel">TATTOO STYLE</label>
              <div className="flex flex-wrap gap-2">
                {['Blackwork', 'Realism', 'Cyberpunk', 'Geometric', 'Traditional'].map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFormData({...formData, style: s})}
                    className={`px-4 py-2 text-[10px] font-bold tracking-widest border-2 transition-all rounded-xl font-cinzel ${
                      formData.style === s 
                        ? 'bg-black text-white border-black shadow-md scale-105' 
                        : 'bg-white border-gray-100 text-black hover:border-black'
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-400 flex items-center font-cinzel">
                <FileText className="w-3 h-3 mr-2" /> DESIGN DESCRIPTION / NOTES
              </label>
              <textarea 
                rows={4}
                className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all resize-none rounded-2xl font-serif italic"
                placeholder="DESCRIBE YOUR IDEA, PLACEMENT, AND SIZE..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-black text-white font-bold tracking-widest text-sm hover:bg-red-600 transition-all flex items-center justify-center group rounded-2xl font-cinzel shadow-xl"
            >
              SUBMIT RESERVATION <Send className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
