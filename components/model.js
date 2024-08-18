import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef, useState } from 'react'

const Model = ({ src }) => {
    const mountRef = useRef(null)
    const [isDesktop, setIsDesktop] = useState(false)
    const modelRef = useRef(null)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768)
        }

        // Run on mount
        handleResize()

        // Run during resize
        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (!mountRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        )
        mountRef.current.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)

        const loader = new GLTFLoader()
        loader.load(
            `/models/${src}.gltf`,
            gltf => {
                console.log('Model loaded successfully', gltf)
                scene.add(gltf.scene)
                modelRef.current = gltf.scene
            },
            undefined,
            error => {
                console.error('An error happened', error)
            }
        )

        // Set the initial camera position
        camera.position.set(-5, 10, 10) // Adjust these values to set the desired position
        camera.lookAt(0, 0, 0) // Ensure the camera looks at the origin or the center of your model

        controls.target.set(0, 0, 0) // Set the target of the controls to the center of the model
        controls.update()

        const topLight = new THREE.DirectionalLight(0xffffff, 5)
        topLight.position.set(0, 1, 0)
        topLight.castShadow = true
        scene.add(topLight)

        const ambientLight = new THREE.AmbientLight(0x404040)
        scene.add(ambientLight)

        const animate = () => {
            requestAnimationFrame(animate)

            if (modelRef.current) {
                modelRef.current.rotation.y += 0.0015 // Adjust the rotation speed if necessary
            }

            controls.update()
            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            camera.aspect =
                mountRef.current.clientWidth / mountRef.current.clientHeight
            camera.updateProjectionMatrix()
            renderer.setSize(
                mountRef.current.clientWidth,
                mountRef.current.clientHeight
            )
        }

        window.addEventListener('resize', handleResize)

        // Force a resize on mount to ensure proper dimensions
        handleResize()

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement)
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [src])

    return (
        <div
            ref={mountRef}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30em',
                marginLeft: isDesktop ? '-20em' : '0 auto',
                marginRight: isDesktop ? '-20em' : '0 auto'
            }}
        />
    )
}

export default Model
