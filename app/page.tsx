import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BrewLeanLanding() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- 1. NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter">
              Brew Lean
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="text-orange-600 border-b-2 border-orange-600 pb-1">Home</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Menu</a>
            <a href="#" className="hover:text-orange-600 transition-colors">About</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Gallery</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Contact</a>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700 rounded-xl px-6">
            Order Now
          </Button>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 bg-[#FDF8ED] overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <p className="text-orange-600 font-semibold mb-4 tracking-widest uppercase text-sm">
              Welcome to Brew Lean ☕
            </p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Specialty Coffee, <br />
              <span className="italic font-light text-orange-600 font-serif">
                Very Common
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Brew Lean is your cozy neighborhood café serving thoughtfully
              crafted drinks made from quality beans and good vibes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-lg py-7 px-8 rounded-full shadow-lg shadow-orange-200 group">
                Order Your Favorite <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="ghost" className="text-lg py-7 px-8 rounded-full hover:bg-white/50">
                <span className="mr-2 text-orange-600">▶</span> Watch Our Story
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <img
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80"
                alt="Main Drink"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Navigation Arrows (Emoji) */}
            <div className="absolute top-1/2 -left-6 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <span>←</span>
            </div>
            <div className="absolute top-1/2 -right-6 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED DRINKS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-orange-600 font-bold mb-2">OUR FAVORITES 🌿</p>
            <h2 className="text-4xl font-bold">Featured Drinks</h2>
          </div>
          <Button variant="outline" className="rounded-full border-slate-200">
            View Full Menu <span className="ml-1 text-xs">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Iced Latte", price: "3.75", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500" },
            { name: "Matcha Latte", price: "4.25", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500" },
            { name: "Black Coffee", price: "2.50", img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500" },
            { name: "Signature Latte Art", price: "4.25", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500" },
          ].map((item, i) => (
            <Card key={i} className="border-none bg-slate-50/50 rounded-3xl overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                <p className="text-sm text-slate-500 mb-4">Smooth espresso with steamed milk.</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-bold text-lg">${item.price}</span>
                  <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 hover:text-white transition-colors">
                    <span className="text-xl">+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- 4. ABOUT SECTION --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-[#FDF8ED] rounded-[3rem] overflow-hidden grid md:grid-cols-2">
          <div className="h-full min-h-[400px]">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800" className="w-full h-full object-cover" />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <p className="text-orange-600 font-bold mb-2">OUR STORY ☕</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Brewed with Passion, <br />
              <span className="italic text-orange-600 font-serif">Served with Heart.</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Brew Lean started with a simple belief: great coffee should be
              part of everyday life. We combine quality beans with a welcoming space.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">🌿</div>
                <div>
                  <p className="font-bold">Quality Ingredients</p>
                  <p className="text-sm text-slate-500">We source only the best beans.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">✨</div>
                <div>
                  <p className="font-bold">Crafted with Care</p>
                  <p className="text-sm text-slate-500">Every cup is brewed with precision.</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-fit rounded-full border-orange-600 text-orange-600 py-6 px-8">
              Learn More About Us <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs">B</div>
              <span className="text-xl font-bold">Brew Lean</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Specialty coffee, very common. Made for your everyday moments.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-orange-600">Home</a></li>
              <li><a href="#" className="hover:text-orange-600">Menu</a></li>
              <li><a href="#" className="hover:text-orange-600">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Hours</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>7:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between text-orange-600 font-medium"><span>Sat - Sun</span> <span>8:00 AM - 6:00 PM</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-2"><span>📞</span> +63 912 345 6789</li>
              <li className="flex items-center gap-2"><span>📍</span> 123 Coffee Lane, Country</li>
            </ul>
            <div className="flex gap-4 mt-6 grayscale opacity-70">
              <span className="cursor-pointer hover:grayscale-0 transition-all">📸 Instagram</span>
              <span className="cursor-pointer hover:grayscale-0 transition-all">🔵 Facebook</span>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-slate-400 border-t border-slate-50 pt-8">
          © 2026 Brew Lean. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
