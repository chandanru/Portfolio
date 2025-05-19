import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dirX: number;
  dirY: number;
  size: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Colors
    const colors = ['#4338ca', '#6d28d9', '#8b5cf6', '#ec4899'];
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 100);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const dirX = Math.random() * 0.4 - 0.2;
      const dirY = Math.random() * 0.4 - 0.2;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particlesArray.push({ x, y, dirX, dirY, size, color });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];

        p.x += p.dirX;
        p.y += p.dirY;
        
        // Bouncing off the edges
        if (p.x > canvas.width || p.x < 0) {
          p.dirX *= -1;
        }
        
        if (p.y > canvas.height || p.y < 0) {
          p.dirY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.3;
        ctx.fill();
        
        // Connect particles
        connectParticles(p, particlesArray);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    const connectParticles = (p1: Particle, particles: Particle[]) => {
      const maxDistance = 100;
      
      for (let i = 0; i < particles.length; i++) {
        const p2 = particles[i];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = p1.color;
          ctx.globalAlpha = 0.2 * (1 - distance / maxDistance);
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;