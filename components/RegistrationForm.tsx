"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, User, Mail, Phone, GraduationCap, MapPin, Monitor, Sparkles, ChevronDown } from "lucide-react";

import { submitRegistration } from "@/app/actions/register";

export default function RegistrationForm() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        secondLastName: "",
        email: "",
        phone: "",
        education: "",
        city: "",
        modality: "presencial"
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        Object.entries(formState).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const result = await submitRegistration(null, formData);

            if (result.success) {
                setIsSuccess(true);
            } else {
                alert(result.message || "Hubo un error al registrar.");
            }

        } catch (error) {
            console.error("Submission error:", error);
            alert("Error de conexión. Intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="registro" className="w-full py-20 bg-gradient-to-b from-slate-50 to-white font-sans relative">
            <div className="container px-4 md:px-6 mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-slate-200 bg-white"
                >

                    {/* Header / Context */}
                    <div className="bg-[#0B1D3F] p-8 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EAB308]/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none" />

                        <h3 className="text-3xl font-serif font-bold mb-4 flex items-center justify-center gap-3">
                            <Sparkles className="text-[#EAB308]" /> Registro al Curso
                        </h3>
                        <p className="text-blue-100 text-sm leading-relaxed max-w-lg mx-auto">
                            Corroborar que su información esté correcta. Su <span className="text-[#EAB308] font-bold">CONSTANCIA</span> se elaborará con estos datos.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="p-8 md:p-10">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0B1D3F] mb-3">¡Registro Exitoso!</h3>
                                    <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                                        Hemos recibido tus datos. Pronto recibirás un correo con la confirmación.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-sm font-bold text-[#0B1D3F] underline decoration-[#EAB308] hover:text-blue-700"
                                    >
                                        Registrar a otra persona
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-[#0B1D3F] uppercase tracking-wider flex items-center gap-2 mb-2">
                                            <User className="h-3.5 w-3.5 text-[#EAB308]" /> Nombre Completo del Participante
                                        </label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            <div className="space-y-1">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    required
                                                    value={formState.firstName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all placeholder:text-slate-400 text-[#0B1D3F] font-medium"
                                                    placeholder="Nombre(s) *"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    required
                                                    value={formState.lastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all placeholder:text-slate-400 text-[#0B1D3F] font-medium"
                                                    placeholder="Apellido Paterno *"
                                                />
                                            </div>
                                            <div className="space-y-1">
                                                <input
                                                    type="text"
                                                    name="secondLastName"
                                                    value={formState.secondLastName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all placeholder:text-slate-400 text-[#0B1D3F] font-medium"
                                                    placeholder="Apellido Materno"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0B1D3F] uppercase tracking-wider flex items-center gap-2">
                                                <Mail className="h-3.5 w-3.5 text-blue-500" /> Correo <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all placeholder:text-slate-400 text-[#0B1D3F]"
                                                placeholder="tu@correo.com"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0B1D3F] uppercase tracking-wider flex items-center gap-2">
                                                <Phone className="h-3.5 w-3.5 text-blue-500" /> Teléfono <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formState.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all placeholder:text-slate-400 text-[#0B1D3F]"
                                                placeholder="(664) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    {/* Location & Edu Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0B1D3F] uppercase tracking-wider flex items-center gap-2">
                                                <GraduationCap className="h-3.5 w-3.5 text-blue-500" /> Grado Estudios <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="education"
                                                    required
                                                    value={formState.education}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all text-[#0B1D3F] appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled className="text-slate-400">Selecciona tu grado...</option>
                                                    <option value="Licenciatura">Licenciatura</option>
                                                    <option value="Maestría">Maestría</option>
                                                    <option value="Doctorado">Doctorado</option>
                                                    <option value="Especialidad">Especialidad</option>
                                                    <option value="Pasante">Pasante</option>
                                                    <option value="Estudiante">Estudiante</option>
                                                    <option value="Bachillerato">Bachillerato</option>
                                                    <option value="Otro">Otro</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-[#0B1D3F] uppercase tracking-wider flex items-center gap-2">
                                                <MapPin className="h-3.5 w-3.5 text-blue-500" /> Ciudad <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formState.city}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#EAB308] focus:ring-4 focus:ring-[#EAB308]/10 outline-none transition-all placeholder:text-slate-400 text-[#0B1D3F]"
                                                placeholder="Ej. Tijuana"
                                            />
                                        </div>
                                    </div>

                                    {/* Modality Selection */}
                                    <div className="space-y-2 pt-2">
                                        <label className="text-xs font-bold text-[#0B1D3F] uppercase tracking-wider flex items-center gap-2">
                                            <Monitor className="h-3.5 w-3.5 text-[#EAB308]" /> Modalidad <span className="text-red-500">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <label className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${formState.modality === 'presencial'
                                                ? 'bg-[#0B1D3F]/5 border-[#EAB308] shadow-md ring-1 ring-[#EAB308]'
                                                : 'bg-white border-slate-200 hover:border-[#EAB308]/50'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    name="modality"
                                                    value="presencial"
                                                    checked={formState.modality === 'presencial'}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center absolute top-3 right-3 ${formState.modality === 'presencial' ? 'border-[#EAB308]' : 'border-slate-300'
                                                    }`}>
                                                    {formState.modality === 'presencial' && <div className="w-2 h-2 rounded-full bg-[#EAB308]" />}
                                                </div>
                                                <MapPin className={`h-6 w-6 ${formState.modality === 'presencial' ? 'text-[#0B1D3F]' : 'text-slate-400'}`} />
                                                <span className={`font-bold text-sm ${formState.modality === 'presencial' ? 'text-[#0B1D3F]' : 'text-slate-500'}`}>Presencial</span>
                                            </label>

                                            <label className={`relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border cursor-pointer transition-all ${formState.modality === 'online'
                                                ? 'bg-blue-50 border-blue-500 shadow-md ring-1 ring-blue-500'
                                                : 'bg-white border-slate-200 hover:border-blue-500/50'
                                                }`}>
                                                <input
                                                    type="radio"
                                                    name="modality"
                                                    value="online"
                                                    checked={formState.modality === 'online'}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center absolute top-3 right-3 ${formState.modality === 'online' ? 'border-blue-500' : 'border-slate-300'
                                                    }`}>
                                                    {formState.modality === 'online' && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                                                </div>
                                                <Monitor className={`h-6 w-6 ${formState.modality === 'online' ? 'text-blue-600' : 'text-slate-400'}`} />
                                                <span className={`font-bold text-sm ${formState.modality === 'online' ? 'text-blue-900' : 'text-slate-500'}`}>En Línea</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#EAB308] to-[#ca8a04] text-[#0B1D3F] font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                                    >
                                        {isSubmitting ? (
                                            <span className="animate-pulse">Enviando...</span>
                                        ) : (
                                            <>
                                                CONFIRMAR ASISTENCIA <Send className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>

                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
