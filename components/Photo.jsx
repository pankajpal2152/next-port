"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.5, ease: "easeIn" },
                }}
            >
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.5, duration: 0.5, ease: "easeInOut" },
                    }}
                    className="w-[291px] h-[291px] xl:w-[491px] xl:h-[491px] mix-blend-lighten absolute"
                >
                    <Image
                        src="/assets/profile_image-removebg.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain"
                    />
                </motion.div>

                {/* circle */}
                <motion.svg
                    className="w-[301px] h-[301px] xl:w-[501px] xl:h-[501px]"
                    fill="transparent"
                    viewBox="1 1 511 511"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="251"
                        cy="251"
                        r="251"
                        stroke="#00ff99"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 11 1 1" }}
                        animate={{
                            strokeDasharray: ["15 121 25 25", "16 25 92 72", "4 251 22 22"],
                            rotate: [121, 361],
                            rotate: [121, 361],
                        }}
                        transition={{
                            duration: 21,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;