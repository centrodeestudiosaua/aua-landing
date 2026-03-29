"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseRegistrationForm from "@/components/marketing/CourseRegistrationForm";
import {
    Award, CheckCircle2, Clock, Gavel, Shield, Users, Calendar,
    FileText, UserCircle, Star, PenTool, HelpCircle, Plus, Minus,
    MessageCircle
} from 'lucide-react';



type Session = {
    date: string;
    topics: string[];
    speaker?: string;
    type: 'theory' | 'workshop' | 'experience';
};

type ProgramModule = {
    number: number;
    title: string;
    sessions: Session[];
};

export default function CoursePage() {
    const [openModule, setOpenModule] = useState<number | null>(null);
    const [showStickyPromo, setShowStickyPromo] = useState(false);
    const moduleRefs = useRef<{ [key: number]: HTMLElement | null }>({});

    useEffect(() => {
        const handleScroll = () => {
            // Show only when scrolled down. Hide at the top so it doesn't overlap the Hero
            const isScrolledPastHero = window.scrollY > 400;
            
            // Check if the form is fully in view (reaches middle of screen)
            const formContainer = document.getElementById('formulario-registro');
            let isFormReached = false;
            if (formContainer) {
                const rect = formContainer.getBoundingClientRect();
                // Hide only when the form is visibly in the middle/upper part of the screen
                isFormReached = rect.top < (window.innerHeight * 0.5);
            }
            
            setShowStickyPromo(isScrolledPastHero && !isFormReached);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (openModule !== null && moduleRefs.current[openModule]) {
            const el = moduleRefs.current[openModule];
            if (el) {
                // Smooth scroll to the module when it opens, with an offset for the header
                setTimeout(() => {
                    const top = el.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [openModule]);
    const modules: ProgramModule[] = [
        {
            number: 1,
            title: "INTRODUCCIÓN AL JUICIO DE AMPARO",
            sessions: [
                {
                    date: "Jueves 23 de abril",
                    topics: [
                        "H:PRIMER MÓDULO",
                        "H:Concepto:",
                        "Fundamento Constitucional y legal",
                        "Supremacía constitucional y bloque de constitucionalidad",
                        "Control de constitucionalidad y convencionalidad",
                        "Control difuso y concentrado"
                    ],
                    speaker: "Mgdo. Juan Carlos Ortega Castro",
                    type: "theory"
                },
                {
                    date: "Jueves 30 de abril",
                    topics: [
                        "H:Las partes en el Juicio de Amparo",
                        "Autoridades responsables",
                        "Parte quejosa",
                        "Terceros interesados",
                        "Ministerio Público",
                        "Tercer extraño",
                        "H:Intereses tutelados en el Juicio de Amparo.",
                        "Legitimación y personería",
                        "Interés Jurídico y Legitimo",
                        "Interés simple",
                        "Interés como derecho subjetivo"
                    ],
                    speaker: "Jueza Rebeca Jazmín Rodríguez Pujol",
                    type: "theory"
                },
                {
                    date: "Jueves 07 de mayo",
                    topics: [
                        "H:Principios Rectores del Juicio de Amparo.",
                        "Principio de estricto derecho",
                        "Principio de definitividad",
                        "Principio de relatividad",
                        "Principio de suplencia de la queja deficiente",
                        "Principio de Audiencia"
                    ],
                    speaker: "Mgda. Rebeca Florentina Pujol Rosas",
                    type: "theory"
                },
                {
                    date: "Jueves 14 de mayo",
                    topics: [
                        "H:Causales de improcedencia y sobreseimiento:",
                        "Causales de improcedencia",
                        "Causales de sobreseimiento",
                        "El sobreseimiento y su relación con la Improcedencia",
                        "Efectos de la resolución de sobreseimiento",
                        "Oportunidad procesal para decretar el sobreseimiento"
                    ],
                    speaker: "Juez Armando Sánchez Castillo",
                    type: "theory"
                }
            ]
        },
        {
            number: 2,
            title: "AMPARO INDIRECTO",
            sessions: [
                {
                    date: "Jueves 21 de mayo",
                    topics: [
                        "H:Análisis de la Procedencia del Amparo Indirecto (Art. 107 L.A.)",
                        "Actos en Juicio cuya Ejecución sea de Imposible Reparación",
                        "Actos que Afecten a Personas Extrañas al Procedimiento",
                        "Actos Dictados Fuera de Juicio o Después de Concluido",
                        "El Principio de Definitividad y Excepciones"
                    ],
                    speaker: "Dr. Johnny Morales Martínez",
                    type: "theory"
                },
                {
                    date: "Jueves 28 de mayo",
                    topics: [
                        "H:Trámite y sustanciación del Juicio de Amparo Indirecto",
                        "H:Demanda de amparo Indirecto:",
                        "Requisitos",
                        "Forma",
                        "Presentación",
                        "Oportunidad de la presentación",
                        "Ampliación.",
                        "Auto Inicial",
                        "Auto aclaratorio",
                        "H:Desechamiento o de admisión",
                        "Auto de prevención, por no presentada o admisión.",
                        "Informe justificado",
                        "Vista informe justificado",
                        "Ampliación demandada",
                        "Pruebas y alegatos",
                        "Sentencia."
                    ],
                    speaker: "Mgdo. Jesús Báez Rivas",
                    type: "theory"
                },
                {
                    date: "Jueves 04 de junio",
                    topics: [
                        "H:Taller Práctico de Redacción de Demanda de Amparo Indirecto (Énfasis en Omisiones y Dilaciones).",
                        "Anatomía de la demanda y requisitos del Art. 108 de la L.A.",
                        "Fijación estratégica del Acto Reclamado ante actos negativos u omisiones.",
                        "Redacción del antecedentes bajo protesta de decir verdad sin generar prevención.",
                        "Construcción del concepto de violación por vulneración al Art. 17 Constitucional (Justicia pronta y expedita).",
                        "Evita prevenciones",
                        "Conecta con la realidad de los juzgados."
                    ],
                    speaker: "Juez Raúl falcón Arce",
                    type: "workshop"
                }
            ]
        },
        {
            number: 3,
            title: "AMPARO DIRECTO",
            sessions: [
                {
                    date: "Jueves 11 de junio",
                    topics: [
                        "H:EL JUICIO DE AMPARO DIRECTO",
                        "Competencia",
                        "Procedencia",
                        "Legitimación para promoverlo",
                        "Demanda",
                        "Sustanciación",
                        "Sentencia"
                    ],
                    speaker: "Jueza Juana Fuentes Velázquez",
                    type: "theory"
                },
                {
                    date: "Jueves 18 de junio",
                    topics: [
                        "H:Distintos tipos de Concepto de Violación en el Amparo Directo",
                        "H:Violaciones en la resolución reclamada:",
                        "Formales y de fondo",
                        "Violaciones Procesales",
                        "Supuestos legales",
                        "Requisitos para su estudio",
                        "Preparación de su impugnación",
                        "Ausencia de preclusión",
                        "Criterios para determinar el orden de estudio de los conceptos de violación"
                    ],
                    speaker: "Magistrado en Retiro Fernando Rangel Ramírez",
                    type: "theory"
                },
                {
                    date: "Jueves 25 de junio",
                    topics: [
                        "H:Estructura de la Demanda de Amparo Directo:",
                        "Encabezado y datos del quejoso",
                        "Autoridades responsables",
                        "Acto reclamado",
                        "Conceptos de violación",
                        "H:AMPARO ADHESIVO",
                        "Procedencia",
                        "Tramite",
                        "Resolución"
                    ],
                    speaker: "Juez Armando Sánchez Castillo",
                    type: "theory"
                },
                {
                    date: "Viernes 03 de julio",
                    topics: [
                        "H:Particularidades del Amparo en Materia Laboral",
                        "La Suplencia de la Queja",
                        "Procedencia del Amparo Directo",
                        "Omisiones Procesales",
                        "La Suspensión en Materia Laboral"
                    ],
                    speaker: "Jueza Juana Fuentes Velázquez",
                    type: "theory"
                }
            ]
        },
        {
            number: 4,
            title: "SUSPENSIÓN, RECURSOS Y ARGUMENTACIÓN",
            sessions: [
                {
                    date: "Jueves 10 de julio",
                    topics: [
                        "H:Suspensión del acto reclamado en el Amparo Indirecto y Directo.",
                        "Suspensión de oficio y de plano. (Para que se pide la suspensión)",
                        "Procedencia",
                        "Efectos de la suspensión",
                        "Requisitos de eficacia.",
                        "Medidas de aseguramiento",
                        "Garantía y contra garantía",
                        "Efectos de la suspensión",
                        "Tramite",
                        "Audiencia Incidental y resolución"
                    ],
                    speaker: "Dr. Johnny Morales Martínez",
                    type: "theory"
                },
                {
                    date: "Jueves 06 de agosto",
                    topics: [
                        "H:Medios de Impugnación:",
                        "H:Revisión",
                        "Procedencia",
                        "Legitimación",
                        "Resolución",
                        "H:Queja",
                        "Procedencia",
                        "Interposición",
                        "Reglas para su resolución",
                        "H:Reclamación",
                        "Procedencia",
                        "Interposición",
                        "Resolución"
                    ],
                    speaker: "Magistrado en Retiro Fernando Rangel Ramírez",
                    type: "theory"
                },
                {
                    date: "Jueves 13 de agosto",
                    topics: [
                        "H:Argumentación",
                        "Argumentación jurídica y conceptos de violación",
                        "Principio de estricto derecho, suplencia de la queja y causa de pedir.",
                        "Excepción del principio de definitividad."
                    ],
                    speaker: "Mtro. Sebastián Leopoldo Ramírez García",
                    type: "theory"
                }
            ]
        },
        {
            number: 5,
            title: "CONCEPTOS DE VIOLACIÓN Y ACTO RECLAMADO",
            sessions: [
                {
                    date: "Jueves 20 de agosto",
                    topics: [
                        "H:Argumentación y Estrategia.",
                        "Cómo redactar conceptos de violación claros",
                        "Uso de jurisprudencia y precedentes",
                        "Construcción de argumentos sólidos"
                    ],
                    speaker: "Mtro. Sebastián Leopoldo Ramírez García",
                    type: "theory"
                },
                {
                    date: "Jueves 27 de agosto",
                    topics: [
                        "H:Jurisprudencia",
                        "Concepto",
                        "Competencia",
                        "Formación y sustitución",
                        "Obligatoriedad",
                        "Interrupción",
                        "H:Declaratorio general de Inconstitucionalidad",
                        "Competencia",
                        "Procedencia",
                        "Procedimiento",
                        "Alcance de la declaratoria"
                    ],
                    speaker: "Magistrado en Retiro Fernando Rangel Ramírez",
                    type: "theory"
                },
                {
                    date: "Jueves 03 de septiembre",
                    topics: [
                        "H:Actos reclamados:",
                        "Acción, omisión o norma general que vulnera derechos humanos.",
                        "El particular con calidad de autoridad."
                    ],
                    speaker: "Jueza Juana Fuentes Velázquez",
                    type: "theory"
                },
                {
                    date: "Jueves 10 de septiembre",
                    topics: [
                        "H:Errores Comunes y Mejores Prácticas",
                        "H:Tipo de agravios:",
                        "H:Fundados",
                        "H:Infundados",
                        "Inoperantes – inatendibles, insuficientes.",
                        "Errores frecuentes en demandas de amparo",
                        "Cómo evitarlos",
                        "Estrategias prácticas para fortalecer la demanda de Amparo"
                    ],
                    speaker: "Magistrado en Retiro Fernando Rangel Ramírez",
                    type: "theory"
                }
            ]
        },
        {
            number: 6,
            title: "SENTENCIA Y SU EJECUCIÓN",
            sessions: [
                {
                    date: "Jueves 17 de septiembre",
                    topics: [
                        "H:Cumplimiento y Ejecución de las sentencias de amparo.",
                        "Cumplimiento e inejecución de sentencias de amparo",
                        "Autoridades vinculadas al cumplimiento",
                        "Procedimiento",
                        "Repetición del acto reclamado",
                        "Recurso de Inconformidad",
                        "Incidente de Cumplimiento sustituto",
                        "Incidente por exceso o defecto en el cumplimiento de la suspensión",
                        "Denuncia por incumplimiento del declaratorio general de inconstitucionalidad",
                        "Medidas disciplinarias y de apremio, responsabilidad, sanciones y delitos."
                    ],
                    speaker: "Magistrado en Retiro Fernando Rangel Ramírez",
                    type: "theory"
                },
                {
                    date: "Jueves 24 de septiembre",
                    topics: [
                        "H:Requisitos formales que debe contener una sentencia de amparo",
                        "Sentencia de sobreseimiento",
                        "Sentencia que niega el amparo",
                        "Sentencia que concede el amparo",
                        "H:Requisitos de fondo de la sentencia",
                        "Congruencia",
                        "Exhaustividad",
                        "Fundamentación y motivación",
                        "H:Requisitos de forma de la sentencia",
                        "Vistos",
                        "Resultando",
                        "Considerando",
                        "Puntos resolutivos"
                    ],
                    speaker: "Mgdo. Juan Carlos Ortega Castro",
                    type: "theory"
                },
                {
                    date: "Jueves 01 de octubre",
                    topics: [
                        "H:Experiencias del grupo con el Cumplimento y Ejecución de las Sentencias de Amparo.",
                        "Cumplimiento Inmediato",
                        "Notificación",
                        "Plazo",
                        "Reparación del daño",
                        "Incumplimiento"
                    ],
                    speaker: "Dr. Johnny Morales Martínez",
                    type: "experience"
                },
                {
                    date: "Jueves 08 de octubre",
                    topics: [
                        "H:Elaboración de una Demanda de Amparo.",
                        "Revisión colectiva y retroalimentación",
                        "Consejos prácticos para la vida profesional"
                    ],
                    speaker: "Mgdo. Jesús Báez Rivas",
                    type: "workshop"
                }
            ]
        }
    ];

    const descriptionSections = [
        {
            title: null,
            content: "El Diplomado en Juicio de Amparo ha sido diseñado con un rigor técnico de vanguardia, orientado a dotar al postulante de las herramientas teóricas y estratégicas indispensables para dominar el control de constitucionalidad en sus vertientes directa e indirecta. No se trata solo de conocer la norma, sino de articularla con precisión quirúrgica en la práctica forense."
        },
        {
            title: "Metodología Práctica y Argumentativa",
            content: "A través de talleres de litigación estratégica, los participantes perfeccionarán la técnica de redacción y estructuración de demandas de amparo. El programa guía paso a paso al jurista en la construcción de conceptos de violación sólidos, permitiéndole desarrollar una argumentación jurídica técnica, eficaz y orientada a la protección máxima de los derechos fundamentales de sus representados."
        },
        {
            title: "Excelencia Académica y Criterio Jurisdiccional",
            content: "La formación está respaldada por un cuerpo docente de primer nivel, integrado por Jueces de Distrito y Magistrados de Circuito —tanto en activo como en retiro y especialistas en amparo—. Esta cercanía con la judicatura federal ofrece una oportunidad única: comprender la génesis de los criterios jurisprudenciales y las mejores prácticas operativas directamente de quienes han delineado el rumbo de la justicia constitucional en México."
        },
        {
            title: "Estrategia Forense y Redacción",
            content: "Ejercicios de redacción real orientados a la estrategia forense. Aprenderás a identificar el acto reclamado y a articular defensas constitucionales paso a paso, transformando la teoría en demandas de Amparo Indirecto y Directo con estándares de excelencia jurisprudencial."
        }
    ];

    return (
        <main className="min-h-screen bg-[#F8FAFC] font-display text-slate-800 selection:bg-primary selection:text-navy-deep flex flex-col">
            {/* Enterprise Urgent Bar */}
            <div className="bg-urgent-red text-white text-[10px] md:text-xs font-bold py-2 px-6 text-center uppercase tracking-widest relative z-[60]">
                INSCRIPCIONES ABIERTAS
            </div>

            <Header />

            {/* ═══════════════════ PREMIUM HERO ═══════════════════ */}
            <section className="relative bg-navy-deep pt-20 pb-28 md:pt-28 md:pb-36 border-b border-navy-border overflow-hidden">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/diplomadoamparo.png"
                        alt="Derecho Constitucional Justicia"
                        fill
                        className="object-cover object-center opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/80 to-navy-deep z-10"></div>
                </div>

                {/* Deco Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none z-10"></div>
                <div className="absolute -left-32 top-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-10"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#b89445] text-navy-deep text-xs font-bold uppercase tracking-[0.15em] px-4 py-1.5 mb-6 rounded shadow-lg">
                            <Shield className="w-4 h-4" />
                            Alta Especialización 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl font-serif">
                            Diplomado en <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Amparo</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-2xl leading-relaxed max-w-2xl font-light drop-shadow-lg mb-8 border-l-4 border-primary pl-6">
                            Un programa de amparo de alto nivel, diseñado para la actualización profesional de abogados postulantes. Nuestro enfoque principal es la técnica procesal, el litigio estratégico y la argumentación jurídica aplicada a problemas reales.
                        </p>

                        <div className="flex items-center gap-3 text-primary font-bold text-sm md:text-base border border-primary/20 bg-primary/5 px-6 py-3 rounded-xl mb-10 w-fit">
                            <PenTool className="w-5 h-5" />
                            <span>Incluye Taller Práctico: Elaboración de Demanda de Amparo Directo e Indirecto</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
                            <div className="flex items-center gap-2 bg-navy-card/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>Inicia: 23 de abril, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 bg-navy-card/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>6 meses | Jueves | 5:00 p.m. a 8:00 p.m. | Hora de Baja California</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ MAIN CONTENT GRID ═══════════════════ */}
            <div className="max-w-7xl mx-auto px-6 relative z-30 -mt-10 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column (Content) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Premium About Card */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-navy-deep mb-6 font-serif flex items-center gap-3">
                                <Gavel className="w-8 h-8 text-primary" />
                                Domina el Control Constitucional
                            </h2>
                            <div className="space-y-8 text-slate-700 leading-relaxed text-lg">
                                {descriptionSections.map((section, i) => (
                                    <div key={i} className="relative">
                                        {section.title && (
                                            <h3 className="font-bold text-navy-deep text-xl mb-3 flex items-center gap-3">
                                                <span className="w-1.5 h-6 bg-primary rounded-full shrink-0"></span>
                                                {section.title}
                                            </h3>
                                        )}
                                        <p className={`${!section.title ? 'text-xl text-navy-deep/90 font-medium bg-slate-50 p-6 rounded-xl border-l-4 border-primary shadow-sm mb-8' : 'font-light pl-4.5 border-l border-slate-100'}`}>
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Key Highlights - Vertical Stack for Better Balance */}
                            <div className="mt-12 space-y-4">
                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-6 hover:bg-slate-100/50 transition-colors group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <PenTool className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-deep mb-2 text-base uppercase tracking-wider flex items-center gap-2">
                                            Talleres Prácticos
                                            <span className="h-px w-8 bg-primary/30"></span>
                                        </h4>
                                        <p className="text-slate-600 font-light leading-relaxed">
                                            Ejercicios de redacción real orientados a la estrategia forense. Aprenderás a identificar el acto reclamado y a articular defensas constitucionales paso a paso, transformando la teoría en demandas de Amparo Indirecto y Directo con estándares de excelencia jurisprudencial.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-8 bg-white rounded-2xl border border-slate-100 flex items-start gap-6 hover:bg-slate-50 transition-colors group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Award className="w-7 h-7 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-deep mb-2 text-base uppercase tracking-wider flex items-center gap-2">
                                            Valor Curricular
                                            <span className="h-px w-8 bg-primary/30"></span>
                                        </h4>
                                        <p className="text-slate-600 font-light leading-relaxed">
                                            Al concluir satisfactoriamente el programa, se expide un diploma con valor curricular avalado por el Centro de Estudios AUA, el cual certifica tus competencias técnicas y horas de especialización.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ═══════════════════ ENTERPRISE SYLLABUS ═══════════════════ */}
                        <div className="space-y-8" id="temario">
                            <div className="flex items-end justify-between border-b border-slate-200 pb-4">
                                <div>
                                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Programa Académico 2026</span>
                                    <h2 className="text-3xl font-bold text-navy-deep font-serif">
                                        Temario y Cuerpo Docente
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-12">
                                {modules.map((mod) => (
                                    <div
                                        key={mod.number}
                                        ref={(el) => { moduleRefs.current[mod.number] = el; }}
                                        className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-200 overflow-hidden relative group transition-all"
                                    >
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-navy-deep group-hover:bg-primary transition-colors"></div>

                                        {/* Module Header */}
                                        <button
                                            onClick={() => setOpenModule(openModule === mod.number ? null : mod.number)}
                                            className="w-full bg-slate-50/80 p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center gap-4 justify-between text-left transition-all"
                                        >
                                            <div>
                                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                                                    Módulo <span className="text-navy-deep bg-slate-200 px-2 py-0.5 rounded font-bold text-xs">{String(mod.number).padStart(2, '0')}</span>
                                                </div>
                                                <h3 className="font-bold text-navy-deep text-xl md:text-2xl">{mod.title}</h3>
                                            </div>
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center transition-colors">
                                                {openModule === mod.number
                                                    ? <Minus className="w-4 h-4 text-primary" />
                                                    : <Plus className="w-4 h-4 text-slate-400" />
                                                }
                                            </div>
                                        </button>

                                        {/* Sessions List */}
                                        {openModule === mod.number && (
                                            <div className="divide-y divide-slate-100">
                                                {mod.sessions.map((session, sidx) => (
                                                    <div key={sidx} className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:items-start hover:bg-slate-50/50 transition-colors">

                                                        {/* Date & Type Bubble */}
                                                        <div className="shrink-0 lg:w-48 lg:border-r border-slate-200 lg:pr-6 flex lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-4">
                                                            <div className="text-left lg:text-right">
                                                                <p className="text-[13px] font-medium text-slate-500 uppercase tracking-wider">Fecha</p>
                                                                <p className="font-bold text-sm text-navy-deep">{session.date}</p>
                                                            </div>
                                                            {session.type === 'workshop' && (
                                                                <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded inline-flex items-center gap-1">
                                                                    <FileText className="w-3 h-3" /> Taller Práctico
                                                                </span>
                                                            )}
                                                            {session.type === 'experience' && (
                                                                <span className="bg-blue-100 text-blue-700 border border-blue-200 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded inline-flex items-center gap-1">
                                                                    <Users className="w-3 h-3" /> Panel / Mesa
                                                                </span>
                                                            )}
                                                        </div>

                                                        {/* Content & Instructor */}
                                                        <div className="flex-grow space-y-6">
                                                            <div className="space-y-4">
                                                                {session.topics.map((topic, tidx) => {
                                                                    const isHeading = topic.startsWith('H:');
                                                                    const cleanTopic = isHeading ? topic.substring(2) : topic;

                                                                    if (isHeading) {
                                                                        return (
                                                                            <h4 key={tidx} className="font-bold text-navy-deep text-sm mt-4 first:mt-0 mb-2">
                                                                                {cleanTopic}
                                                                            </h4>
                                                                        );
                                                                    }

                                                                    return (
                                                                        <div key={tidx} className="flex gap-3 text-sm leading-relaxed text-slate-700 font-normal">
                                                                            <span className="text-primary mt-1.5 shrink-0">
                                                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                                            </span>
                                                                            <span>{cleanTopic}</span>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>

                                                            {/* Instructor Highlight */}
                                                            {session.speaker && (
                                                                <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-white border border-slate-200 px-4 py-3 rounded-xl shadow-sm">
                                                                    <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                                                                        <UserCircle className="w-6 h-6 text-slate-400" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">Ponente Magistral</p>
                                                                        <p className="font-bold text-navy-deep text-sm flex items-center gap-1.5">
                                                                            {session.speaker}
                                                                            {session.speaker.includes('Mgdo') || session.speaker.includes('Juez') || session.speaker.includes('Magistrado') ? (
                                                                                <Shield className="w-3.5 h-3.5 text-primary" />
                                                                            ) : null}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Sticky Form) */}
                    <div id="formulario-registro" className="lg:col-span-4 mt-8 lg:-mt-16 relative z-40 scroll-mt-24">
                        <div className="sticky top-28 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
                            <div className="p-6 bg-navy-deep text-center space-y-2 border-b-4 border-primary">
                                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20 inline-block mb-2">Regístrate</span>
                                <h3 className="text-2xl font-bold text-white font-serif">Solicita tu Admisión</h3>
                                <p className="text-sm text-slate-400">Reserva tu lugar ahora.</p>
                            </div>
                            <div className="p-1">
                                <CourseRegistrationForm />
                            </div>
                            <div className="bg-slate-50 p-6 border-t border-slate-100">
                                <div className="space-y-3">
                                    <h4 className="text-sm font-bold text-gray-900 border-b border-slate-200 pb-2 uppercase tracking-wider">BENEFICIOS EXCLUSIVOS:</h4>
                                    <div className="space-y-3 pt-1">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-gray-900 font-bold">Acceso al material</p>
                                                <p className="text-xs text-gray-600 leading-tight">Las grabaciones de todas las clases.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <p className="text-sm text-gray-900 font-bold leading-tight">Constancia con valor curricular.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <p className="text-xs text-gray-600 leading-tight">Excelente oportunidad para hacer <span className="text-gray-900 font-bold">networking</span> y compartir con profesionales del sector.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-gray-900 font-bold">Inversión:</p>
                                                <p className="text-xs text-gray-600 leading-tight">¡Pregunta por nuestras promociones y opciones de pago!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ═══════════════════ FAQ SECTION ═══════════════════ */}
            <section className="bg-[#F8FAFC] py-24 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-navy-deep/5 px-4 py-1.5 rounded-full border border-navy-deep/10 mb-4">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-navy-deep font-bold text-[10px] uppercase tracking-widest">Preguntas Frecuentes</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-deep font-serif mb-4">Resolviendo tus dudas</h2>
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
                            <div className="flex items-center gap-2 bg-navy-card/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>Inicia: 23 de abril, 2026</span>
                            </div>
                            <div className="flex items-center gap-2 bg-navy-card/80 backdrop-blur border border-white/10 px-4 py-2 rounded-lg">
                                <Clock className="w-5 h-5 text-primary" />
                                <span>6 meses | Jueves | 5:00 p.m. a 8:00 p.m. | Hora de Baja California</span>
                            </div>
                        </div>
                        <p className="text-slate-600 font-light">Todo lo que necesitas saber sobre el Diplomado en Amparo.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "¿A quién va dirigido?",
                                a: "A abogados postulantes, catedráticos, integrantes del Poder Judicial, colegios y barras de abogados."
                            },
                            {
                                q: "¿Cuál es la modalidad y duración?",
                                a: (
                                    <div className="space-y-2">
                                        <p>Tiene una duración de seis meses y es 100% en línea.</p>
                                        <p className="font-bold">Las clases en vivo son los jueves:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Horario de 5:00 p.m. a 8:00 p.m. (hora de Baja California)</li>
                                            <li>Horario 06:00 PM a 09:00 PM (Hora de CDMX)</li>
                                        </ul>
                                    </div>
                                )
                            },
                            {
                                q: "¿Se ven tanto el amparo directo como el indirecto?",
                                a: "Sí, abordamos ambos mediante módulos específicos y detallados para su tramitación, reglas y particularidades, incluyendo talleres de redacción de demandas y análisis de sentencias."
                            },
                            {
                                q: "¿Se aborda el tema de la suspensión del acto reclamado?",
                                a: "¡Por supuesto! Tendremos una clase específica sobre el tema, además de analizar la suspensión, sus incidentes, garantías y contragarantías a lo largo de los módulos."
                            },
                            {
                                q: "¿Qué valor curricular tiene?",
                                a: "Al concluir satisfactoriamente, recibirás un diploma con valor curricular por 72 horas, avalada por el Centro de Estudios AUA A.C."
                            },
                            {
                                q: "¿Cuál es la inversión y los requisitos?",
                                a: "El costo total es de $14,800.00, con la facilidad de pagar en parcialidades o a meses sin intereses. Para inscribirte, solo necesitas enviarnos una copia escaneada de tu título de licenciatura, certificado de estudios o cédula profesional."
                            }
                        ].map((faq, fidx) => (
                            <div key={fidx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <details className="group">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <h3 className="font-bold text-navy-deep pr-8">{faq.q}</h3>
                                        <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-open:bg-primary group-open:text-navy-deep transition-colors">
                                            <Plus className="w-4 h-4 group-open:hidden" />
                                            <Minus className="w-4 h-4 hidden group-open:block" />
                                        </div>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed font-light border-t border-slate-50 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>

                    {/* Additional Help */}
                    <div className="mt-16 bg-navy-deep p-8 rounded-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-24 bg-primary/5 blur-3xl rounded-full"></div>
                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">¿Tienes más preguntas?</h3>
                        <p className="text-slate-400 mb-8 relative z-10 font-light">Contáctanos directamente por WhatsApp para recibir atención personalizada.</p>
                        <a
                            href="whatsapp://send?phone=526648000011"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-[#b89445] text-navy-deep font-bold px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105 active:scale-95 relative z-10"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Hablar con un Asesor
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ STICKY PROMO BAR (MOBILE ONLY) ═══════════════════ */}
            <div className={`lg:hidden fixed top-24 left-2 right-2 bg-gradient-to-r from-navy-deep to-navy-card border border-primary/30 p-2.5 z-40 flex items-center justify-between shadow-2xl rounded-xl transition-all duration-300 transform ${showStickyPromo ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-8 opacity-0 pointer-events-none'}`}>
                <div className="flex-1 pr-2 min-w-0">
                    <p className="text-primary text-[9.5px] font-black uppercase tracking-tight mb-0.5 flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" /> SOLICITA MÁS INFORMACIÓN
                    </p>
                    <p className="text-white text-[9.5px] leading-[1.2] font-light">
                        Sin compromiso. ¡Pregunta por nuestras <strong className="text-primary font-bold">promociones y opciones de pago</strong>!
                    </p>
                </div>
                <button
                    onClick={() => {
                        document.getElementById('formulario-registro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="shrink-0 bg-primary hover:bg-[#b89445] text-navy-deep font-bold text-[9px] uppercase tracking-wider px-3 py-2 rounded-lg shadow-lg active:scale-95 transition-transform whitespace-nowrap"
                >
                    Me Interesa
                </button>
            </div>

            <Footer />
        </main>
    );
}
