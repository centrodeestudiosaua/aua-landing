'use server';

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

    try {
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

    try {
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
