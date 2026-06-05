"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calcular la distancia desde el centro de la pantalla (-0.5 a 0.5)
      const offsetX = (clientX / innerWidth) - 0.5;
      const offsetY = (clientY / innerHeight) - 0.5;

      // Desplazamiento máximo sutil de 25px en dirección opuesta
      const moveX = offsetX * -25;
      const moveY = offsetY * -25;

      document.body.style.setProperty("--bg-offset-x", `${moveX}px`);
      document.body.style.setProperty("--bg-offset-y", `${moveY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        {/* Logo de la Marca */}
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.png"
            alt="Logo de Trazamapas"
            width={320}
            height={64}
            className={styles.logo}
            priority
          />
        </div>

        {/* Insignia / Estado */}
        <span className={styles.badge} id="status-badge">
          Sitio en construcción
        </span>

        {/* Título / Tagline */}
        <h1 className={styles.title} id="main-heading">
          Trazando tu próximo destino
        </h1>

        {/* Descripción */}
        <p className={styles.description}>
          Estamos diseñando una nueva experiencia digital para ayudarte a trazar y planificar tus viajes más memorables. Conectando rutas, descubriendo el mundo.
        </p>

        {/* Progreso de la Ruta */}
        <div className={styles.routeContainer} aria-labelledby="route-progress-label">
          <div className={styles.routeLabel} id="route-progress-label">
            <span>Trazando ruta del sitio web</span>
            <strong>60% Completado</strong>
          </div>
          <div className={styles.routeTrack}>
            <div className={styles.routeProgress} style={{ width: "60%" }} />
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Trazamapas. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
