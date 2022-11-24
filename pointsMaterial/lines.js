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

    //LineBasicMaterial
    var material = new THREE.LineBasicMaterial();
    
    //LineDashedMaterial
    // var material = new THREE.LineDashedMaterial({
    //     dashSize: 2,
    //     gapSize: 2
    // });



    var geometry = new THREE.BoxGeometry(100, 100, 100);
    geometry.computeLineDistances();
    var mesh = new THREE.Line(geometry, material);
    mesh.position.z = -1000;
    mesh.position.x = -100;
    scene.add(mesh);


    var geometry2 = new THREE.SphereGeometry(100, 20, 20);
    var mesh2 = new THREE.Line(geometry2, material);
    geometry2.computeLineDistances();
    mesh2.position.z = -1000;
    mesh2.position.x = 100;
    scene.add(mesh2);


    var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
    var mesh3 = new THREE.Line(geometry3, material);
    geometry3.computeLineDistances();
    mesh3.rotation.x = -90 * Math.PI / 180;
    mesh3.position.y = -100;
    scene.add(mesh3);

    //RENDER LOOP
    render();


    var delta = 0;
    function render() {

    	mesh.rotation.x += 0.01;
    	mesh.rotation.y += 0.01;

        mesh2.rotation.x += 0.01;
    	mesh2.rotation.y += 0.01;

    	renderer.render(scene, camera);

    	requestAnimationFrame(render);
    }