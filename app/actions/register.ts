'use server';

import { headers, cookies } from 'next/headers';
import { sendFbEvent } from '@/lib/fb-events';

export async function submitRegistration(prevState: any, formData: FormData) {
    const cookieStore = await cookies();
    const headersList = await headers();

    const ip = headersList.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = headersList.get('user-agent') || '';
    const fbp = cookieStore.get('_fbp')?.value || undefined;
    let fbc = cookieStore.get('_fbc')?.value || undefined;

    const fbclid = formData.get('fbclid') as string;
    if (!fbc && fbclid) {
        fbc = `fb.1.${Date.now()}.${fbclid}`;
    }

    const countryCodePrefix = (formData.get('countryCode') as string || '').replace('+', '');
    const phoneDigits = (formData.get('phone') as string || '').replace(/\D/g, '');
    const fullPhone = countryCodePrefix + phoneDigits;

    const rawData = {
        firstName: (formData.get('firstName') as string || '').trim(),
        lastName: (formData.get('lastName') as string || '').trim(),
        secondLastName: (formData.get('secondLastName') as string || '').trim(),
        email: (formData.get('email') as string || '').toLowerCase().trim(),
        phone: fullPhone,
        education: (formData.get('education') as string || '').trim(),
        city: (formData.get('city') as string || '').trim(),
        modality: (formData.get('modality') as string || '').trim(),
    };

    // 1. Send to FB CAPI
    const referer = headersList.get('referer') || '';
    const origin = headersList.get('origin') || '';
    const requestUrl = origin || referer || 'https://www.centrodeestudiosaua.com/';

    const eventId = (formData.get('eventId') as string) || crypto.randomUUID();

    try {
        await sendFbEvent(
            'Lead',
            {
                email: rawData.email,
                phone: rawData.phone,
                firstName: rawData.firstName,
                lastName: rawData.lastName,
                city: rawData.city,
                clientIp: ip,
                userAgent: userAgent,
                fbp,
                fbc,
            },
            {
                content_name: 'Registro Curso 2026',
                status: 'registered',
                education_level: rawData.education,
                modality: rawData.modality,
            },
            eventId,
            requestUrl
        );
    } catch (e) {
        console.error('Failed to send FB Event', e);
    }

    // 2. Send to CRM
    // Robust name construction without extra spaces if fields are missing
    const fullName = [rawData.firstName, rawData.lastName, rawData.secondLastName]
        .filter(Boolean)
        .join(' ')
        .trim();

    const crmPayload: any = {
        name: fullName,
        email: rawData.email,
        phone: rawData.phone,
        source: 'Facebook Ads',
        campaign_id: 'b94df5f9-8716-46bf-a60d-1558d01214c9',
        event_id: eventId,
        external_lead_id: eventId,
        fbp: fbp,
        fbc: fbc,
        event_source_url: (formData.get('event_source_url') as string) || requestUrl,
        form_id: 'registro_curso_2026',
        form_name: 'Formulario Landing Cursos',
        metadata: {
            education_level: rawData.education,
            city: rawData.city,
            mode: rawData.modality,
            first_name: rawData.firstName,
            last_name: rawData.lastName,
        }
    };

    const trackingFields = [
        { key: 'lead_id', val: formData.get('lead_id') },
        { key: 'fbclid', val: formData.get('fbclid') },
        { key: 'ad_id', val: formData.get('ad_id') || formData.get('utm_id') },
        { key: 'adset_id', val: formData.get('adset_id') },
        { key: 'campaign_name', val: formData.get('campaign_name') || formData.get('utm_campaign') },
        { key: 'page_id', val: formData.get('page_id') },
    ];

    trackingFields.forEach(({ key, val }) => {
        if (val) crmPayload[key] = val as string;
    });


    try {
        const webhookUrl = process.env.CRM_API_URL || 'https://crm.aitijuana.studio/api/leads';

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sk-3ygg7q43ijo9pq0opzzkfs'
            },
            body: JSON.stringify(crmPayload),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('CRM Error:', text);
            if (text.includes('duplicate key value holds true') || text.includes('unique constraint') || text.includes('duplicate')) {
                return { success: false, message: 'Este correo ya se encuentra registrado. Pronto un asesor te contactará.' };
            }
            return { success: false, message: 'Error al procesar el registro en el CRM.' };
        }

        return { success: true, message: 'Registro exitoso' };

    } catch (error) {
        console.error('CRM Network Error:', error);
        return { success: false, message: 'Error de conexión con CRM.' };
    }

}

export async function submitContact(prevState: any, formData: FormData) {
    const cookieStore = await cookies();
    const headersList = await headers();

    const ip = headersList.get('x-forwarded-for') || '127.0.0.1';
    const userAgent = headersList.get('user-agent') || '';
    const fbp = cookieStore.get('_fbp')?.value;
    let fbc = cookieStore.get('_fbc')?.value;

    const fbclid = formData.get('fbclid') as string;
    if (!fbc && fbclid) {
        fbc = `fb.1.${Date.now()}.${fbclid}`;
    }

    const rawData = {
        firstName: (formData.get('firstName') as string || '').trim(),
        lastName: (formData.get('lastName') as string || '').trim(),
        email: (formData.get('email') as string || '').toLowerCase().trim(),
        reason: (formData.get('reason') as string || '').trim(),
        message: (formData.get('message') as string || '').trim(),
    };

    const eventId = (formData.get('eventId') as string) || crypto.randomUUID();
    const referer = headersList.get('referer') || '';
    const origin = headersList.get('origin') || '';
    const requestUrl = origin || referer || 'https://www.centrodeestudiosaua.com/';

    try {
        await sendFbEvent(
            'Lead',
            {
                email: rawData.email,
                firstName: rawData.firstName,
                lastName: rawData.lastName,
                clientIp: ip,
                userAgent: userAgent,
                fbp,
                fbc,
            },
            {
                content_name: 'Contacto General',
                reason: rawData.reason,
            },
            eventId,
            requestUrl
        );
    } catch (e) {
        console.error('Failed to send FB Event', e);
    }

    const fullName = [rawData.firstName, rawData.lastName].filter(Boolean).join(' ').trim();

    const crmPayload = {
        name: fullName,
        email: rawData.email,
        source: 'Landing Page AUA (Contacto)',
        campaign_id: '1339dbf6-f34b-40c8-ba47-0709a6b57972',
        metadata: {
            reason: rawData.reason,
            message: rawData.message,
            form_id: 'contacto_general',
        }
    };

    try {
        const webhookUrl = process.env.CRM_API_URL || 'https://crm.aitijuana.studio/api/leads';
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'sk-3ygg7q43ijo9pq0opzzkfs'
            },
            body: JSON.stringify(crmPayload),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('CRM Error:', text);
            if (text.includes('duplicate key value holds true') || text.includes('unique constraint') || text.includes('duplicate')) {
                return { success: false, message: 'Ya hemos recibido un mensaje de este correo. Te contactaremos a la brevedad.' };
            }
            return { success: false, message: 'Error al enviar el mensaje al CRM.' };
        }

        return { success: true, message: 'Mensaje enviado exitosamente' };

    } catch (error) {
        console.error('CRM Network Error:', error);
        return { success: false, message: 'Error de conexión con CRM.' };
    }
}
