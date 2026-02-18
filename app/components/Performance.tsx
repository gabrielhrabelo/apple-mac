"use client";

import { useRef } from "react";
import { performanceImages } from "../constants/index";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // --- Text fade-in (all screen sizes) ---
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top 85%",
            end: "top 55%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        },
      );

      // --- Image scrub timeline (desktop only) ---
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "top -50%",
            scrub: true,
          },
        });

        const getOffset = (id: string) => {
          switch (id) {
            case "p1":
              return { x: "20vw", y: "15vh" };
            case "p2":
              return { x: "-20vw", y: "30vh" };
            case "p3":
              return { x: "-25vw", y: "10vh" };
            case "p4":
              return { x: "-30vw", y: "-10vh" };
            case "p6":
              return { x: "20vw", y: "5vh" };
            case "p7":
              return { x: "25vw", y: "-15vh" };
            default:
              return { x: 0, y: 0 };
          }
        };

        performanceImages.forEach(({ id }) => {
          // Skip p5 (central hero image)
          if (id === "p5") return;

          const { x, y } = getOffset(id);

          tl.fromTo(
            `.${id}`,
            {
              opacity: 0,
              x,
              y,
              scale: 0.5,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              ease: "power2.out",
            },
            0, // all start at time 0 for simultaneous scrub
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>
      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <div key={id} className={`${id}`}>
            <Image src={src} alt={id} fill />
          </div>
        ))}
      </div>
      <div className="content">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster,{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization - driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
}
