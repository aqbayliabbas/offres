"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/hotel_room_luxury_1_1767018821447.png",
    "/hotel_lobby_luxury_2_1767018839639.png",
    "/hotel_pool_luxury_3_1767018857348.png",
    "/hotel_facade_luxury_4_1767018874326.png",
    "/hotel_restaurant_luxury_5_1767018891385.png",
];

export default function GallerySlider() {
    // Duplicate images for infinite scroll effect
    const duplicatedImages = [...images, ...images];

    return (
        <section className="py-24 bg-[#F5F5F7] overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F5F5F7] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F5F5F7] to-transparent z-10" />

            <motion.div
                className="flex gap-8 w-max pl-6"
                animate={{
                    x: [0, "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 50,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedImages.map((src, i) => (
                    <div
                        key={i}
                        className="w-[300px] md:w-[450px] aspect-[16/10] rounded-[24px] overflow-hidden bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-black/5 shrink-0 group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
                    >
                        <Image
                            src={src}
                            alt={`Gallery ${i}`}
                            width={450}
                            height={280}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
