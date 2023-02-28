import * as THREE from 'three';
const headerContainer = document.getElementById("page-header")
if (headerContainer != null) {
    window.onload = addBg
}

function addBg() {

    const headerContainer = document.getElementById("page-header")
    if (headerContainer == null) return;

    if (headerContainer.querySelector('canvas') != null) return;

    let wndowInnerHeight = headerContainer.clientHeight

    // examples
    // https://threejs.org/examples/?q=particle#webgl_points_billboards


    let camera
    let scene
    let renderer
    let material
    let mouseX = 0
    let mouseY = 0
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = wndowInnerHeight / 2


    init()
    animate()

    function init() {
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / wndowInnerHeight, 5, 2000)
        camera.position.z = 500

        scene = new THREE.Scene()
        scene.fog = new THREE.FogExp2(0x0000ff, 0.001)

        const geometry = new THREE.BufferGeometry()
        const vertices = []
        const size = 2000

        for (let i = 0; i < 20000; i++) {
            const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
            const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
            const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

            vertices.push(x, y, z)
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

        material = new THREE.PointsMaterial({
            size: 2,
            color: 0xffffff,
        })

        const particles = new THREE.Points(geometry, material)
        scene.add(particles)

        renderer = new THREE.WebGLRenderer()
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, wndowInnerHeight)
        headerContainer.insertBefore(renderer.domElement, headerContainer.firstChild)

        window.addEventListener('resize', onWindowResize)

        // 检测设备类型
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // 移动设备
            headerContainer.addEventListener('ontouchmove', onMouseMove)
        } else {
            // 桌面设备
            headerContainer.addEventListener('onmousemove', onMouseMove)
        }
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2
        windowHalfY = wndowInnerHeight / 2

        camera.aspect = window.innerWidth / wndowInnerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, wndowInnerHeight)
    }

    function onMouseMove(event) {
        mouseX = event.clientX - windowHalfX
        mouseY = event.clientY - windowHalfY
    }

    function animate() {
        requestAnimationFrame(animate)
        render()
    }

    function render() {
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
        camera.lookAt(scene.position)
        renderer.render(scene, camera)
        scene.rotation.x += 0.001
        scene.rotation.y += 0.002
    }
};