import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Política de Privacidad | Centro de Estudios AUA',
    description: 'Política de Privacidad y manejo de datos personales del Centro de Estudios AUA.',
    openGraph: {
        title: 'Política de Privacidad | Centro de Estudios AUA',
        description: 'Política de Privacidad y manejo de datos personales.',
        url: 'https://www.centrodeestudiosaua.com/privacidad',
        siteName: 'Centro de Estudios AUA',
        locale: 'es_MX',
        type: 'website',
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-[#0B1D3F] py-12 text-center text-white">
                <div className="container mx-auto px-4">
                    <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Volver al Inicio
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold">Política de Privacidad</h1>
                    <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
                        Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>
            </div>

            <article className="container mx-auto px-4 py-16 max-w-4xl text-slate-700 leading-relaxed shadow-sm bg-white my-[-2rem] rounded-2xl relative z-10 p-8 md:p-12">

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">1. Introducción</h2>
                    <p className="mb-4">
                        Centro de Estudios AUA, A.C. ("nosotros", "nuestro/a") se compromete a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web o utiliza nuestros servicios, incluyendo nuestro Chatbot y formularios de registro, en cumplimiento con las normativas de Facebook y las leyes aplicables de protección de datos.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">2. Información que Recopilamos</h2>
                    <p className="mb-4">Recopilamos información que usted nos proporciona directamente:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li><strong>Datos de Identificación:</strong> Nombre, apellidos, dirección de correo electrónico, número de teléfono, profesión, ciudad y nivel de estudios.</li>
                        <li><strong>Datos de Interacción:</strong> Información enviada a través de nuestro Chatbot inteligente o formularios de contacto.</li>
                        <li><strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, sistema operativo y datos de navegación mediante cookies y píxeles de seguimiento (incluyendo el Facebook Pixel y API de Conversiones).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">3. Uso de la Información</h2>
                    <p className="mb-4">La información recopilada se utiliza para:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>Procesar su registro a nuestros cursos y eventos.</li>
                        <li>Generar constancias y documentos académicos.</li>
                        <li>Responder a sus consultas a través de nuestro soporte o Chatbot.</li>
                        <li>Enviar información relevante sobre actualizaciones, cursos y noticias (si ha dado su consentimiento).</li>
                        <li>Mejorar nuestro sitio web y analizar la efectividad de nuestras campañas publicitarias en Facebook e Instagram.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">4. Compartir Información con Terceros</h2>
                    <p className="mb-4">
                        No vendemos su información personal. Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio, tales como:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li><strong>Meta Platforms, Inc. (Facebook):</strong> Utilizamos Facebook Pixel y Conversions API para medir la efectividad de nuestros anuncios. Los datos (como email o teléfono) pueden ser enviados de forma encriptada (hashed) a Facebook para fines de atribución y creación de audiencias.</li>
                        <li><strong>Plataformas CRM y de Email Marketing:</strong> Para gestionar nuestra relación con usted y el envío de comunicaciones.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">5. Sus Derechos (Derechos ARCO)</h2>
                    <p className="mb-4">
                        Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales. Para ejercer estos derechos, por favor contáctenos a través de los medios proporcionados en este sitio web.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">6. Seguridad de los Datos</h2>
                    <p className="mb-4">
                        Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">7. Eliminación de Datos (Facebook Data Deletion)</h2>
                    <p className="mb-4">
                        De acuerdo con las políticas de Facebook, si desea solicitar la eliminación de sus datos recopilados a través de nuestra aplicación o sitio web, puede contactarnos directamente a nuestro correo de contacto oficial y procesaremos su solicitud en un plazo razonable.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B1D3F] mb-4">8. Cambios a esta Política</h2>
                    <p className="mb-4">
                        Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le notificaremos cualquier cambio publicando la nueva política en esta página.
                    </p>
                </section>

                <div className="border-t pt-8 mt-12 text-sm text-slate-500">
                    <p>Si tiene preguntas sobre esta Política de Privacidad, contáctenos.</p>
                </div>

            </article>
        </main>
    );
}
