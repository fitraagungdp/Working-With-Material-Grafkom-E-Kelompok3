var renderer,
    	scene,
    	camera,
    	myCanvas = document.getElementById('myCanvas');



    //RENDERER
    renderer = new THREE.WebGLRenderer({
      canvas: myCanvas, 
      antialias: true,
     // logarithmicDepthBuffer: true
    });
    //renderer.setClearColor(0x000000);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    //CAMERA
    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

    //SCENE
    scene = new THREE.Scene();
    //scene.overrideMaterial = new THREE.MeshDepthMaterial();

    //LIGHTS
    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    var light2 = new THREE.PointLight(0xffffff, 0.5);
    scene.add(light2);

    //Materials

    var material = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load('wool.jpg')
    });

    var mesh = new THREE.Sprite(material);
    mesh.scale.set(100, 100, 100);
    mesh.position.z = -1000;
    scene.add(mesh);


    //RENDER LOOP
    render();


    var delta = 0;
    function render() {

    	mesh.rotation.x += 0.01;
    	mesh.rotation.y += 0.01;

    	renderer.render(scene, camera);

    	requestAnimationFrame(render);
    }