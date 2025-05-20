import React from "react";
import { motion } from "framer-motion";

import { THEMES } from "../constants/index"; // Adjust import path as needed

const DecorativeSide = () => {
  return (
    <div className="
      hidden md:flex flex-col items-center justify-center 
      w-full mt-10 p-8 text-current
      
      /* Theme-adaptive background */
      bg-gradient-to-br 
      from-[hsl(var(--b1))] to-[hsl(var(--b2))]
      
      /* Glass effect */
      backdrop-blur-sm bg-opacity-80
      
      /* Theme-adaptive text contrast */
      [&_.theme-text]:text-[hsl(var(--bc))]
      [&_.theme-muted]:text-[hsl(var(--pc))]
    ">
      {/* App branding */}
      <div className="theme-text text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">ChatterPoP™</h1>
        <p className="text-xl theme-muted">Where conversations come alive</p>
      </div>

      {/* Feature highlights */}
      <div className="w-full max-w-md space-y-6 theme-text">
        {[
          { icon: "💬", title: "Real-time Messaging", desc: "Chat instantly with friends" },
          { icon: "🖼️", title: "Rich Media Sharing", desc: "Share photos and files" },
          { icon: "🔒", title: "End-to-End Encryption", desc: "Private and secure" }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex items-start"
          >
            <div className="
              p-3 rounded-full mr-4
              bg-[hsl(var(--nf))] bg-opacity-20
              text-[hsl(var(--nc))]
            ">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm theme-muted">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated chat bubbles */}
      <div className="mt-12 relative w-full max-w-xs h-40">
        {[
          { text: "Hey there! 👋 Ready to chat?", pos: "left-0 top-0" },
          { text: "ChatterPoP™ is awesome! 🚀", pos: "right-0 top-16" },
          { text: "Join the conversation!", pos: "left-8 top-32" }
        ].map((bubble, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10 - (i * 5), 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute ${bubble.pos} 
              rounded-tl-2xl rounded-tr-2xl 
              ${i % 2 ? 'rounded-bl-2xl' : 'rounded-br-2xl'} 
              p-4 max-w-xs
              bg-[hsl(var(--pf))] bg-opacity-20
              text-[hsl(var(--pc))]
            `}
          >
            <p className="text-sm">{bubble.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DecorativeSide;