import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/marketing/ContactForm";
import Image from "next/image";
import { Metadata } from 'next';
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Contacto y Ubicación | Centro de Estudios AUA",
    description: "Contáctanos para más información sobre nuestros Cursos y Diplomados en Derecho. Sede Tijuana y atención en línea. Tel: 664-800-00-11.",
    openGraph: {
        title: "Contacto | Centro de Estudios AUA",
        description: "Agenda tu visita o solicita información sobre nuestra oferta académica en Derecho.",
        url: "https://www.centrodeestudiosaua.com/contacto",
        siteName: "Centro de Estudios AUA",
        images: [
            {
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6oisHnxLKXk4l9jlG0ba7lfdEcCGlbejK2YlO_oNVY_bI33wcz6rpVVKQQ-AaaDakrjfphspnVnD8uf3jYTeZOJFs97LYd9bz4xgReWuX-DrOooxT8g88PMwtrzRN6w3sFC9O6dPxkKi2_fGPITr20oUBnOiuXoatNCu-onyRAhHqfGv2oeuUsA1g62BqebToXzCHHWrJuGLJU5nc4tdYXJEl8IDhqfY04j89L2A-osM6I2gvQZXNESJvdXOnrFFfyU8gmMnTHmNO",
                width: 1200,
                height: 630,
                alt: "Centro de Estudios AUA Contacto",
            },
        ],
        locale: "es_MX",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep flex flex-col">
            {/* Top Bar */}
            <div className="bg-urgent-red text-white text-[10px] md:text-xs font-bold py-2 px-6 text-center uppercase tracking-widest relative z-[60]">
                Inscripciones abiertas para el ciclo 2026. ¡Agenda tu visita hoy!
            </div>
            <Header />

            <div className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-80px)] relative">

                {/* Visual Side (Left) */}
                <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-auto relative bg-navy-dark overflow-hidden group">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAEZ6pbmLgjIY3ryxhDDLm1PpNSFaww4TNe5Oj4dz10PiRwDXnCto5A7TYx8Xpa-zN31BHCGm1V_zq2zcQ5IDYOj0cSZ_j9E6SX2oC6hAtEvW0vUbkS-JvMiZqEE06sv0cgpEZasdYJqVsfTYmo-clRq08V4bxez5LjUI6-1yu4oi41Korvsl4R8v8ZzbxifIfrVjchim0kD8fY2SqU1zDFL5R0ssHP9RV49Ar-eJZuX_di-1DZ1mbIuvJLEpCjju47-ssnFSTyhd_"
                            alt="Luxury Office"
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/40 via-navy-deep/20 to-navy-deep z-10"></div>
                    <div className="md:hidden absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent z-20">
                        <h1 className="text-3xl font-serif text-white">Contáctanos</h1>
                    </div>
                </div>

                {/* Interaction Side (Right) */}
                <div className="w-full md:w-1/2 bg-navy-deep flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 xl:px-32 relative">

                    <div className="mb-12 hidden md:block">
                        <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary mb-6">Atención Personalizada</span>
                        <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">Contáctanos</h1>
                        <p className="text-slate-400 text-sm font-light leading-relaxed max-w-md">
                            Nuestra oficina de admisiones está a su disposición para agendar una llamada o cita, así como para resolver cualquier inquietud sobre nuestros programas de estudios.
                        </p>
                    </div>

                    <ContactForm />

                    {/* Contact Info Footer (No Map) */}
                    <div className="mt-16 pt-10 border-t border-navy-border grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <MapPin className="text-primary mt-1 h-5 w-5 shrink-0" />
                            <div>
                                <h3 className="text-lg font-serif text-white mb-1">Sede Tijuana</h3>
                                <p className="text-slate-400 text-xs leading-relaxed font-light">
                                    Blvd. Díaz Ordaz 12649 9 A, El Paraíso<br />
                                    Tijuana, Baja California 22106
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="text-primary mt-1 h-5 w-5 shrink-0" />
                            <div>
                                <h3 className="text-lg font-serif text-white mb-1">Contacto Directo</h3>
                                <p className="text-slate-400 text-xs leading-relaxed font-light mb-1">
                                    664-800-00-11
                                </p>
                                <a className="text-slate-400 text-xs hover:text-primary transition-colors block" href="mailto:contacto@centrodeestudiosaua.com">
                                    contacto@centrodeestudiosaua.com
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
