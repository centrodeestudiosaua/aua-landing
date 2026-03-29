"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, ChevronDown, Loader2 } from "lucide-react";
import { submitRegistration } from "@/app/actions/register";

export default function CourseRegistrationForm() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        secondLastName: "",
        email: "",
        phone: "",
        countryCode: "+52",
        education: "",
        city: "",
        modality: "online"
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

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, "");
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
            3,
            6
        )}-${phoneNumber.slice(6, 10)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            const formattedValue = formatPhoneNumber(value);
            setFormState({
                ...formState,
                [name]: formattedValue
            });
        } else {
            setFormState({
                ...formState,
                [name]: value
            });
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-deep mb-2">¡Registro Exitoso!</h3>
                <p className="text-slate-500 text-sm mb-6">
                    Hemos recibido tus datos. Pronto recibirás un correo con la confirmación.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs font-bold text-primary underline hover:text-navy-deep transition-colors"
                >
                    Registrar a otra persona
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-deep mb-2">Solicita más información</h3>
                <p className="text-slate-500 text-sm mb-8">Completa tus datos y un asesor académico se pondrá en contacto contigo.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nombre Completo *</label>
                        <input
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleChange}
                            required
                            className="w-full bg-slate-50 border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-base sm:text-sm"
                            placeholder="Nombre(s)"
                            type="text"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <input
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-50 border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-base sm:text-sm"
                                placeholder="Apellido Paterno"
                                type="text"
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                name="secondLastName"
                                value={formState.secondLastName}
                                onChange={handleChange}
                                className="w-full bg-slate-50 border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-base sm:text-sm"
                                placeholder="Apellido Materno"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Correo Electrónico *</label>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-slate-50 border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-base sm:text-sm"
                            placeholder="tu@correo.com"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Teléfono *</label>
                        <div className="flex gap-2">
                            <div className="relative w-[110px] shrink-0">
                                <select
                                    name="countryCode"
                                    aria-label="Código de país"
                                    value={formState.countryCode}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 border border-slate-200 rounded px-2.5 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none text-base sm:text-xs transition-all cursor-pointer font-bold"
                                >
                                    <option value="+52">🇲🇽 +52</option>
                                    <option value="+1">🇺🇸 +1</option>
                                    <option value="+1">🇨🇦 +1</option>
                                    <option value="+54">🇦🇷 +54</option>
                                    <option value="+591">🇧🇴 +591</option>
                                    <option value="+55">🇧🇷 +55</option>
                                    <option value="+56">🇨🇱 +56</option>
                                    <option value="+57">🇨🇴 +57</option>
                                    <option value="+506">🇨🇷 +506</option>
                                    <option value="+593">🇪🇨 +593</option>
                                    <option value="+503">🇸🇻 +503</option>
                                    <option value="+502">🇬🇹 +502</option>
                                    <option value="+504">🇭🇳 +504</option>
                                    <option value="+505">🇳🇮 +505</option>
                                    <option value="+507">🇵🇦 +507</option>
                                    <option value="+595">🇵🇾 +595</option>
                                    <option value="+51">🇵🇪 +51</option>
                                    <option value="+598">🇺🇾 +598</option>
                                    <option value="+58">🇻🇪 +58</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400 pointer-events-none" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                className="flex-1 bg-slate-50 border border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-base sm:text-sm"
                                placeholder="(000) 000-0000"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Grado Estudios *</label>
                            <div className="relative">
                                <select
                                    name="education"
                                    aria-label="Grado de Estudios"
                                    value={formState.education}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-slate-50 border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-base sm:text-sm appearance-none"
                                >
                                    <option value="" disabled>Seleccionar...</option>
                                    <option value="Licenciatura">Licenciatura</option>
                                    <option value="Maestría">Maestría</option>
                                    <option value="Doctorado">Doctorado</option>
                                    <option value="Especialidad">Especialidad</option>
                                    <option value="Pasante">Pasante</option>
                                    <option value="Estudiante">Estudiante</option>
                                    <option value="Otros">Otros</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Ciudad *</label>
                            <input
                                type="text"
                                name="city"
                                value={formState.city}
                                onChange={handleChange}
                                required
                                className="w-full bg-slate-50 border-slate-200 rounded px-3 py-2.5 text-navy-deep focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-base sm:text-sm"
                                placeholder="Ej. Tijuana"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Modalidad de Interés *</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="modality"
                                    value="online"
                                    checked={formState.modality === "online"}
                                    onChange={handleChange}
                                    className="text-urgent-red focus:ring-urgent-red border-slate-300"
                                />
                                <span className="text-sm text-navy-deep font-bold transition-colors">Online</span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4">
                        <p className="text-[10px] text-slate-400 leading-tight mb-4 italic">
                            Al enviar, aceptas recibir comunicaciones de AUA sobre este programa.
                        </p>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-urgent-red text-white font-bold py-3.5 rounded shadow-lg shadow-urgent-red/30 hover:bg-red-800 hover:shadow-xl transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                                </>
                            ) : (
                                "Enviar Solicitud"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
