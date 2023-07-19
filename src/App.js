//import * as THREE from 'three'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
	ContactShadows,
	PerspectiveCamera,
	Environment,
	OrbitControls,
	TorusKnot,
	Cloud
} from '@react-three/drei';

import './styles.css';

export default function App() {
	return (
		<Canvas>
			<color attach="background" args={['white']} />

			<React.Suspense fallback={null}>
				<Cloud position={[10, 25, 10]} segments={80} width={20} depth={0.23} depthTest={0} color="#00ff69" />
				<Cloud position={[-10, 15, 0]} segments={40} width={10} depth={0.25} depthTest={0} color="#000000" />
			</React.Suspense>

			<ambientLight intensity={0.6} />
			<pointLight position={[0, 5, 0]} color="#00ff69" />
			<hemisphereLight args={[0xffffbb, 0x000000, 1]} />

			<Environment ground={1} preset="studio" background={true} blur={1} />

			<mesh position={[0, 5, 0]}>
				<boxGeometry args={[10, 10, 10]} />
				<meshStandardMaterial metalness={1} roughness={0.1} />
			</mesh>

			<TorusKnot scale={5} args={[1.5, 0.42, 128, 12]} position={[12, 12, 12]}>
				<meshStandardMaterial
					metalness={1.25}
					roughness={0.25}
					color="#00ff69"
					emissive={1}
				/>
			</TorusKnot>

			<ContactShadows
				resolution={1024}
				position={[-1, 0, -2]}
				scale={50}
				blur={4}
				opacity={1}
				rotation={[Math.PI / 3, 0, 0]}
				far={14}
			/>

			<OrbitControls autoRotate />
			<PerspectiveCamera
				position={[50, 40, 50]}
        makeDefault
        resolution={255}
				showHelper={true}
			/>
		</Canvas>
	);
}
