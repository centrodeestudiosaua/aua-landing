import { CheckCircle2, ChevronDown, BookOpen } from "lucide-react";

export default function SyllabusSection() {
    return (
        <section className="bg-white py-20 border-t border-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Contenido Académico</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
                        Temario del Programa
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Estructurado en 5 módulos intensivos para dominar la normativa STPS y evitar sanciones.
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Module 1 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-between p-6 bg-slate-50 group-hover:bg-white transition-colors cursor-default">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-navy-deep text-white font-bold flex items-center justify-center text-lg shadow-md group-hover:bg-primary group-hover:text-navy-deep transition-colors">1</span>
                                <h3 className="font-bold text-navy-deep text-xl">Contratos de Trabajo</h3>
                            </div>
                        </div>
                        <div className="p-6 pt-2 bg-white">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Elaboración:</strong> Estructura y redacción efectiva para protección patronal.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Cláusulas Esenciales:</strong> Adendas y protección de secretos industriales.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Module 2 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-between p-6 bg-slate-50 group-hover:bg-white transition-colors cursor-default">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-navy-deep text-white font-bold flex items-center justify-center text-lg shadow-md group-hover:bg-primary group-hover:text-navy-deep transition-colors">2</span>
                                <h3 className="font-bold text-navy-deep text-xl">Reglamento Interior de Trabajo (RIT)</h3>
                            </div>
                        </div>
                        <div className="p-6 pt-2 bg-white">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Comprensión y Aplicación:</strong> Marco legal y obligatoriedad.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Comisiones Mixtas:</strong> Constitución y funcionamiento obligatorio ante la STPS.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Module 3 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-between p-6 bg-slate-50 group-hover:bg-white transition-colors cursor-default">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-navy-deep text-white font-bold flex items-center justify-center text-lg shadow-md group-hover:bg-primary group-hover:text-navy-deep transition-colors">3</span>
                                <h3 className="font-bold text-navy-deep text-xl">Formatos DC-1 a DC-5</h3>
                            </div>
                        </div>
                        <div className="p-6 pt-2 bg-white">
                            <p className="text-slate-500 mb-4 text-sm">Documentación esencial para acreditar el cumplimiento de obligaciones de capacitación.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Llenado Correcto:</strong> Evita errores comunes que derivan en observaciones.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Plataforma SIRCE:</strong> Registro y gestión de constancias.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Module 4 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-between p-6 bg-slate-50 group-hover:bg-white transition-colors cursor-default">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-navy-deep text-white font-bold flex items-center justify-center text-lg shadow-md group-hover:bg-primary group-hover:text-navy-deep transition-colors">4</span>
                                <h3 className="font-bold text-navy-deep text-xl">Normas Oficiales Mexicanas (NOMs)</h3>
                            </div>
                        </div>
                        <div className="p-6 pt-2 bg-white">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Identificación:</strong> NOMs aplicables según el giro y tamaño de la empresa.</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Implementación:</strong> Guía práctica para carpetas de evidencia.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Module 5 */}
                    <div className="group border border-primary/20 rounded-xl overflow-hidden bg-primary/5">
                        <div className="flex items-center justify-between p-6 cursor-default">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-urgent-red text-white font-bold flex items-center justify-center text-lg shadow-md">5</span>
                                <h3 className="font-bold text-navy-deep text-xl">Inspecciones y Subcontratación</h3>
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-navy-deep font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-urgent-red shrink-0 mt-0.5" />
                                    <span><strong>Inspecciones STPS:</strong> Protocolo de atención para visitas ordinarias y extraordinarias.</span>
                                </li>
                                <li className="flex items-start gap-3 text-navy-deep font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-urgent-red shrink-0 mt-0.5" />
                                    <span><strong>REPSE y Subcontratación:</strong> Gestión de contratos y renovación de registros.</span>
                                </li>
                                <li className="flex items-start gap-3 text-navy-deep font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-urgent-red shrink-0 mt-0.5" />
                                    <span><strong>Ley Silla:</strong> Nuevas disposiciones y cumplimiento.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
