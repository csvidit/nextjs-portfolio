import * as three from "three";

const Ball = () =>
{
    const scene = new three.scene();

    const geometry = new three.SphereGeometry(3, 64, 64);
    const material = new three.MeshStandardMaterial({
        color: "#84CC16",
    });
    const mesh = new three.Mesh(geometry, material);
    scene.add(mesh);

    const camera = new three.PerspectiveCamera(45, 800, 600)
    camera.position.z = 20
    scene.add(camera)

    const canvas = document.querySelector(".webgl");
    const renderer = new three.WebGLRenderer({canvas}); 
    renderer.setSize(800, 600)
    renderer.render(scene, camera)

    return(
        <div><canvas class="webgl "></canvas></div>
    )
    
}

export default Ball;