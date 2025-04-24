"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  // This is a simplified map visualization
  // In a real implementation, you would use a mapping library like Google Maps, Mapbox, or Leaflet
  useEffect(() => {
    if (!mapRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = mapRef.current.clientWidth;
    canvas.height = mapRef.current.clientHeight;
    mapRef.current.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw a stylized map background
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "#121B30");
    gradient.addColorStop(1, "#0A1128");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines
    ctx.strokeStyle = "rgba(123, 66, 246, 0.2)";
    ctx.lineWidth = 1;

    // Horizontal lines
    for (let y = 20; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Vertical lines
    for (let x = 20; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Draw location marker
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Outer pulse animation
    let pulseRadius = 0;
    let pulseOpacity = 0.8;

    const animate = () => {
      // Clear the area for the pulse
      ctx.clearRect(centerX - 50, centerY - 50, 100, 100);

      // Redraw the background for the cleared area
      ctx.fillStyle = gradient;
      ctx.fillRect(centerX - 50, centerY - 50, 100, 100);

      // Redraw grid lines in the cleared area
      ctx.strokeStyle = "rgba(123, 66, 246, 0.2)";
      ctx.lineWidth = 1;

      // Horizontal lines
      for (
        let y = Math.floor((centerY - 50) / 40) * 40;
        y < centerY + 50;
        y += 40
      ) {
        if (y >= centerY - 50 && y <= centerY + 50) {
          ctx.beginPath();
          ctx.moveTo(centerX - 50, y);
          ctx.lineTo(centerX + 50, y);
          ctx.stroke();
        }
      }

      // Vertical lines
      for (
        let x = Math.floor((centerX - 50) / 40) * 40;
        x < centerX + 50;
        x += 40
      ) {
        if (x >= centerX - 50 && x <= centerX + 50) {
          ctx.beginPath();
          ctx.moveTo(x, centerY - 50);
          ctx.lineTo(x, centerY + 50);
          ctx.stroke();
        }
      }

      // Draw pulse circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 255, ${pulseOpacity})`;
      ctx.fill();

      // Update pulse
      pulseRadius += 0.5;
      pulseOpacity -= 0.01;

      if (pulseRadius > 30) {
        pulseRadius = 0;
        pulseOpacity = 0.8;
      }

      // Draw marker
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#7B42F6";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#00E5FF";
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (mapRef.current && mapRef.current.contains(canvas)) {
        mapRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden border border-accent-purple/30 shadow-xl h-[300px] mb-8"
    >
      <div ref={mapRef} className="w-full h-full relative">
        <div className="absolute bottom-4 right-4 bg-secondary-bg/80 backdrop-blur-sm rounded-lg p-3 border border-accent-purple/30 text-sm">
          <div className="font-bold">NexusGraph Headquarters</div>
          <div className="text-secondary-text">
            123 Tech Plaza, San Francisco, CA 94105
          </div>
        </div>
      </div>
    </motion.div>
  );
}
