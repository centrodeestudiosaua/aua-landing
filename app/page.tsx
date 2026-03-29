import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Search, Check, Scale, BookOpen, Users, Gavel, Laptop, Briefcase } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const featuredPrograms = [
  {
    id: "diplomado-en-amparo",
    slug: "diplomado-en-amparo",
    title: "Diplomado en Amparo",
    description:
      "Programa insignia de AUA con enfoque practico para abogadas y abogados que buscan dominar la tecnica del amparo en el ejercicio profesional contemporaneo.",
    thumbnail_url: "/diplomadodeamparo.png",
  },
];


export const metadata = {
  title: "Centro de Estudios AUA | Formación Jurídica de Alto Nivel",
  description: "Institución educativa para Abogados Postulantes. Especialización 100% práctica en el Diplomado en Amparo. Cursos y Diplomados Online.",
  keywords: ["Amparo", "Cursos para Abogados", "Diplomados Derecho", "AUA", "Centro de Estudios AUA", "Abogados Postulantes"],
  openGraph: {
    title: "Centro de Estudios AUA | Formación Jurídica de Alto Nivel",
    description: "Institución educativa para Abogados Postulantes. Especialización 100% práctica en el Diplomado en Amparo.",
    url: "https://www.centrodeestudiosaua.com",
    siteName: "Centro de Estudios AUA",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6oisHnxLKXk4l9jlG0ba7lfdEcCGlbejK2YlO_oNVY_bI33wcz6rpVVKQQ-AaaDakrjfphspnVnD8uf3jYTeZOJFs97LYd9bz4xgReWuX-DrOooxT8g88PMwtrzRN6w3sFC9O6dPxkKi2_fGPITr20oUBnOiuXoatNCu-onyRAhHqfGv2oeuUsA1g62BqebToXzCHHWrJuGLJU5nc4tdYXJEl8IDhqfY04j89L2A-osM6I2gvQZXNESJvdXOnrFFfyU8gmMnTHmNO",
        width: 1200,
        height: 630,
        alt: "Centro de Estudios AUA",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.centrodeestudiosaua.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
      {/* Top Bar */}
      <div className="bg-urgent-red text-white text-[10px] md:text-xs font-bold py-2 px-6 text-center uppercase tracking-widest relative z-[60]">
        INSCRIPCIONES ABIERTAS
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6oisHnxLKXk4l9jlG0ba7lfdEcCGlbejK2YlO_oNVY_bI33wcz6rpVVKQQ-AaaDakrjfphspnVnD8uf3jYTeZOJFs97LYd9bz4xgReWuX-DrOooxT8g88PMwtrzRN6w3sFC9O6dPxkKi2_fGPITr20oUBnOiuXoatNCu-onyRAhHqfGv2oeuUsA1g62BqebToXzCHHWrJuGLJU5nc4tdYXJEl8IDhqfY04j89L2A-osM6I2gvQZXNESJvdXOnrFFfyU8gmMnTHmNO')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-transparent md:bg-[linear-gradient(105deg,#1a1a35_55%,rgba(26,26,53,0.85)_55%,rgba(26,26,53,0.4)_100%)]"></div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <div className="max-w-2xl border-l-4 border-urgent-red pl-6 md:pl-10 py-2">
            <span className="text-urgent-red font-bold tracking-widest uppercase text-sm mb-4 block">Formación de Vanguardia</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Creamos<br />oportunidades<br />para el éxito<br />jurídico.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed">
              Especialízate con los líderes del sector legal. Programas diseñados para la práctica jurídica contemporánea.
            </p>
            <button className="bg-cta-orange hover:bg-[#c04d03] text-white text-sm md:text-base font-bold uppercase tracking-wider px-8 py-4 rounded shadow-lg shadow-orange-900/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group">
              Explora nuestra oferta académica <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-6 text-xs text-slate-500 italic">Ofrecidos por el Centro de Estudios Jurídicos AUA, A.C.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-deep border-b border-navy-border relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-border/50 py-8 md:py-10">
            <div className="flex flex-col items-center justify-center text-center px-4 group">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">2024</span>
              <span className="text-[10px] md:text-xs text-primary uppercase tracking-widest font-semibold">Año de Fundación</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 group">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">100%</span>
              <span className="text-[10px] md:text-xs text-primary uppercase tracking-widest font-semibold">Online & Flexible</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 group">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Expertos</span>
              <span className="text-[10px] md:text-xs text-primary uppercase tracking-widest font-semibold">Abogados Postulantes</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4 group">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">Nacional</span>
              <span className="text-[10px] md:text-xs text-primary uppercase tracking-widest font-semibold">Cobertura México</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-navy-card py-10 border-b border-navy-border shadow-inner">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                className="w-full pl-12 pr-4 py-3 bg-navy-deep border border-navy-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white placeholder-slate-500 shadow-sm transition-all"
                placeholder="Buscar especialización..."
                type="text"
              />
            </div>
            <div className="relative">
              <select className="w-full md:w-48 py-3 px-4 bg-navy-deep border border-navy-border rounded-md focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm text-white shadow-sm cursor-pointer appearance-none">
                <option>Todas las áreas</option>
                <option>Diplomado en Amparo</option>
              </select>
              {/* Custom arrow could go here */}
            </div>
            <button className="bg-primary hover:bg-white text-navy-deep font-bold uppercase tracking-wider px-8 py-3 rounded-md transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
              Filtrar Cursos
            </button>
          </div>
        </div>
      </section>

      {/* Methodology / About Section - Bento Grid Restored */}
      <section id="metodologia" className="bg-navy-card py-20 md:py-28 overflow-hidden border-b border-navy-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Visual Side (Bento Grid) */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
              <div className="aspect-square bg-navy-deep rounded-2xl p-6 md:p-8 flex flex-col justify-end shadow-lg transform hover:-translate-y-2 transition-transform duration-300 border border-navy-border group">
                <span className="text-3xl md:text-5xl font-bold text-primary block mb-2 group-hover:scale-105 transition-transform">2024</span>
                <span className="text-slate-400 text-[10px] md:text-xs uppercase tracking-widest font-semibold">Fundación</span>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform translate-y-8 md:translate-y-12 border border-navy-border group">
                <img
                  alt="Firma Legal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkW0RsjTMotxVxY9qin3WGEmhqZU_BxcWL7prnxIeUEbW1_IA9IfrsGYiPGUBxPD113L4fB_D5FkHQZxH1I9pLjHFMuTmf81xiwHnNFIBwEXNp1I-M4oZ_2C6vc1fU3CvFMLjm1eZGGswvfb9mEXtCROjCDo6ZPj5UoYiafvADKfv97DOa_sBdY9yfphfKeBkio5yXmvX0UDf786uHonZ2Q4cW_O_EqMPtSyNqrCyvmn7ZUQQ-MQVU3pIYQNICVsn6N6UU59pnv4uT"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg -translate-y-8 md:-translate-y-12 z-10 border border-navy-border group">
                <img
                  alt="Justicia y Equidad"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                />
              </div>
              <div className="aspect-square bg-primary rounded-2xl p-6 md:p-8 flex flex-col justify-end shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group">
                <span className="text-3xl md:text-5xl font-bold text-navy-deep block mb-2 group-hover:scale-105 transition-transform">100%</span>
                <span className="text-navy-deep/80 text-[10px] md:text-xs uppercase tracking-widest font-bold">Práctico</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-white space-y-8">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] block">Sobre Nosotros</span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6">
                Formación de excelencia con <span className="text-primary">Centro de Estudios AUA, AC.</span>
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
                <p>
                  El <strong className="text-white font-medium">Centro de Estudios AUA, A.C.</strong> es una institución educativa creada por y para <span className="text-white">Abogados Postulantes</span> que buscan especialización práctica en el Diplomado en Amparo.
                </p>
                <p>
                  Nuestros Cursos y Diplomados están diseñados para responder a las necesidades reales del ejercicio profesional. Fundado en <strong className="text-white font-medium">julio de 2024 en Tijuana, Baja California</strong>, por Abogados con destacada trayectoria, nuestro objetivo es brindar formación de alta calidad a Catedráticos, Integrantes del Poder Judicial, y miembros de Colegios y Barras de Abogados.
                </p>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary/20 rounded-full p-1 group-hover:bg-primary/30 transition-colors">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">Modalidad Online</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Formación accesible desde cualquier parte de México, sin interrumpir tu práctica.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a className="bg-navy-deep border border-navy-border text-white text-sm font-bold uppercase tracking-wider px-8 py-3 rounded hover:bg-primary hover:text-navy-deep hover:border-primary transition-all shadow-lg inline-flex items-center gap-2 group" href="/cursos/diplomado-en-amparo">
                  Ver Oferta Académica <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features / Icons Section */}
      <section id="claustro" className="bg-navy-deep py-20 border-b border-navy-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-card/50 via-navy-deep to-navy-deep pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">

            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-6 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-navy-card border border-navy-border flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20 group-hover:scale-110">
                <Gavel className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors">Docentes de Prestigio</h3>
                <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">
                  Impartido por Jueces, Magistrados y Abogados Postulantes que dominan a profundidad sus materias.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-6 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-navy-card border border-navy-border flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20 group-hover:scale-110">
                <Laptop className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors">100% Online</h3>
                <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">
                  Modalidad flexible que te permite adaptar tu formación a tus horarios sin sacrificar calidad.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-6 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-navy-card border border-navy-border flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20 group-hover:scale-110">
                <Briefcase className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors">Enfoque Práctico</h3>
                <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">
                  Aprendizaje basado en casos reales, simulaciones y ejercicios aplicables a tu ejercicio profesional.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center space-y-6 group">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-navy-card border border-navy-border flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/20 group-hover:scale-110">
                <Scale className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
              </div>
              <div className="space-y-3 px-2">
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-primary transition-colors">Alta Especialización</h3>
                <p className="text-slate-400 text-xs lg:text-sm leading-relaxed">
                  Enfoque exclusivo en formación jurídica avanzada, con especial énfasis en el Diplomado en Amparo.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="programas" className="py-20 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            {featuredPrograms.map((course) => (
              <div key={course.id} className="group relative bg-navy-card/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-navy-border hover:border-primary/40 transition-all duration-500 shadow-2xl flex flex-col md:flex-row w-full min-h-[450px]">
                {/* Visual Side */}
                <div className="md:w-5/12 relative overflow-hidden h-72 md:h-auto">
                  {course.slug === 'diplomado-en-amparo' ? (
                    <img
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                      src="/diplomadodeamparo.png"
                    />
                  ) : course.thumbnail_url ? (
                    <img
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                      src={course.thumbnail_url}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy-card to-navy-deep flex items-center justify-center">
                      <BookOpen className="h-24 w-24 text-primary/20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/20 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-primary text-navy-deep text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg z-10">
                    {course.slug === 'diplomado-en-amparo' ? 'Matrícula Abierta' : 'Próximamente'}
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center space-y-6 relative">
                  <div className="space-y-3">
                    <span className="text-primary/70 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] block">Programa de Especialización Avanzada</span>
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
                      {course.title.toLowerCase().includes('compliance') ? 'Diplomado en Compliance Laboral' : course.title.replace(/\s*\(?Demo\)?/ig, '')}
                    </h4>
                  </div>
                  
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light line-clamp-4 max-w-2xl">
                    {course.description?.replace(/<[^>]*>/g, '') || 'Programa de especialización jurídica de alto nivel diseñado para el éxito profesional.'}
                  </p>

                  <div className="pt-6 border-t border-navy-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-auto">
                    <div className="flex flex-col space-y-1">
                      <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Solicita Información</span>
                      <span className="text-white font-bold text-base md:text-lg leading-tight">
                        Programa, Costos y Promociones
                      </span>
                    </div>
                    
                    <Link 
                      href={`/cursos/${course.slug}`} 
                      className="bg-primary hover:bg-white text-navy-deep font-bold uppercase tracking-widest px-8 py-4 rounded transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-primary/20 flex items-center gap-2 w-full sm:w-auto justify-center text-xs"
                    >
                      Ver Programa <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
