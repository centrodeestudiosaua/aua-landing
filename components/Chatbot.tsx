"use client";

import { useEffect, useState } from "react";

const CHAT_SCRIPT_ID = "aua-crm-chat-script";
const CHAT_WIDGET_TAG = "crm-chat-widget";
const AGENT_ID = "2bb23134-f24b-43d7-a79f-b97476e178e5";
const WHATSAPP_FALLBACK_URL =
  "https://wa.me/526648000011?text=Hola%2C%20quiero%20asesoria%20directa%20sobre%20los%20programas%20de%20AUA";

declare global {
  interface Window {
    toggleCRMChat?: () => void;
  }
}

function openWhatsAppFallback() {
  window.open(WHATSAPP_FALLBACK_URL, "_blank", "noopener,noreferrer");
}

function announceChatStatus(status: "ready" | "unavailable") {
  window.dispatchEvent(new CustomEvent(`aua-chat-${status}`));
}

export default function Chatbot() {
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let readinessTimer: number | undefined;

    const markUnavailable = () => {
      if (cancelled) return;
      setIsWidgetReady(false);
      window.toggleCRMChat = openWhatsAppFallback;
      announceChatStatus("unavailable");
    };

    const markReady = () => {
      if (cancelled) return;
      setIsWidgetReady(true);
      announceChatStatus("ready");
    };

    const waitForWidgetDefinition = () => {
      readinessTimer = window.setTimeout(() => {
        if (!customElements.get(CHAT_WIDGET_TAG)) {
          markUnavailable();
        }
      }, 5000);

      customElements
        .whenDefined(CHAT_WIDGET_TAG)
        .then(() => {
          if (readinessTimer) {
            window.clearTimeout(readinessTimer);
          }
          markReady();
        })
        .catch(markUnavailable);
    };

    window.toggleCRMChat = openWhatsAppFallback;

    const existingScript = document.getElementById(
      CHAT_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (customElements.get(CHAT_WIDGET_TAG)) {
      markReady();
    } else if (existingScript) {
      existingScript.addEventListener("error", markUnavailable, { once: true });
      waitForWidgetDefinition();
    } else {
      const script = document.createElement("script");
      script.id = CHAT_SCRIPT_ID;
      script.src = "https://crm.aitijuana.studio/chat-widget-v2.js";
      script.type = "module";
      script.async = true;
      script.addEventListener("load", waitForWidgetDefinition, { once: true });
      script.addEventListener("error", markUnavailable, { once: true });
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      if (readinessTimer) {
        window.clearTimeout(readinessTimer);
      }
    };
  }, []);

  if (!isWidgetReady) {
    return null;
  }

  return <crm-chat-widget agent-id={AGENT_ID} />;
}
