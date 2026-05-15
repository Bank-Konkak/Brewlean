import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BrewLeanLanding() {
  return (
    <div className="min-h-screen bg-[#f4eddf] font-sans text-[#5a3d21]">
      {/* --- 1. NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-[#f4eddf]/80 backdrop-blur-md z-50 border-b border-[#d2b595]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#5a3d21] rounded-full flex items-center justify-center">
              <span className="text-[#f4eddf] font-bold">B</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-[#5a3d21]">
              BlayBlay
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5a3d21]/70">
            <a
              href="#"
              className="text-[#ab7a44] border-b-2 border-[#ab7a44] pb-1"
            >
              หน้าหลัก
            </a>
            <a href="#" className="hover:text-[#ab7a44] transition-colors">
              เมนู
            </a>
            <a href="#" className="hover:text-[#ab7a44] transition-colors">
              เกี่ยวกับเรา
            </a>
            <a href="#" className="hover:text-[#ab7a44] transition-colors">
              ช่องทางติดต่อ
            </a>
          </div>
          <Button className="bg-[#5a3d21] hover:bg-[#3d2916] text-[#f4eddf] rounded-xl px-6">
            Order Now
          </Button>
        </div>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 bg-[#d2b595]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <p className="text-[#ab7a44] font-semibold mb-4 tracking-widest uppercase text-sm">
              Welcome to Brewlean ☕
            </p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-[1.1] text-[#5a3d21]">
              Specialty Coffee, <br />
              <span className="italic font-light text-[#ab7a44] font-serif">
                Very Common
              </span>
            </h1>
            <p className="text-lg text-[#5a3d21]/80 mb-8 max-w-lg leading-relaxed">
              Brewlean คือคาเฟ่แถวบ้านอันแสนอบอุ่นของคุณ
              พร้อมเสิร์ฟเครื่องดื่มที่รังสรรค์ขึ้นอย่างพิถีพิถันจากเมล็ดกาแฟคุณภาพดี
              พร้อมความรู้สึกดีๆ
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-2 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80"
                alt="Main Drink"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-6 bg-white text-[#5a3d21] w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <span>←</span>
            </div>
            <div className="absolute top-1/2 -right-6 bg-white text-[#5a3d21] w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED DRINKS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-[#ab7a44] font-bold mb-2">OUR FAVORITES 🌿</p>
            <h2 className="text-4xl font-bold text-[#5a3d21]">เมนูแนะนำ</h2>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-[#d2b595] text-[#5a3d21] hover:bg-[#d2b595]/20"
          >
            ดูเมนูทั้งหมด <span className="ml-1 text-xs">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "ซัมเมอร์เฟรส",
              price: "2.14",
              img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500",
            },
            {
              name: "บูสเตอร์",
              price: "2.30",
              img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500",
            },
            {
              name: "รูบี้เจลลี่ โคลด์บริว",
              price: "2.45",
              img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500",
            },
            {
              name: "แซสซี่ เกิร์ล",
              price: "2.45",
              img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="border-none bg-white/50 rounded-3xl overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-1 text-[#5a3d21]">
                  {item.name}
                </h3>
                <p className="text-sm text-[#5a3d21]/60 mb-4">
                  Signature Coffe Menu.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#ab7a44] font-bold text-lg">
                    ${item.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --- 4. ABOUT SECTION --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto bg-[#d2b595]/30 rounded-[3rem] overflow-hidden grid md:grid-cols-2">
          <div className="h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <p className="text-[#ab7a44] font-bold mb-2">OUR STORY ☕</p>
            <h2 className="text-4xl font-bold mb-6 leading-tight text-[#5a3d21]">
              Brewed with Passion, <br />
              <span className="italic text-[#ab7a44] font-serif">
                Served with Heart.
              </span>
            </h2>
            <p className="text-[#5a3d21]/80 mb-8 leading-relaxed">
              Brewlean started with a simple belief: great coffee should be part
              of everyday life. We combine quality beans with a welcoming space.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  🌿
                </div>
                <div>
                  <p className="font-bold text-[#5a3d21]">
                    Quality Ingredients
                  </p>
                  <p className="text-sm text-[#5a3d21]/60">
                    We source only the best beans.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  ✨
                </div>
                <div>
                  <p className="font-bold text-[#5a3d21]">Crafted with Care</p>
                  <p className="text-sm text-[#5a3d21]/60">
                    Every cup is brewed with precision.
                  </p>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-fit rounded-full border-[#5a3d21] text-[#5a3d21] hover:bg-[#5a3d21] hover:text-[#f4eddf] py-6 px-8 transition-all"
            >
              Learn More About Us <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer className="bg-white/50 border-t border-[#d2b595]/20 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#5a3d21] rounded-full flex items-center justify-center text-[#f4eddf] font-bold text-xs">
                B
              </div>
              <span className="text-xl font-bold text-[#5a3d21]">BlayBlay</span>
            </div>
            <p className="text-[#5a3d21]/60 text-sm leading-relaxed">
              Specialty coffee, very common. Made for your everyday moments.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#5a3d21]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#5a3d21]/60">
              <li>
                <a href="#" className="hover:text-[#ab7a44]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ab7a44]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ab7a44]">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#5a3d21]">Hours</h4>
            <ul className="space-y-2 text-sm text-[#5a3d21]/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span> <span>7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-[#ab7a44] font-medium">
                <span>Sat - Sun</span> <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#5a3d21]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[#5a3d21]/60">
              <li className="flex items-center gap-2">
                <span>📞</span> +63 912 345 6789
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span> 123 Coffee Lane, Country
              </li>
            </ul>
            <div className="flex gap-4 mt-6 grayscale opacity-70">
              <span className="cursor-pointer hover:grayscale-0 hover:text-[#ab7a44] transition-all text-sm">
                📸 Instagram
              </span>
              <span className="cursor-pointer hover:grayscale-0 hover:text-[#ab7a44] transition-all text-sm">
                🔵 Facebook
              </span>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-[#5a3d21]/40 border-t border-[#d2b595]/10 pt-8">
          © 2026 BlayBlay. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
