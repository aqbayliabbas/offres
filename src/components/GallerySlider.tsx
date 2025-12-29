"use client";

import { motion } from "framer-motion";

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
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

            <motion.div
                className="flex gap-6 w-max"
                animate={{
                    x: [0, -100 * images.length * 8 - (6 * (images.length - 1))], // Rough calculation for width
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedImages.map((src, i) => (
                    <div
                        key={i}
                        className="w-[300px] md:w-[450px] aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 shadow-2xl shrink-0 group"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${i}`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
