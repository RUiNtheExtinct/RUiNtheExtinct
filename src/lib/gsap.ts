"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function ensureGsapRegistered() {
    if (registered || typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
}

export { gsap, ScrollTrigger };


