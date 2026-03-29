"use client";

import { useState } from "react";
import { ChevronDown, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { submitContact } from "@/app/actions/register";

export default function ContactForm() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const eventId = crypto.randomUUID();

        // Pixel client-side (deduplicación con CAPI)
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Lead', { content_name: 'Contacto General' }, { eventID: eventId });
        }

        const formData = new FormData();
        Object.entries(formState).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append('eventId', eventId);

        try {
            const result = await submitContact(null, formData);
            if (result.success) {
                setIsSuccess(true);
            } else {
                alert(result.message || "Hubo un error al enviar el mensaje.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Error de conexión. Intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="border-l-2 border-primary pl-6 md:pl-8 py-2 relative">
            {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 block">Nombre</label>
                            <input
                                name="firstName"
                                value={formState.firstName}
                                onChange={handleChange}
                                required
                                className="w-full bg-[rgba(26,26,53,0.6)] border border-[rgba(197,160,89,0.3)] rounded-sm px-4 py-3.5 text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-light outline-none"
                                placeholder="Su nombre"
                                type="text"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 block">Apellido</label>
                            <input
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-[rgba(26,26,53,0.6)] border border-[rgba(197,160,89,0.3)] rounded-sm px-4 py-3.5 text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-light outline-none"
                                placeholder="Su apellido"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 block">Email Institucional *</label>
                        <input
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-[rgba(26,26,53,0.6)] border border-[rgba(197,160,89,0.3)] rounded-sm px-4 py-3.5 text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-light outline-none"
                            placeholder="nombre@organizacion.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 block">Motivo de Contacto</label>
                        <div className="relative">
                            <select
                                name="reason"
                                value={formState.reason}
                                onChange={handleChange}
                                className="w-full bg-[rgba(26,26,53,0.6)] border border-[rgba(197,160,89,0.3)] rounded-sm px-4 py-3.5 text-white focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-light outline-none appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Seleccione una opción</option>
                                <option value="maestrias">Información sobre Maestrías</option>
                                <option value="cursos">Cursos Ejecutivos</option>
                                <option value="alianzas">Alianzas Corporativas</option>
                                <option value="otro">Otro</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-2 block">Mensaje</label>
                        <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-[rgba(26,26,53,0.6)] border border-[rgba(197,160,89,0.3)] rounded-sm px-4 py-3.5 text-white placeholder-slate-500 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-light outline-none resize-none h-24"
                            placeholder="¿En qué podemos asistirle?"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-urgent-red hover:bg-red-800 text-white font-bold py-4 px-6 shadow-lg shadow-urgent-red/20 transition-all uppercase tracking-[0.15em] text-xs flex items-center justify-between group rounded-sm border border-transparent hover:border-red-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</span>
                            ) : (
                                <>
                                    Enviar Solicitud
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="bg-[rgba(26,26,53,0.6)] border border-[rgba(197,160,89,0.3)] p-8 rounded-sm text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Mensaje Recibido</h3>
                    <p className="text-slate-400 font-light mb-6 text-sm">
                        Gracias por contactar a AUA Centro de Estudios. Un asesor especializado se pondrá en contacto con usted brevemente.
                    </p>
                    <button
                        onClick={() => { setIsSuccess(false); setFormState({ firstName: "", lastName: "", email: "", reason: "", message: "" }); }}
                        className="text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            )}
        </div>
    );
}
