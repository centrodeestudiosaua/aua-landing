import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseRegistrationForm from "@/components/marketing/CourseRegistrationForm";
import { fetchCourseBySlug, fetchAllCourseSlugs } from "@/lib/crm-mcp";
import type { Course, BenefitItem, AudienceItem, SyllabusModule } from "@/lib/crm-mcp";
import {
    ArrowRight, Award, BookOpen, Briefcase, Building2, Calculator,
    Check, CheckCircle2, Clock, CreditCard, Gavel, GraduationCap,
    MessageCircle, Shield, TrendingUp, Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Map icon string names from CRM to actual Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
    Shield, TrendingUp, BookOpen, Clock, GraduationCap, Users,
    Briefcase, Gavel, Calculator, Building2, Award, Check, CreditCard,
    MessageCircle, ArrowRight, CheckCircle2,
};

function getIcon(name: string): LucideIcon {
    return ICON_MAP[name] || BookOpen;
}

// Force dynamic rendering — CRM changes reflect instantly, no cache
export const dynamic = 'force-dynamic';

interface CoursePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
    const { slug } = await params;
    const course = await fetchCourseBySlug(slug);

    if (!course) {
        return { title: 'Curso no encontrado | Centro de Estudios AUA' };
    }

    const plainDescription = (course.long_description || course.description || '').replace(/<[^>]*>/g, '');
    const isCompliance = course.slug.toLowerCase().includes('compliance') || course.title.toLowerCase().includes('compliance');
    const displayTitle = isCompliance ? 'Diplomado en Compliance Laboral' : course.title.replace(/\s*\(?Demo\)?/ig, '');

    return {
        title: `${displayTitle} | Centro de Estudios AUA`,
        description: plainDescription.slice(0, 160),
        keywords: [displayTitle, "cursos jurídicos", "derecho", "AUA", "capacitación legal"],
        openGraph: {
            title: `${displayTitle} | Centro de Estudios AUA`,
            description: plainDescription.slice(0, 160),
            url: `https://www.centrodeestudiosaua.com/cursos/${course.slug}`,
            siteName: "Centro de Estudios AUA",
            images: course.thumbnail_url ? [{
                url: course.thumbnail_url,
                width: 1200, height: 630, alt: displayTitle,
            }] : [],
            locale: "es_MX",
            type: "website",
        },
        alternates: {
            canonical: `https://www.centrodeestudiosaua.com/cursos/${course.slug}`,
        }
    };
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { slug } = await params;
    const course = await fetchCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    const plainDescription = (course.long_description || course.description || '').replace(/<[^>]*>/g, '');
    const descriptionParagraphs = plainDescription.split('\n').filter(p => p.trim());
    const isCompliance = course.slug.toLowerCase().includes('compliance') || course.title.toLowerCase().includes('compliance');
    const displayTitle = isCompliance ? 'Diplomado en Compliance Laboral' : course.title.replace(/\s*\(?Demo\)?/ig, '');
    const courseDescription = isCompliance ? 'Especialízate en la prevención de riesgos laborales y cumplimiento normativo del trabajo.' : (course.description || '');
    const whatsapp = course.whatsapp_number || '526641234567';
    const benefits = course.benefits || [];
    const audience = course.target_audience || [];
    const syllabus = course.syllabus || [];
    const instructor = course.instructor;

    // Construct JSON-LD Schema for Course
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": displayTitle,
        "description": plainDescription,
        "provider": {
            "@type": "Organization",
            "name": "Centro de Estudios AUA",
            "sameAs": "https://www.centrodeestudiosaua.com"
        },
        ...(instructor?.name && {
            "instructor": {
                "@type": "Person",
                "name": instructor.name,
                "jobTitle": instructor.title || "Instructor",
                ...(instructor.photo_url && { "image": instructor.photo_url })
            }
        }),
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "MXN",
            "availability": course.is_published ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "url": `https://www.centrodeestudiosaua.com/cursos/${course.slug}`
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": course.modality?.toLowerCase().includes('online') ? "online" : "blended",
            "courseWorkload": course.duration || "Por definir"
        }
    };

    return (
        <main className="min-h-screen bg-navy-deep font-display text-white selection:bg-primary selection:text-navy-deep flex flex-col">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Urgency Bar */}
            {course.urgency_text && (
                <div className="bg-urgent-red text-white text-[10px] md:text-xs font-bold py-2 px-6 text-center uppercase tracking-widest relative z-[60]">
                    {course.urgency_text}
                </div>
            )}

            <Header />

            {/* ═══════════════════ HERO ═══════════════════ */}
            <section className="relative bg-navy-deep pt-16 pb-20 border-b border-navy-border overflow-hidden">
                {course.thumbnail_url ? (
                    <Image
                        src={course.thumbnail_url}
                        alt={course.title}
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-card to-navy-deep"></div>
                )}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none z-0"></div>
                <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        {course.badge_text && (
                            <span className="inline-block bg-urgent-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 rounded-sm shadow-md">
                                {course.badge_text}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
                            {displayTitle}
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light drop-shadow-md">
                            {courseDescription.replace(/<[^>]*>/g, '')}
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ INFO BAR ═══════════════════ */}
            <div className="bg-white border-b border-slate-200 relative z-20">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {course.start_date && (
                            <div className="pt-4 md:pt-0">
                                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Inicio</span>
                                <p className="text-navy-deep font-bold text-lg">{course.start_date}</p>
                            </div>
                        )}
                        {course.duration && (
                            <div className="pt-4 md:pt-0 md:pl-8">
                                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Duración</span>
                                <p className="text-navy-deep font-bold text-lg">{course.duration}</p>
                            </div>
                        )}
                        <div className="pt-4 md:pt-0 md:pl-8 col-span-2 md:col-span-2">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                                Inversión
                            </span>
                            <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-urgent-red font-bold text-base md:text-lg leading-tight block">
                                    Solicita Programa, Costos y Promociones
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════ MAIN CONTENT ═══════════════════ */}
            <div className="bg-white">
                <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Description */}
                            <div>
                                <h2 className="text-3xl font-bold text-navy-deep mb-6">
                                    Blinda tu empresa ante la autoridad laboral
                                </h2>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
                                    {descriptionParagraphs.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits Grid */}
                            {benefits.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {benefits.map((benefit: BenefitItem, i: number) => {
                                        const IconComponent = getIcon(benefit.icon);
                                        return (
                                            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                                <div className="w-10 h-10 rounded-full bg-navy-deep/10 flex items-center justify-center mb-4 text-navy-deep">
                                                    <IconComponent className="h-5 w-5" />
                                                </div>
                                                <h4 className="font-bold text-navy-deep mb-2">{benefit.title}</h4>
                                                <p className="text-sm text-slate-600">{benefit.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Right Column: Sticky Form */}
                        <div className="lg:col-span-5 relative">
                            <div className="lg:sticky lg:top-28">
                                <CourseRegistrationForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════ TARGET AUDIENCE ═══════════════════ */}
                {audience.length > 0 && (
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
                                            Diseñado para profesionales que buscan excelencia y blindaje jurídico en sus organizaciones.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {audience.map((item: AudienceItem, i: number) => {
                                            const IconComponent = getIcon(item.icon);
                                            return (
                                                <div key={i} className="bg-navy-deep border border-navy-border p-5 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group">
                                                    <div className="w-12 h-12 rounded-lg bg-navy-card flex items-center justify-center group-hover:bg-primary group-hover:text-navy-deep transition-colors text-white">
                                                        <IconComponent className="h-6 w-6" />
                                                    </div>
                                                    <span className="text-white font-bold group-hover:text-primary transition-colors">{item.label}</span>
                                                </div>
                                            );
                                        })}
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
                                                    &quot;El cumplimiento normativo no es opcional. Protégete de multas millonarias y clausuras.&quot;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* ═══════════════════ SYLLABUS ═══════════════════ */}
                {syllabus.length > 0 && (
                    <section className="bg-white py-20 border-t border-slate-100">
                        <div className="max-w-4xl mx-auto px-6">
                            <div className="text-center mb-16">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Contenido Académico</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">
                                    Temario del Programa
                                </h2>
                                <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                                    Estructurado en {syllabus.length} módulos intensivos diseñados para dominar cada área del programa.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {syllabus.map((mod: SyllabusModule) => {
                                    const isHighlighted = mod.is_highlighted;
                                    return (
                                        <div key={mod.module_number} className={`group ${isHighlighted ? 'border border-primary/20 rounded-xl overflow-hidden bg-primary/5' : 'border border-slate-200 rounded-xl overflow-hidden hover:border-primary/30 transition-colors'}`}>
                                            <div className={`flex items-center justify-between p-6 ${isHighlighted ? '' : 'bg-slate-50 group-hover:bg-white transition-colors'} cursor-default`}>
                                                <div className="flex items-center gap-4">
                                                    <span className={`w-10 h-10 rounded-lg ${isHighlighted ? 'bg-urgent-red' : 'bg-navy-deep group-hover:bg-primary group-hover:text-navy-deep'} text-white font-bold flex items-center justify-center text-lg shadow-md transition-colors`}>
                                                        {mod.module_number}
                                                    </span>
                                                    <h3 className="font-bold text-navy-deep text-xl">{mod.title}</h3>
                                                </div>
                                            </div>
                                            <div className={`p-6 pt-${isHighlighted ? '0' : '2'} ${isHighlighted ? '' : 'bg-white'}`}>
                                                {mod.description && (
                                                    <p className="text-slate-500 mb-4 text-sm">{mod.description}</p>
                                                )}
                                                <ul className="space-y-3">
                                                    {mod.topics.map((topic, ti) => (
                                                        <li key={ti} className={`flex items-start gap-3 ${isHighlighted ? 'text-navy-deep font-medium' : 'text-slate-600'}`}>
                                                            <CheckCircle2 className={`h-5 w-5 ${isHighlighted ? 'text-urgent-red' : 'text-primary'} shrink-0 mt-0.5`} />
                                                            <span><strong>{topic.title}:</strong> {topic.detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* ═══════════════════ INSTRUCTOR ═══════════════════ */}
                {instructor && (
                    <section className="bg-navy-deep py-20 border-t border-navy-border relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
                        <div className="max-w-7xl mx-auto px-6 relative z-10">
                            <div className="bg-navy-card border border-navy-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
                                <div className="flex flex-col md:flex-row items-center gap-12">
                                    {/* Photo */}
                                    <div className="relative shrink-0 group">
                                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-navy-deep shadow-2xl">
                                            <Image
                                                src={instructor.photo_url}
                                                alt={instructor.name}
                                                fill
                                                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    {/* Text */}
                                    <div className="text-center md:text-left space-y-6">
                                        <div>
                                            {instructor.badge && (
                                                <div className="inline-flex items-center gap-2 mb-3 bg-navy-deep/50 px-3 py-1 rounded-full border border-navy-border">
                                                    <Award className="h-4 w-4 text-primary" />
                                                    <span className="text-primary font-bold tracking-wider uppercase text-xs">{instructor.badge}</span>
                                                </div>
                                            )}
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                                                {instructor.name}
                                            </h2>
                                            <p className="text-slate-400 font-medium text-lg border-b border-white/5 pb-4 inline-block">
                                                {instructor.title}
                                            </p>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed text-lg max-w-2xl font-light">
                                            {instructor.bio}
                                        </p>
                                        {instructor.credentials && instructor.credentials.length > 0 && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                                {instructor.credentials.map((credential, i) => (
                                                    <div key={i} className="flex items-center gap-3 bg-navy-deep/50 p-4 rounded-lg border border-navy-border">
                                                        {i === 0 ? <Briefcase className="h-5 w-5 text-blue-400" /> : <Award className="h-5 w-5 text-blue-400" />}
                                                        <span className="text-sm text-slate-300 font-medium">{credential}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <Footer />
        </main>
    );
}
