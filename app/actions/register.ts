'use server';

import { cookies, headers } from 'next/headers';
import { sendFbEvent } from '@/lib/fb-events';


type FormResult = {
    success: boolean;
    message: string;
};

function hasValue(value: FormDataEntryValue | null) {
    return typeof value === 'string' && value.trim().length > 0;
}

export async function submitRegistration(_prevState: unknown, formData: FormData): Promise<FormResult> {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
    const missingField = requiredFields.find((field) => !hasValue(formData.get(field)));

    if (missingField) {
        return {
            success: false,
            message: 'Completa los campos requeridos antes de enviar el formulario.',
        };
    }

    const city = formData.get('city') as string || '';
    const educationLevel = formData.get('education') as string || '';
    const modality = formData.get('modality') as string || '';

    const cookieStore = await cookies();
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = headersList.get('user-agent') || '';
    const fbp = cookieStore.get('_fbp')?.value;
    const fbc = cookieStore.get('_fbc')?.value;

    try {
        const payload = {
            firstName: (formData.get('firstName') as string || '').trim(),
            lastName: (formData.get('lastName') as string || '').trim(),
            maternalLastName: (formData.get('secondLastName') as string || '').trim(),
            email: (formData.get('email') as string || '').trim(),
            phone: (formData.get('phone') as string || '').replace(/\D/g, ''),
            countryCode: (formData.get('countryCode') as string || '+52').replace('+', ''),
            educationLevel,
            city,
            courseSlug: 'diplomado-en-amparo',
            source: 'landing_admision_amparo',
            notes: `Modalidad preferida: ${modality}`
        };

        // FB CAPI Tracking
        await sendFbEvent(
            'Lead',
            {
                email: payload.email,
                phone: payload.countryCode + payload.phone,
                firstName: payload.firstName,
                lastName: payload.lastName,
                city: payload.city,
                clientIp: ip,
                userAgent: userAgent,
                fbp,
                fbc,
            },
            {
                content_name: 'Registro Diplomado en Amparo',
                education_level: payload.educationLevel,
                modality: modality,
            }
        );

        const response = await fetch("https://alumnos.centrodeestudiosaua.com/api/leads/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            return { success: false, message: 'Hubo un error al registrar. Intenta nuevamente.' };
        }

        return {
            success: true,
            message: 'Registro exitoso',
        };
    } catch (e) {
        return { success: false, message: 'Error de conexión.' };
    }
}

export async function submitContact(_prevState: unknown, formData: FormData): Promise<FormResult> {
    const requiredFields = ['firstName', 'lastName', 'email', 'message'];
    const missingField = requiredFields.find((field) => !hasValue(formData.get(field)));

    if (missingField) {
        return {
            success: false,
            message: 'Completa los campos requeridos antes de enviar el formulario.',
        };
    }

    const reason = formData.get('reason') as string || '';
    const message = formData.get('message') as string || '';

    const cookieStore = await cookies();
    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = headersList.get('user-agent') || '';
    const fbp = cookieStore.get('_fbp')?.value;
    const fbc = cookieStore.get('_fbc')?.value;

    try {
        const payload = {
            firstName: (formData.get('firstName') as string || '').trim(),
            lastName: (formData.get('lastName') as string || '').trim(),
            maternalLastName: "",
            email: (formData.get('email') as string || '').trim(),
            phone: "",
            countryCode: "52",
            educationLevel: "",
            city: "",
            courseSlug: 'contacto_general',
            source: 'landing_contacto',
            notes: `Motivo: ${reason} | Mensaje: ${message}`
        };

        // FB CAPI Tracking
        await sendFbEvent(
            'Contact',
            {
                email: payload.email,
                firstName: payload.firstName,
                lastName: payload.lastName,
                clientIp: ip,
                userAgent: userAgent,
                fbp,
                fbc,
            },
            {
                content_name: 'Contacto General',
                reason: reason,
            }
        );

        const response = await fetch("https://alumnos.centrodeestudiosaua.com/api/leads/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            return { success: false, message: 'Hubo un error al enviar el mensaje. Intenta nuevamente.' };
        }

        return {
            success: true,
            message: 'Mensaje recibido',
        };
    } catch (e) {
        return { success: false, message: 'Error de conexión.' };
    }
}
