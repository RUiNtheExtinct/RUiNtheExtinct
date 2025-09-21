"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { CanvasTexture } from "three";

function LightStars({
	count = 1000,
	radius = 60,
}: {
	count?: number;
	radius?: number;
}) {
	const positions = useMemo(() => {
		const pos = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			const r = radius * Math.cbrt(Math.random());
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			const x = r * Math.sin(phi) * Math.cos(theta);
			const y = r * Math.sin(phi) * Math.sin(theta);
			const z = r * Math.cos(phi);
			pos[i * 3 + 0] = x;
			pos[i * 3 + 1] = y;
			pos[i * 3 + 2] = z;
		}
		return pos;
	}, [count, radius]);

	const baseColor = [15 / 255, 23 / 255, 42 / 255]; // slate-900-ish
	const colors = useMemo(() => new Float32Array(count * 3), [count]);
	const phases = useMemo(() => {
		const arr = new Float32Array(count);
		for (let i = 0; i < count; i++) arr[i] = Math.random() * Math.PI * 2;
		return arr;
	}, [count]);
	const freqs = useMemo(() => {
		const arr = new Float32Array(count);
		for (let i = 0; i < count; i++) arr[i] = 0.5 + Math.random() * 0.8; // 0.5..1.3 Hz-like
		return arr;
	}, [count]);

	// circular sprite texture for round stars
	const circleTexture = useMemo(() => {
		const size = 64;
		const c = document.createElement("canvas");
		c.width = size;
		c.height = size;
		const ctx = c.getContext("2d");
		if (ctx) {
			const g = ctx.createRadialGradient(
				size / 2,
				size / 2,
				0,
				size / 2,
				size / 2,
				size / 2
			);
			g.addColorStop(0, "rgba(255,255,255,1)");
			g.addColorStop(0.5, "rgba(255,255,255,0.5)");
			g.addColorStop(1, "rgba(255,255,255,0)");
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
			ctx.fill();
		}
		const tex = new CanvasTexture(c);
		tex.needsUpdate = true;
		return tex;
	}, []);

	const groupRef = useRef<any>(null);
	useFrame((state, delta) => {
		if (groupRef.current) groupRef.current.rotation.z += delta * 0.02;
		const t = state.clock.getElapsedTime();
		for (let i = 0; i < count; i++) {
			const flicker = 0.75 + 0.25 * Math.sin(t * freqs[i] + phases[i]); // 0.75..1.0
			colors[i * 3 + 0] = baseColor[0] * flicker;
			colors[i * 3 + 1] = baseColor[1] * flicker;
			colors[i * 3 + 2] = baseColor[2] * flicker;
		}
		// @ts-ignore - ref the first child geometry if available
		const geo = groupRef.current?.children?.[0]?.geometry;
		if (geo && geo.attributes.color)
			geo.attributes.color.needsUpdate = true;
	});

	return (
		<group ref={groupRef}>
			<points frustumCulled>
				<bufferGeometry>
					<bufferAttribute
						attach="attributes-position"
						args={[positions, 3]}
					/>
					<bufferAttribute
						attach="attributes-color"
						args={[colors, 3]}
					/>
				</bufferGeometry>
				<pointsMaterial
					map={circleTexture as any}
					vertexColors
					size={0.3}
					sizeAttenuation
					transparent
					opacity={0.18}
					depthWrite={false}
				/>
			</points>
		</group>
	);
}

export default function HeroBackground() {
	return (
		<div className="absolute inset-0 -z-10 pointer-events-none">
			{/* Dark mode: starfield */}
			<div className="hidden dark:block absolute inset-0">
				<Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
					<Suspense fallback={null}>
						<Stars
							radius={60}
							depth={50}
							count={1200}
							factor={4}
							saturation={0}
							fade
							speed={0.6}
						/>
					</Suspense>
				</Canvas>
			</div>

			{/* Light mode: subtle darker stars */}
			<div className="block dark:hidden absolute inset-0">
				<Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
					<Suspense fallback={null}>
						<LightStars count={1100} radius={60} />
					</Suspense>
				</Canvas>
			</div>
		</div>
	);
}
