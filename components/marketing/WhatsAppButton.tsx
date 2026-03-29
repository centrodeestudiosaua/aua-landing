"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

declare global {
    interface Window {
        toggleCRMChat?: () => void;
    }
}

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatAvailable, setIsChatAvailable] = useState(false);
    const phoneNumber = "526648000011";

    useEffect(() => {
        const getChatContainers = () =>
            Array.from(
                document.querySelectorAll<HTMLElement>(
                    "#crm-chat-widget-container, body > div[id^='flowise-']"
                )
            );

        const syncWidgetVisibility = () => {
            const isVisible = getChatContainers().some((element) => {
                const rect = element.getBoundingClientRect();
                const styles = window.getComputedStyle(element);

                return (
                    styles.display !== "none" &&
                    styles.visibility !== "hidden" &&
                    styles.opacity !== "0" &&
                    rect.width > 160 &&
                    rect.height > 160
                );
            });

            setIsOpen(isVisible);
            document.body.classList.toggle("crm-chat-open", isVisible);
        };

        const handleOpened = () => {
            setIsOpen(true);
            document.body.classList.add("crm-chat-open");
        };
        const handleClosed = () => {
            setIsOpen(false);
            document.body.classList.remove("crm-chat-open");
        };
        const handleReady = () => setIsChatAvailable(true);
        const handleUnavailable = () => {
            setIsChatAvailable(false);
            setIsOpen(false);
            document.body.classList.remove("crm-chat-open");
        };

        const observer = new MutationObserver(syncWidgetVisibility);

        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true,
        });

        window.addEventListener("resize", syncWidgetVisibility);

        window.addEventListener('aua-chat-opened', handleOpened);
        window.addEventListener('aua-chat-closed', handleClosed);
        window.addEventListener('aua-chat-ready', handleReady);
        window.addEventListener('aua-chat-unavailable', handleUnavailable);

        syncWidgetVisibility();

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", syncWidgetVisibility);
            window.removeEventListener('aua-chat-opened', handleOpened);
            window.removeEventListener('aua-chat-closed', handleClosed);
            window.removeEventListener('aua-chat-ready', handleReady);
            window.removeEventListener('aua-chat-unavailable', handleUnavailable);
            document.body.classList.remove("crm-chat-open");
        };
    }, []);

    const handleToggle = () => {
        if (window.toggleCRMChat) {
            window.toggleCRMChat();
            if (!isChatAvailable) {
                return;
            }
        }

        if (!isChatAvailable) {
            window.open(
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola, quiero asesoria directa sobre los programas de AUA")}`,
                "_blank",
                "noopener,noreferrer"
            );
            return;
        }

        setIsOpen((current) => !current);
    };

    return (
        <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end font-sans transition-opacity duration-200 ${isOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleToggle}
                className={`${isOpen ? 'bg-slate-800' : 'bg-[#00D981]'} h-12 sm:h-14 rounded-full shadow-lg flex items-center justify-center gap-2 px-5 sm:px-7 text-white transition-all duration-300 relative`}
                aria-label={isChatAvailable ? "Abrir chat de asesoria" : "Abrir WhatsApp de asesoria"}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <>
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                        <span className="font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
                            ASESORIA DIRECTA
                        </span>
                    </>
                )}
            </motion.button>
        </div>
    );
}
