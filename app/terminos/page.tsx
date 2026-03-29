import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Términos y Condiciones | Centro de Estudios AUA',
    description: 'Términos y Condiciones de servicio del Centro de Estudios AUA.',
    openGraph: {
        title: 'Términos y Condiciones | Centro de Estudios AUA',
        description: 'Conoce los términos y condiciones de nuestros servicios educativos.',
        url: 'https://www.centrodeestudiosaua.com/terminos',
        siteName: 'Centro de Estudios AUA',
        locale: 'es_MX',
        type: 'website',
    },
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-[#0B1D3F] py-12 text-center text-white">
                <div className="container mx-auto px-4">
                    <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Volver al Inicio
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold">Términos y Condiciones</h1>
                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>

            <article className="container mx-auto px-4 py-16 max-w-4xl text-slate-700 leading-relaxed shadow-sm bg-white my-[-2rem] rounded-2xl relative z-10 p-8 md:p-12">

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">1. Aceptación de los Términos</h2>
                    <p className="mb-4">
                        Al acceder y utilizar el sitio web y los servicios de Centro de Estudios AUA, A.C., usted acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, por favor no utilice nuestros servicios.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">2. Descripción del Servicio</h2>
                    <p className="mb-4">
                        Centro de Estudios AUA ofrece programas de capacitación, cursos y diplomados (en modalidades presencial y en línea) enfocados en materia laboral, cumplimiento normativo y desarrollo profesional.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">3. Registro y Pagos</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li><strong>Inscripción:</strong> Para inscribirse en nuestros cursos, debe proporcionar información veraz y completa mediante nuestros formularios de registro.</li>
                        <li><strong>Pagos:</strong> Los pagos por cursos deben realizarse según las tarifas vigentes publicadas en nuestro sitio web. Nos reservamos el derecho de modificar los precios en cualquier momento (respetando los pagos ya realizados).</li>
                        <li><strong>Política de Reembolso:</strong> Salvo que se especifique lo contrario, las inscripciones no son reembolsables pero pueden ser transferibles a otra persona con previo aviso.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">4. Propiedad Intelectual</h2>
                    <p className="mb-4">
                        Todo el contenido proporcionado en nuestros cursos, incluyendo manuales, presentaciones, videos y materiales digitales, es propiedad exclusiva de Centro de Estudios AUA o de sus instructores y está protegido por las leyes de propiedad intelectual.
                    </p>
                    <p className="mb-4 bg-yellow-50 p-4 border-l-4 border-yellow-400">
                        <strong>Restricción de Uso:</strong> Queda estrictamente prohibida la reproducción, distribución o venta no autorizada de nuestros materiales educativos.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">5. Código de Conducta</h2>
                    <p className="mb-4">
                        Esperamos que todos los participantes mantengan un comportamiento profesional y respetuoso durante las sesiones (presenciales o virtuales). Nos reservamos el derecho de retirar del curso, sin reembolso, a cualquier participante que incurra en comportamientos ofensivos o disruptivos.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">6. Limitación de Responsabilidad</h2>
                    <p className="mb-4">
                        La información impartida en nuestros cursos tiene fines educativos e informativos. No constituye asesoría legal formal para casos específicos. Centro de Estudios AUA no se hace responsable por las decisiones tomadas o acciones realizadas basadas únicamente en la información de nuestros cursos.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">7. Modificaciones</h2>
                    <p className="mb-4">
                        Podemos revisar estos términos de servicio en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar vinculado por la versión actual de estos Términos y Condiciones.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">8. Ley Aplicable</h2>
                    <p className="mb-4">
                        Cualquier reclamación relacionada con nuestro sitio web o servicios se regirá por las leyes de México, sin tener en cuenta sus conflictos de disposiciones legales.
                    </p>
                </section>

            </article>
        </main>
    );
}
