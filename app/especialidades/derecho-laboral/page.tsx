import { Sparkles, ArrowRight, Scale, Briefcase, FileText, CheckCircle2, ShieldAlert, TrendingUp, Users, BookOpen, Gavel } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Especialidad en Derecho Laboral | Centro de Estudios AUA",
    description: "Especialízate en Derecho Laboral y domina las reformas, conflictos obrero-patronales, sindicatos y litigio estratégico en México. Formación 100% práctica.",
    keywords: ["Derecho Laboral", "Derecho del Trabajo", "Conflictos Laborales", "Especialidad Laboral", "Cursos Derecho Laboral", "AUA", "Litigio Laboral"],
};

export default function DerechoLaboralPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-navy-deep z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6">
                            <Scale className="h-4 w-4" />
                            <span>Área de Práctica</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Dominio Estratégico en <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                                Derecho Laboral
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl">
                            Ante el nuevo panorama de justicia laboral en México, la especialización no es opcional, es el único camino hacia el éxito en el litigio y la asesoría empresarial.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/cursos/diplomado-derecho-laboral" className="bg-primary hover:bg-white text-navy-deep font-bold px-8 py-4 rounded transition-colors shadow-lg shadow-primary/20 text-center flex items-center justify-center gap-2 group">
                                Ver Programas Disponibles <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction / The Importance */}
            <section className="py-20 bg-navy-card border-y border-navy-border relative overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop')] bg-cover bg-center opacity-5 hidden lg:block rounded-l-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-8 text-slate-300 text-lg leading-relaxed font-light">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b-2 border-primary inline-block pb-2">
                                La Transformación de la Justicia del Trabajo
                            </h2>

                            <p>
                                El <strong className="text-white font-medium">Derecho Laboral</strong> en México ha experimentado su transformación más profunda en el último siglo. Con la implementación del Nuevo Sistema de Justicia Laboral, la transición de las Juntas de Conciliación y Arbitraje hacia los Centros de Conciliación y Tribunales Laborales del Poder Judicial, el litigio ha dejado de ser un trámite burocrático para convertirse en un proceso oral, ágil y altamente técnico.
                            </p>

                            <p>
                                Hoy en día, el abogado postulante, el asesor interno de empresas y el funcionario público requieren dominar no solo la Ley Federal del Trabajo (LFT), sino las reglas procesales de oralidad, la argumentación probatoria, y los estándares internacionales de la OIT y del T-MEC relacionados con el mundo del trabajo y la libertad sindical.
                            </p>

                            <div className="bg-navy-deep p-8 rounded-xl border border-navy-border mt-8 flex gap-6 items-start">
                                <div className="bg-primary/20 p-3 rounded-lg shrink-0 mt-1">
                                    <Briefcase className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Una Rama Dinámica y Exigente</h3>
                                    <p className="text-sm">
                                        A diferencia de otras materias, el Derecho del Trabajo regula relaciones vivas y en constante tensión: el trabajo como derecho y deber social, y el capital. Una mala asesoría en esta materia puede representar contingencias millonarias para una empresa o la pérdida de derechos fundamentales para un trabajador. Las recientes reformas en materia de subcontratación (outsourcing), teletrabajo, vacaciones dignas y normas oficiales mexicanas (como la NOM-035 y NOM-037), hacen de esta especialidad una de las más demandadas y lucrativas del mercado legal.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-8">
                                En el <strong>Centro de Estudios AUA</strong>, hemos estructurado programas formativos que trascienden la simple memorización de la ley. Nos enfocamos en <span className="text-primary font-medium">cómo se litiga hoy</span>, qué criterios están adoptando los nuevos jueces laborales, cómo argumentar en las audiencias preliminar y de juicio, y cómo blindar a las empresas antes de llegar a los tribunales.
                            </p>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="bg-navy-deep border border-navy-border rounded-xl p-8 sticky top-32 shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                    Perspectiva del Sector
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <span className="text-primary font-bold text-2xl">01</span>
                                        <div>
                                            <h4 className="font-bold text-white">Alta Demanda</h4>
                                            <p className="text-sm text-slate-400">Incremento sostenido en la demanda de abogados expertos tras la reforma laboral y la ola expansiva del nearshoring.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-primary font-bold text-2xl">02</span>
                                        <div>
                                            <h4 className="font-bold text-white">Nuevos Perfiles</h4>
                                            <p className="text-sm text-slate-400">Se requiere conocimiento procesal oral y dominio en compliance para prevenir inspecciones y demandas.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-primary font-bold text-2xl">03</span>
                                        <div>
                                            <h4 className="font-bold text-white">Nivel Remunerativo</h4>
                                            <p className="text-sm text-slate-400">Las especialidades corporativas del derecho laboral se encuentran entre las de mayor retorno económico.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive / Areas of Focus (Bento + benefits) */}
            <section className="py-24 bg-navy-deep">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-2">Ejes Temáticos</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Especialización Profunda
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Nuestros programas cubren las vertientes más críticas del Derecho Laboral con un enfoque 100% práctico.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Gavel className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Nuevo Sistema de Justicia Laboral</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Domina la fase prejudicial obligatoria en los Centros de Conciliación, así como las fases escrita y oral ante los Tribunales Laborales dependientes del Poder Judicial.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Reglas de competencia y procedencia</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Preparación de demandas y contestaciones</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Técnicas de litigación en Audiencia Preliminar</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Desahogo de pruebas en Audiencia de Juicio</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <FileText className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Contratación y Condiciones</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Elaboración estratégica de contratos Individuales, manejo de prestaciones, controles de asistencia, y terminaciones de la relación de trabajo (despidos justificados e injustificados).
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Modalidades de contratación</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Diseño de paquetes de compensación</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Actas administrativas y recisión de contrato</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Convenios de terminación dentro y fuera de juicio</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-navy-card p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors group">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Users className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Derecho Colectivo y Sindical</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Navega el complejo entorno de las relaciones sindicales post-reforma, legitimación de contratos colectivos, revisiones salariales y procedimientos de titularidad.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Negociación colectiva auténtica</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Centro Federal de Conciliación y Registro Laboral</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Conflictos de Huelga</li>
                                <li className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Implicaciones del Anexo 23-A del T-MEC</li>
                            </ul>
                        </div>

                        {/* Card 4 (Full width spanning 2 if needed, here just normal) */}
                        <div className="bg-gradient-to-br from-navy-card to-navy-deep p-8 rounded-2xl border border-navy-border hover:border-primary/50 transition-colors group md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-8 items-center shadow-inner">
                            <div className="shrink-0 w-24 h-24 rounded-full bg-urgent-red/10 flex items-center justify-center text-urgent-red group-hover:scale-110 transition-transform">
                                <ShieldAlert className="h-10 w-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Auditorías e Inspecciones de la STPS</h3>
                                <p className="text-slate-300 text-base leading-relaxed mb-4 font-light">
                                    Acompaña a las empresas en el cumplimiento estricto de la normatividad. Prepárate para las inspecciones ordinarias y extraordinarias de la Secretaría del Trabajo y Previsión Social. Aprende a solventar observaciones, evitar la imposición de multas cuantiosas y entender el funcionamiento del REPSE (Registro de Prestadoras de Servicios Especializados). El incumplimiento en temas de subcontratación y normas oficiales (NOM-035, NOM-037) representa actualmente el riesgo número uno para las finanzas de las empresas en México.
                                </p>
                                <Link href="/contacto" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                                    Descubre nuestro curso sobre Protocolo STPS <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accordion / FAQ Text Intensive Section */}
            <section className="py-24 bg-navy-card border-t border-navy-border">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">
                        Aspectos Críticos que Dominarás
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border hover:border-primary/40 transition-colors">
                            <h4 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-primary/20 text-primary p-2 rounded">
                                    <BookOpen className="h-5 w-5" />
                                </span>
                                La Prueba Electrónica en Materia Laboral
                            </h4>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Con el auge del teletrabajo y la comunicación digital, gran parte de las instrucciones, renuncias o conductas se documentan vía WhatsApp, correos electrónicos o plataformas corporativas. Dominarás cómo ofrecer, preparar y desahogar pruebas electrónicas garantizando su valor probatorio ante el juez laboral, sorteando las objeciones sobre alteración o manipulación digital, y sustentando la cadena de custodia cuando sea necesario.
                            </p>
                        </div>

                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border hover:border-primary/40 transition-colors">
                            <h4 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-primary/20 text-primary p-2 rounded">
                                    <Scale className="h-5 w-5" />
                                </span>
                                El Principio de Realidad y Carga de la Prueba
                            </h4>
                            <p className="text-slate-400 font-light leading-relaxed">
                                El Nuevo Sistema privilegia la solución de fondo sobre los formalismos procesales. Profundizarás en el "Principio de Primacía de la Realidad" y comprenderás detalladamente las reglas del artículo 784 de la LFT sobre a quién corresponde la carga de probar elementos como el salario, horario, y fecha de ingreso. Esto es fundamental para estructurar una teoría del caso invulnerable, ya sea como parte actora o demandada.
                            </p>
                        </div>

                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border hover:border-primary/40 transition-colors">
                            <h4 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
                                <span className="bg-primary/20 text-primary p-2 rounded">
                                    <Briefcase className="h-5 w-5" />
                                </span>
                                Cálculo de Prestaciones y Liquidaciones
                            </h4>
                            <p className="text-slate-400 font-light leading-relaxed">
                                Un litigante laboral excelente debe dominar la aritmética legal. Nuestros programas abordan casos prácticos complejos para calcular aguinaldos, prima vacacional, prima de antigüedad, indemnizaciones constitucionales (90 días y 20 días por año), salarios caídos truncados, e integración de salarios (Salario Cuota Diaria vs. Salario Base de Cotización, Salario Integrado).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-6">
                        Eleva tu Práctica Legal Hoy
                    </h2>
                    <p className="text-navy-deep/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                        La improvisación en el Derecho Laboral ya no tiene cabida. Fórmate con Especialistas y Doctores en Derecho que litigan todos los días.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contacto" className="bg-navy-deep hover:bg-slate-800 text-white font-bold px-8 py-4 rounded transition-colors shadow-2xl flex items-center justify-center gap-2 group">
                            Hablar con un Asesor
                        </Link>
                        <Link href="/#programas" className="bg-transparent border-2 border-navy-deep text-navy-deep hover:bg-navy-deep/10 font-bold px-8 py-4 rounded transition-colors flex items-center justify-center">
                            Ver Oferta Académica
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
