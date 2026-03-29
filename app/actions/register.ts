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

    return {
        success: true,
        message: 'Solicitud recibida',
    };
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

    return {
        success: true,
        message: 'Mensaje recibido',
    };
}
