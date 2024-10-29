"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative bg-blue-50 py-16 px-6 text-center overflow-hidden">
      {/* Background Image with Motion */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1664303246428-bd684ae01231?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGxlYXJuaW5nfGVufDB8fDB8fHww")',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Learn Anytime, Anywhere with Our LMS
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg text-white mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Access hundreds of high-quality courses across various fields, led by
          expert instructors. Flexible learning tailored to your needs!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            variant="solid"
            className={cn(
              "bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold"
            )}
          >
            Start Your Learning Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
