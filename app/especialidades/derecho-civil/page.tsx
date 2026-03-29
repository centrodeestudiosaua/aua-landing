import { ArrowRight, Scale, FileText, CheckCircle2, Building, Home as HomeIcon, Gavel } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Especialidad en Derecho Civil | Centro de Estudios AUA",
    description: "Fórmate de manera práctica en Derecho Civil: Contratos, Obligaciones, Derechos Reales y Litigio Civil en México.",
    keywords: ["Derecho Civil", "Contratos", "Obligaciones", "Juicio Civil", "Cursos Derecho Civil", "AUA", "Derecho Privado"],
};

export default function DerechoCivilPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-navy-deep z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-navy-deep via-navy-deep/90 to-navy-deep"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                        <Building className="h-4 w-4" />
                        <span>Fundamento Legal</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] max-w-4xl mx-auto">
                        La base de toda práctica jurídica: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                            Derecho Civil
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-3xl mx-auto">
                        Del perfeccionamiento de contratos a la oralidad civil. Desarrolla las competencias ineludibles para la asesoría patrimonial, obligaciones y litigio civil eficiente.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#programas" className="bg-primary hover:bg-white text-navy-deep font-bold px-8 py-4 rounded transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                            Explorar Formación Civil <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro section */}
            <section className="py-20 bg-navy-card border-y border-navy-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-3 scale-105"></div>
                            <img
                                src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop"
                                alt="Firma de contratos civiles"
                                className="rounded-2xl shadow-2xl relative z-10 border border-navy-border/50"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-navy-deep p-4 rounded-xl shadow-xl border border-navy-border z-20 flex items-center gap-4">
                                <Scale className="h-10 w-10 text-primary" />
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Nuevo Código</p>
                                    <p className="font-bold text-white">Nacional Procedimientos</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">El Código Nacional ha cambiado las reglas del juego.</h2>
                            <div className="w-16 h-1 bg-primary rounded-full"></div>

                            <div className="text-slate-300 font-light leading-relaxed space-y-4">
                                <p>
                                    El Derecho Civil es históricamente el tronco común del cual se han desprendido las demás ramas del derecho. Regula las relaciones privadas más esenciales de los ciudadanos: la persona, la propiedad, las obligaciones y los contratos.
                                </p>
                                <p>
                                    Con la expedición del <strong>Código Nacional de Procedimientos Civiles y Familiares (CNPCF)</strong> en México, nos enfrentamos a un cambio de paradigma histórico. La oralidad, la tecnología en la justicia (justicia digital), la reducción de términos, y nuevos modelos de desahogo de pruebas establecen exigencias nunca antes vistas para los abogados postulantes.
                                </p>
                                <p>
                                    Quien no domine hoy las técnicas de litigio oral civil y la formulación impecable de contratos (prevención de litigios), quedará obsoleto en el mercado en cuestión de meses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Core Areas */}
            <section className="py-24 bg-navy-deep">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Dominios Fundamentales
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Analizamos la ley desde la casuística. La teoría debe servir única y exclusivamente para sustentar el éxito práctico del asunto.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Card 1 */}
                        <div className="bg-navy-card overflow-hidden rounded-2xl border border-navy-border group">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
                                <div className="absolute inset-0 bg-navy-deep/80 group-hover:bg-navy-deep/60 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center p-8">
                                    <div className="bg-primary p-3 rounded-lg mr-4"><FileText className="h-6 w-6 text-navy-deep" /></div>
                                    <h3 className="text-2xl font-bold text-white">Obligaciones y Contratos</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                    Elaboración, análisis y ejecución de contratos civiles (compraventa, arrendamiento, prestación de servicios profesionales, mutuo, mandato, donación). Estudio profundo de los vicios del consentimiento, inexistencia, nulidad absoluta y relativa, así como la rescisión y el cumplimiento forzoso de las obligaciones.
                                </p>
                                <p className="text-slate-300 font-medium text-sm">Temas Clave:</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-500">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Teoría de la Imprevisión y Cláusula Rebus Sic Stantibus</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Daño Moral y Responsabilidad Civil Objetiva/Subjetiva</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Convenios modificatorios y transmisión de obligaciones</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-navy-card overflow-hidden rounded-2xl border border-navy-border group">
                            <div className="h-40 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center relative">
                                <div className="absolute inset-0 bg-navy-deep/80 group-hover:bg-navy-deep/60 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center p-8">
                                    <div className="bg-primary p-3 rounded-lg mr-4"><HomeIcon className="h-6 w-6 text-navy-deep" /></div>
                                    <h3 className="text-2xl font-bold text-white">Derechos Reales y Propiedad</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                    Defensa y estructuración del patrimonio. Las mecánicas legales para proteger, transmitir y registrar jurídicamente inmuebles y otros bienes. Acción reivindicatoria, acciones posesorias prescriptivas y regulación registral en las entidades federativas.
                                </p>
                                <p className="text-slate-300 font-medium text-sm">Temas Clave:</p>
                                <ul className="mt-3 space-y-2 text-sm text-slate-500">
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Prescripción Adquisitiva (Usucapión) de buena y mala fe.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Copropiedad, Servidumbres y Usufructo.</li>
                                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Controversias en Materia Inmobiliaria y de Arrendamiento.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-navy-card overflow-hidden rounded-2xl border border-navy-border group lg:col-span-2">
                            <div className="p-8 lg:p-10 flex flex-col md:flex-row gap-8 items-center">
                                <div className="shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-urgent-red/10 flex items-center justify-center text-urgent-red border border-urgent-red/30">
                                        <Gavel className="h-10 w-10" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3">Litigio Oral Civil (CNPCF)</h3>
                                    <p className="text-slate-400 leading-relaxed font-light mb-4 text-sm">
                                        La oralidad es un hecho inminente. Nuestro enfoque te prepara para dominar la fase postulatoria escrita (demandas y contestaciones enfocadas a los hechos controvertidos), y las fases orales: Audiencia Preliminar (depuración del procedimiento, conciliación, fijación de acuerdos sobre hechos no controvertidos y admisión de pruebas) y Audiencia de Juicio (alegatos, interrogatorios, contrainterrogatorios y desahogo de testigos y peritos).
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden text-center bg-navy-card border-t border-navy-border">
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-4">¿Listo para perfeccionar tu Técnica Civilista?</h2>
                    <p className="text-slate-400 mb-8 font-light text-lg">
                        Mantente a la vanguardia como abogado postulante dominando los pilares de nuestro ordenamiento de frente al Código Nacional.
                    </p>
                    <Link href="/contacto" className="inline-flex items-center gap-2 bg-primary text-navy-deep font-bold px-8 py-3 rounded hover:bg-white transition-colors">
                        Solicitar Información
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
