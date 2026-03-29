import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Diplomado en Amparo | Alta Especialización',
    description: 'Programa avanzado guiado por especialistas en amparo, Jueces y Magistrados.',
    keywords: ["Diplomado en Amparo", "Amparo", "Derecho Constitucional", "Amparo Directo", "Amparo Indirecto", "AUA", "Derecho"],
    openGraph: {
        title: 'Diplomado en Amparo | Alta Especialización',
        description: 'Programa avanzado guiado por especialistas en amparo, Jueces y Magistrados.',
        url: 'https://www.centrodeestudiosaua.com/cursos/diplomado-en-amparo',
        siteName: "Centro de Estudios AUA",
        images: [{
            url: "https://www.centrodeestudiosaua.com/diplomadoazul.jpeg",
            width: 1600, height: 900, alt: "Diplomado en Amparo"
        }],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: 'Diplomado en Amparo | Alta Especialización',
        description: 'Programa avanzado guiado por especialistas en amparo, Jueces y Magistrados.',
        images: ["https://www.centrodeestudiosaua.com/diplomadoazul.jpeg"],
    },
    alternates: {
        canonical: 'https://www.centrodeestudiosaua.com/cursos/diplomado-en-amparo',
    }
};

export default function AmparoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
