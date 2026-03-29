import Image from "next/image";
import { Linkedin, Award, Briefcase } from "lucide-react";

export default function InstructorSection() {
    return (
        <section className="bg-navy-deep py-20 border-t border-navy-border relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Image */}
                        <div className="relative shrink-0 group">
                            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-navy-deep shadow-2xl">
                                <Image
                                    src="/instructor.png"
                                    alt="Mtra. Emily del Carmen Sutro Antonio"
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center md:text-left space-y-6">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-3 bg-navy-deep/50 px-3 py-1 rounded-full border border-navy-border">
                                    <Award className="h-4 w-4 text-primary" />
                                    <span className="text-primary font-bold tracking-wider uppercase text-xs">Instructora Certificada</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                    Mtra. Emily del Carmen <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Sutro Antonio</span>
                                </h2>
                                <p className="text-slate-400 font-medium text-lg border-b border-white/5 pb-4 inline-block">
                                    Maestra en Derecho Laboral y Seguridad Social
                                </p>
                            </div>

                            <p className="text-slate-300 leading-relaxed text-lg max-w-2xl font-light">
                                Abogada postulante con amplia trayectoria en la defensa y asesoría de empresas.
                                <strong className="text-white font-medium"> Especialista en inspecciones de la STPS</strong>, formación de comisiones mixtas y cumplimiento de normas oficiales mexicanas.
                                Su enfoque práctico te garantizará herramientas aplicables desde el primer día.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 bg-navy-deep/50 p-4 rounded-lg border border-navy-border">
                                    <Briefcase className="h-5 w-5 text-blue-400" />
                                    <span className="text-sm text-slate-300 font-medium">Consultora Empresarial</span>
                                </div>
                                <div className="flex items-center gap-3 bg-navy-deep/50 p-4 rounded-lg border border-navy-border">
                                    <Award className="h-5 w-5 text-blue-400" />
                                    <span className="text-sm text-slate-300 font-medium">Auditora Laboral</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
