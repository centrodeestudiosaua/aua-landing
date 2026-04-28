import crypto from 'node:crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '2810857109108749';
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

// Helper to hash data (SHA-256)
const hashData = (data: string) => {
    if (!data) return null;
    return crypto.createHash('sha256').update(data).digest('hex');
};

type UserData = {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    clientIp?: string;
    userAgent?: string;
    fbc?: string;
    fbp?: string;
};

export async function sendFbEvent(
    eventName: string,
    userData: UserData,
    customData: Record<string, unknown> = {},
    eventId?: string,
    eventSourceUrl: string = 'https://www.centrodeestudiosaua.com/',
    testEventCode?: string
) {
    if (!ACCESS_TOKEN) {
        console.warn('FB_ACCESS_TOKEN is not set. Event not sent to CAPI.');
        return;
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const payload = {
        test_event_code: testEventCode,
        data: [
            {
                event_name: eventName,
                event_time: currentTimestamp,
                event_id: eventId,
                event_source_url: eventSourceUrl.substring(0, 2048), // Truncate to safe limit
                action_source: 'website',
                user_data: {
                    em: userData.email ? [hashData(userData.email.trim().toLowerCase())] : undefined,
                    ph: userData.phone ? [hashData(userData.phone.trim().replace(/\D/g, ''))] : undefined,
                    fn: userData.firstName ? [hashData(userData.firstName.trim().toLowerCase())] : undefined,
                    ln: userData.lastName ? [hashData(userData.lastName.trim().toLowerCase())] : undefined,
                    ct: userData.city ? [hashData(userData.city.trim().toLowerCase().replace(/\s/g, ''))] : undefined,
                    client_ip_address: userData.clientIp || undefined,
                    client_user_agent: userData.userAgent ? userData.userAgent.substring(0, 512) : undefined, // Truncate UA
                    fbc: userData.fbc || undefined,
                    fbp: userData.fbp || undefined,
                },
                custom_data: customData,
            },
        ],
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('FB CAPI Error:', errorText);
        } else {
            console.log(`FB CAPI Event '${eventName}' sent successfully.`);
        }
    } catch (error) {
        console.error('Network Error sending FB CAPI event:', error);
    }
}
