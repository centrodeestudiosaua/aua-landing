"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full py-20 bg-[#0B1D3F] text-white overflow-hidden font-sans rounded-[2.5rem] shadow-2xl mx-auto">
      {/* Background with Flyer Colors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a3b70] via-[#0B1D3F] to-[#050e1f] opacity-80" />

      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#EAB308]/20 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
        />
      </div>

      <div className="container relative px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8 z-10">

        <div className="space-y-6 max-w-5xl flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight uppercase leading-none drop-shadow-2xl text-white">
            COMO ATENDER Y DAR CUMPLIMIENTO A UNA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] via-[#fcd34d] to-[#EAB308] mt-2 filter drop-shadow-lg">
              INSPECCIÓN DE LA STPS
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full bg-[#EAB308]/10 border border-[#EAB308]/20 px-8 py-3 backdrop-blur-sm shadow-[0_0_20px_-5px_rgba(234,179,8,0.3)]"
          >
            <ShieldCheck className="h-6 w-6 text-[#EAB308]" />
            <span className="text-base md:text-lg font-bold text-[#EAB308] tracking-widest uppercase shadow-black/50 drop-shadow-md">
              PROTOCOLO DE SUBCONTRATACIÓN
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-blue-100 max-w-3xl mx-auto tracking-wide"
          >
            Prepárate en Cumplimiento Normativo!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8"
        >
          <Link
            href="#registro"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#EAB308] to-[#ca8a04] px-10 font-bold text-[#0B1D3F] shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(234,179,8,0.7)]"
          >
            <span className="relative z-10 flex items-center text-lg tracking-wider">
              REGISTRARME AHORA
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
