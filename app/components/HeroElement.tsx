"use client"
import RightArrow from "@/app/icons/rightArrow";
import { motion } from "motion/react";

export default function Hero() {
    const smallLines = ["AI-first ERP powering next gen finance and accounting. General ledger," , "revenue automation, close management"];
    const heroLines = ["Build for fast", "moving business"]
    return <div className="text-white">
       {heroLines.map((line , j) => (
         <div key={j} className="flex">
            {line.split(' ').map((word , i) => (
            <motion.div
            key={word}
            initial = {{
                y : 20,
                opacity : 0
            }}
            animate = {{
                y : -20,
                opacity : 1,
                transition : {
                    delay : (j == 0) ? i * 0.1 : 0.4 + i * 0.1
                }
            }}
            className="text-6xl font-semibold">
                    {word}<span>&nbsp;</span>
            </motion.div>
            ))}
        </div>
       ))}
       <br />
       <div>
            {smallLines.map((line , i) => (
                <motion.div
                    key={i}
                    initial = {{
                        y : 20,
                        opacity : 0
                    }}
                    animate = {{
                        y : -20,
                        opacity : 1,
                        transition : {
                            delay : 0.9 + i * 0.5
                        }
                    }}
                >
                    {line}
                </motion.div>
            ))}
       </div>
       <br />
       <motion.button 
       initial = {{
        y : 10,
        opacity : 0
       }}
       animate = {{
        y : -1,
        opacity : 1,
        transition : {
            delay : 1.7
        }
        }}
       className="flex gap-2 items-center bg-[#cbd957] text-black px-3 py-3 rounded-full cursor-pointer">
            Get Started <RightArrow />
       </motion.button>
    </div>
}