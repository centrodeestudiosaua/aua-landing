import { ArrowRight, Scale, Briefcase, FileText, CheckCircle2, ShieldAlert, TrendingUp, Users, BookOpen, ShieldCheck, Target, Activity } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Especialidad en Compliance Laboral | Centro de Estudios AUA",
    description: "Protege a tu empresa o a tus clientes con nuestra formación en Compliance Laboral. Domina normas oficiales (NOM), auditorías STPS, REPSE y prevención de riesgos.",
    keywords: ["Compliance Laboral", "Auditoría Laboral", "NOM 035", "NOM 037", "STPS", "REPSE", "Cumplimiento Normativo Laboral", "Prevención de Riesgos Legales"],
};

export default function ComplianceLaboralPage() {
    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 bg-navy-deep z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-navy-deep/50"></div>
                    <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="max-w-2xl flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-6 w-max">
                            <ShieldCheck className="h-4 w-4" />
                            <span>Innovación y Prevención</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                            Cultura Preventiva y <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-primary to-orange-400">
                                Compliance Laboral
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-xl">
                            El litigio es reactivo; el Compliance es estratégico. Domina el marco de cumplimiento normativo en México y conviértete en el escudo legal de las organizaciones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/#programas" className="bg-primary hover:bg-white text-navy-deep font-bold px-8 py-4 rounded transition-colors shadow-lg shadow-primary/20 text-center flex items-center justify-center gap-2 group w-max">
                                Formación en Compliance <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 hidden lg:block">
                        {/* abstract metric visual */}
                        <div className="relative w-full aspect-square max-w-md ml-auto">
                            <div className="absolute inset-0 border border-navy-border/50 rounded-full animate-[spin_60s_linear_infinite] border-dashed"></div>
                            <div className="absolute inset-4 border border-primary/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-12 bg-navy-card rounded-full shadow-2xl border border-navy-border flex flex-col items-center justify-center text-center p-8">
                                <ShieldCheck className="h-16 w-16 text-primary mb-4" />
                                <span className="text-4xl font-bold text-white block mb-1">0 Multas</span>
                                <span className="text-xs text-slate-400 uppercase tracking-widest">Objetivo de Cumplimiento</span>
                            </div>

                            <div className="absolute top-10 right-10 bg-navy-card p-4 rounded-xl shadow-xl border border-navy-border transform rotate-6 animate-pulse">
                                <span className="text-xs text-slate-400 block mb-1">Normativa</span>
                                <span className="font-bold text-primary">REPSE / STPS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main concepts */}
            <section className="py-20 bg-navy-card border-y border-navy-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            El Futuro del Derecho Empresarial
                        </h2>
                        <p className="text-slate-400 text-lg font-light leading-relaxed">
                            El Compliance Laboral (Cumplimiento Normativo Laboral) surge de la necesidad imperante de las empresas de adoptar buenas prácticas que aseguren el acatamiento de las disposiciones legales aplicables, mitigando riesgos operativos, legales, financieros y reputacionales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border">
                            <Activity className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Auditoría (Due Diligence)</h3>
                            <p className="text-sm text-slate-400 font-light">Identificación precisa de riesgos contingentes, revisión de contratos, controles de asistencia, recibos de nómina y políticas internas.</p>
                        </div>

                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border">
                            <ShieldAlert className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Protocolos de Prevención</h3>
                            <p className="text-sm text-slate-400 font-light">Implementación de canales de denuncia, protocolos contra hostigamiento, discriminación y violencia laboral (Exigidos por la LFT).</p>
                        </div>

                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border">
                            <Target className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Capacitación y Adiestramiento</h3>
                            <p className="text-sm text-slate-400 font-light">Cumplimiento formal e institucional de la presentación de comisiones mixtas, planes y programas de capacitación ante la Secretaría del Trabajo.</p>
                        </div>

                        <div className="bg-navy-deep p-6 rounded-xl border border-navy-border">
                            <FileText className="h-8 w-8 text-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Monitoreo Constante</h3>
                            <p className="text-sm text-slate-400 font-light">Creación de métricas (KPIs legales) y comités de cumplimiento para mantener actualizados los expedientes ante cualquier reforma de ley.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Heavy Deep Dive */}
            <section className="py-24 bg-navy-deep">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">
                                ¿Por qué especializarse en<br />Compliance Laboral?
                            </h2>
                            <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                                <p>
                                    Las autoridades mexicanas (STPS, IMSS, INFONAVIT, SAT) están realizando cruces de información más sofisticados que nunca. Si un trabajador está registrado en el IMSS con un salario pero en el CFDI aparece distinto, o si una empresa factura "servicios especializados" sin contar con el REPSE, las alertas saltan inmediatamente en los sistemas del gobierno.
                                </p>
                                <p>
                                    La multa por no permitir una inspección del trabajo puede superar los <strong>$500,000 pesos</strong>. Las multas por violar la normativa de subcontratación oscilan entre las 2,000 y 50,000 UMAS (millones de pesos) y arrastran responsabilidad solidaria y potencial delito de defraudación fiscal.
                                </p>
                                <p>
                                    Los abogados con especialidad en Compliance no sólo defienden juicios; <strong>diseñan escudos corporativos</strong> que hacen a las empresas atractivas para inversores extranjeros (Nearshoring), evitan sanciones demoledoras e incrementan la rentabilidad. Un programa de compliance laboral efectivo cambia la percepción del abogado de ser un "gasto" (cuando hay juicios) a ser una "inversión" de valor estratégico.
                                </p>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-xl font-bold text-white mb-6">Contenido Práctico de Nuestra Formación</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-white block">Implementación de NOMs de Seguridad y Salud</strong>
                                            <span className="text-sm text-slate-400">NOM-035 (Riesgos Psicosociales), NOM-037 (Teletrabajo), NOM-030. Desde la creación de la carpeta administrativa hasta la evidencia de cumplimiento.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-white block">Esquema REPSE y Subcontratación</strong>
                                            <span className="text-sm text-slate-400">Integración de expedientes para contratistas, llenado de cuatrimestrales (ICSOE y SISUB) y prevención jurídica frente a cancelaciones del folio.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-white block">Revisión Categórica (Desarrollo de Reglamentos)</strong>
                                            <span className="text-sm text-slate-400">Creación de Reglamentos Interiores de Trabajo a prueba de fuego procesal, políticas de códigos de ética y disciplina organizacional permitida.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-navy-card border border-navy-border rounded-2xl p-8 lg:p-12 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-6 opacity-20">
                                <ShieldCheck className="h-32 w-32 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Atención a Inspecciones STPS</h3>
                            <p className="text-slate-400 mb-8 relative z-10">Conoce el proceso integral para solventar las visitas gubernamentales.</p>

                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-navy-deep border border-navy-border flex flex-col items-center justify-center shrink-0 group-hover:border-primary transition-colors text-white font-bold">1</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Visita e Identificación</h4>
                                        <p className="text-sm text-slate-400">Control legal desde que se presenta el citatorio y el inspector; validación de gafetes y acreditación de órdenes de visita.</p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-6 bg-navy-border ml-5 my-1"></div>

                                <div className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-navy-deep border border-navy-border flex flex-col items-center justify-center shrink-0 group-hover:border-primary transition-colors text-white font-bold">2</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Desahogo Documental y Entrevistas</h4>
                                        <p className="text-sm text-slate-400">Técnicas para exhibir únicamente la información requerida, y preparación para las entrevistas anónimas a trabajadores.</p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-6 bg-navy-border ml-5 my-1"></div>

                                <div className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-navy-deep border border-navy-border flex flex-col items-center justify-center shrink-0 group-hover:border-primary transition-colors text-white font-bold">3</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Emplazamiento y Sustanciación</h4>
                                        <p className="text-sm text-slate-400">Uso de los plazos legales (de 5, 15 o más días) para corregir observaciones, presentar pruebas documentales o alegatos.</p>
                                    </div>
                                </div>

                                <div className="w-0.5 h-6 bg-navy-border ml-5 my-1"></div>

                                <div className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-primary flex flex-col items-center justify-center shrink-0 text-navy-deep font-bold shadow-[0_0_15px_rgba(234,179,8,0.4)]">V</div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Resolución y Medios de Defensa</h4>
                                        <p className="text-sm text-slate-400">Cuantificación de las multas en caso de resolución desfavorable y la interposición de Juicio de Nulidad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-primary opacity-90 mix-blend-multiply"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <ShieldCheck className="h-16 w-16 text-navy-deep mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-6">
                        Conviértete en un Oficial de Cumplimiento Laboral
                    </h2>
                    <p className="text-navy-deep/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
                        El perfil profesional más buscado por corporativos, firmas legales y reclutadores en México tras las últimas reformas de la LFT.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/cursos/protocolo-stps-subcontratacion" className="bg-navy-deep hover:bg-slate-800 text-white font-bold px-8 py-4 rounded transition-colors shadow-2xl flex items-center justify-center gap-2 group">
                            Curso de Protocolo STPS <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
