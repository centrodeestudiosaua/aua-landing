import { Users, Gavel, Building2, Calculator } from "lucide-react";

export default function TargetAudienceSection() {
    return (
        <section className="bg-navy-card py-20 border-y border-navy-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    <div className="md:w-1/2 space-y-8">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Perfil del Participante</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                ¿A quién está dirigido este programa?
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Diseñado para profesionales que buscan excelencia y blindaje jurídico en sus organizaciones. El contenido está adaptado para roles clave en la toma de decisiones laborales.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-navy-deep border border-navy-border p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-navy-card flex items-center justify-center group-hover:bg-primary group-hover:text-navy-deep transition-colors text-white">
                                    <Gavel className="h-6 w-6" />
                                </div>
                                <span className="text-white font-bold group-hover:text-primary transition-colors">Abogados Postulantes</span>
                            </div>

                            <div className="bg-navy-deep border border-navy-border p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-navy-card flex items-center justify-center group-hover:bg-primary group-hover:text-navy-deep transition-colors text-white">
                                    <Users className="h-6 w-6" />
                                </div>
                                <span className="text-white font-bold group-hover:text-primary transition-colors">Recursos Humanos</span>
                            </div>

                            <div className="bg-navy-deep border border-navy-border p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-navy-card flex items-center justify-center group-hover:bg-primary group-hover:text-navy-deep transition-colors text-white">
                                    <Calculator className="h-6 w-6" />
                                </div>
                                <span className="text-white font-bold group-hover:text-primary transition-colors">Contadores</span>
                            </div>

                            <div className="bg-navy-deep border border-navy-border p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-navy-card flex items-center justify-center group-hover:bg-primary group-hover:text-navy-deep transition-colors text-white">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <span className="text-white font-bold group-hover:text-primary transition-colors">Representantes Legales</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="aspect-square md:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-navy-border group">
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="Reunión ejecutiva"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-navy-deep/90 backdrop-blur-md p-6 rounded-xl border border-navy-border">
                                    <p className="text-white font-medium italic">
                                        "El cumplimiento normativo no es opcional. Protégete de multas millonarias y clausuras."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
