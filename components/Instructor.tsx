import Image from "next/image";
import { Linkedin, Award, Briefcase } from "lucide-react";

export default function Instructor() {
    return (
        <section id="instructor" className="w-full py-20 bg-[#0B1D3F] font-sans rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Ambient Light */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12">
                        {/* Glow effect behind photo */}
                        <div className="absolute top-12 left-12 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none md:block hidden" />

                        <div className="flex flex-col md:flex-row items-center gap-12">

                            <div className="relative shrink-0 group">
                                <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#0B1D3F] shadow-2xl">
                                    <Image
                                        src="/instructor.png"
                                        alt="Mtra. Emily del Carmen Sutro Antonio"
                                        fill
                                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="text-center md:text-left space-y-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-3">
                                        <Award className="h-5 w-5 text-yellow-500" />
                                        <span className="text-yellow-500 font-bold tracking-wider uppercase text-sm">Instructora Certificada</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Mtra. Emily del Carmen <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Sutro Antonio</span></h2>
                                    <p className="text-blue-200/60 font-medium text-lg border-b border-white/5 pb-4 inline-block">Maestra en Derecho Laboral y Seguridad Social</p>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Abogada postulante con amplia trayectoria en la defensa y asesoría de empresas.
                                    <span className="text-white font-medium"> Especialista en inspecciones de la STPS</span>, formación de comisiones mixtas y cumplimiento de normas oficiales mexicanas.
                                    Su enfoque práctico te garantizará herramientas aplicables desde el primer día.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                        <Briefcase className="h-5 w-5 text-blue-400" />
                                        <span className="text-sm text-gray-300">Consultora Empresarial</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                        <Award className="h-5 w-5 text-blue-400" />
                                        <span className="text-sm text-gray-300">Auditora Laboral</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
