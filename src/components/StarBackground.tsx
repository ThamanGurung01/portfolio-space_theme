import { useEffect, useRef } from "react";

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      isMoving: boolean;
    }[] = [];

    const count = 100;
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        isMoving: Math.random() < 0.4,
      });
    }

    const draw = () => {
      if (!ctx) return;
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.r * 2
        );
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r * 3, 0, Math.PI * 2);
        ctx.fill();

        if (star.isMoving) {
            star.x += star.dx;
            star.y += star.dy;

            if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
            if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
        }
      }
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};
export default StarBackground;
