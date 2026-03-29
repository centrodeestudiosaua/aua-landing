import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Benefits from "@/components/Benefits";
import Syllabus from "@/components/Syllabus";
import Agenda from "@/components/Agenda";
import Pricing from "@/components/Pricing";
import RegistrationForm from "@/components/RegistrationForm";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Curso Protocolo STPS | AUA",
    description: "Curso especializado en el Protocolo de Inspección STPS y Subcontratación.",
};

export default function CursoPage() {
    return (
        <main className="min-h-screen py-6 px-4 md:px-6 max-w-[1400px] mx-auto space-y-6 pb-24 md:pb-6">
            <Navbar />
            <Hero />
            <TargetAudience />
            <Benefits />
            <Syllabus />
            <Agenda />
            <Pricing />
            <RegistrationForm />
            <Instructor />
            <Footer />
        </main>
    );
}
