"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "526648000011";

    const handleToggle = () => {
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hola, quiero asesoria directa sobre los programas de AUA")}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end font-sans transition-opacity duration-200 opacity-100">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleToggle}
                className="bg-[#00D981] h-12 sm:h-14 rounded-full shadow-lg flex items-center justify-center gap-2 px-5 sm:px-7 text-white transition-all duration-300 relative"
                aria-label="Abrir WhatsApp de asesoria"
            >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                <span className="font-bold text-sm sm:text-base tracking-wide whitespace-nowrap">
                    ASESORIA DIRECTA
                </span>
            </motion.button>
        </div>
    );
}
