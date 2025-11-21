"use client";

import { Float, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const POINT_COUNT = 1500;

const StarField = (props: any) => {
	const ref = useRef<THREE.Points>(null);
	const materialRef = useRef<THREE.PointsMaterial | null>(null);
	const pointerState = useRef({ x: 0, y: 0, speed: 0 });
	const [sphere] = useState(() => {
		// Create array with 3 elements per point (x, y, z)
		const array = new Float32Array(POINT_COUNT * 3);
		return random.inSphere(array, { radius: 1.5 });
	});
	const initialPositions = useRef(new Float32Array(sphere));
	const velocityField = useMemo(
		() =>
			random.inSphere(new Float32Array(POINT_COUNT * 3), {
				radius: 0.5,
			}),
		[]
	);
	const twinkles = useMemo(() => {
		const values = new Float32Array(POINT_COUNT);
		for (let i = 0; i < POINT_COUNT; i++) {
			values[i] = Math.random();
		}
		return values;
	}, []);
	const tmpColor = useMemo(() => new THREE.Color(), []);
	const { theme } = useTheme();
	const baseColor = useMemo(
		() => new THREE.Color(theme === "light" ? "#0f172a" : "#f8fafc"),
		[theme]
	);
	const accentColor = useMemo(
		() => new THREE.Color(theme === "light" ? "#38bdf8" : "#c4b5fd"),
		[theme]
	);

	useFrame((state, delta) => {
		if (!ref.current || !ref.current.geometry) {
			return;
		}

		ref.current.rotation.x -= delta / 18;
		ref.current.rotation.y -= delta / 22;

		const pointerVec = (state.pointer || state.mouse) as THREE.Vector2;
		const pointerX = (pointerVec?.x ?? 0) * 1.4;
		const pointerY = (pointerVec?.y ?? 0) * 1.4;

		const prevPointer = pointerState.current;
		const pointerDX = pointerX - prevPointer.x;
		const pointerDY = pointerY - prevPointer.y;
		const instantaneousSpeed =
			Math.sqrt(pointerDX * pointerDX + pointerDY * pointerDY) /
			Math.max(delta, 0.016);
		prevPointer.x = pointerX;
		prevPointer.y = pointerY;
		prevPointer.speed += (instantaneousSpeed - prevPointer.speed) * 0.08;
		const pointerEnergy = Math.min(prevPointer.speed * 0.35, 1);

		const positions = ref.current.geometry.attributes.position
			.array as Float32Array;
		const time = state.clock.elapsedTime;
		const lerpBase = 0.08 + pointerEnergy * 0.05;

		for (let i = 0; i < positions.length; i += 3) {
			const index = i / 3;
			const x = initialPositions.current[i];
			const y = initialPositions.current[i + 1];
			const z = initialPositions.current[i + 2];

			if (
				!Number.isFinite(x) ||
				!Number.isFinite(y) ||
				!Number.isFinite(z)
			) {
				continue;
			}

			const dx = x - pointerX;
			const dy = y - pointerY;
			const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
			const falloff = Math.max(0, 1.55 - dist);
			const swirlStrength = falloff * (0.12 + pointerEnergy * 0.25);
			const swirlX = (-dy / dist) * swirlStrength;
			const swirlY = (dx / dist) * swirlStrength;

			const wave =
				Math.sin(time * (0.6 + twinkles[index] * 1.8) + index * 0.5) *
				0.035;

			const targetX = x + velocityField[i] * 0.2 + swirlX;
			const targetY = y + velocityField[i + 1] * 0.2 + swirlY;
			const targetZ =
				z +
				velocityField[i + 2] * 0.25 +
				falloff * (0.08 + pointerEnergy * 0.08) +
				wave;

			positions[i] += (targetX - positions[i]) * lerpBase;
			positions[i + 1] += (targetY - positions[i + 1]) * lerpBase;
			positions[i + 2] +=
				(targetZ - positions[i + 2]) * (0.06 + pointerEnergy * 0.04);
		}

		ref.current.geometry.attributes.position.needsUpdate = true;

		if (materialRef.current) {
			const baseSize = theme === "light" ? 0.0026 : 0.0032;
			const targetSize = baseSize + pointerEnergy * 0.007;
			materialRef.current.size = THREE.MathUtils.lerp(
				materialRef.current.size,
				targetSize,
				0.1
			);
			tmpColor.copy(baseColor).lerp(accentColor, pointerEnergy * 0.9);
			materialRef.current.color.lerp(tmpColor, 0.08);
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere as Float32Array}
				stride={3}
				frustumCulled={false}
				{...props}
			>
				<PointMaterial
					ref={materialRef}
					transparent
					color={theme === "light" ? "#0f172a" : "#f8fafc"}
					size={theme === "light" ? 0.0028 : 0.0032}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const FloatingShapes = () => {
	const { theme } = useTheme();
	const isLight = theme === "light";
	const color = isLight ? "#3b82f6" : "#6366f1"; // Primary/Indigo

	return (
		<group>
			<Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
				<mesh position={[1, -0.5, -1]} rotation={[0, 0.5, 0]}>
					<dodecahedronGeometry args={[0.3, 0]} />
					<meshStandardMaterial
						color={color}
						wireframe
						transparent
						opacity={0.3}
					/>
				</mesh>
			</Float>
			<Float speed={3} rotationIntensity={2.5} floatIntensity={2}>
				<mesh position={[-1.5, 0.5, -2]} rotation={[0.5, 0, 0]}>
					<torusKnotGeometry args={[0.2, 0.05, 64, 8]} />
					<meshStandardMaterial
						color={isLight ? "#10b981" : "#ec4899"} // Green/Pink
						wireframe
						transparent
						opacity={0.3}
					/>
				</mesh>
			</Float>
			<Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
				<mesh position={[0, 1.5, -3]} rotation={[0.2, 0.2, 0]}>
					<octahedronGeometry args={[0.2, 0]} />
					<meshStandardMaterial
						color={isLight ? "#f59e0b" : "#8b5cf6"} // Amber/Violet
						wireframe
						transparent
						opacity={0.3}
					/>
				</mesh>
			</Float>
		</group>
	);
};

const ThreeBackground = () => {
	return (
		<div className="absolute inset-0 -z-10 h-full w-full">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<ambientLight intensity={0.5} />
				<Suspense fallback={null}>
					<StarField />
					<FloatingShapes />
				</Suspense>
			</Canvas>
			{/* Gradient Fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
		</div>
	);
};

export default ThreeBackground;
