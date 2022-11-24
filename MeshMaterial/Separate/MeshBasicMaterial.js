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

    //Basic Mesh

    //flat color 
    var material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: false,
      wireframeLinewidth: 1,
      wireframeLinecap: 'round',
      wireframeLinejoin: 'round',
      shading: THREE.SmoothShading,
      vertexColors: THREE.NoColors, //used if colors on geomtry
      reflectivity: 1,
      refractionRatio: 0.98,
      combine: THREE.MultiplyOperation,
      fog: true,
      aoMap: null,
      aoMapIntensity: 1,
      envMap: null,
      map: null,
      specularMap: null,
      alphaMap: null,
      skinning: false,
      morphTargets: false
    });
    //passed


    var geometry = new THREE.BoxGeometry(100, 100, 100);
    geometry.computeLineDistances();
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -1000;
    mesh.position.x = -100;
    scene.add(mesh);


    var geometry2 = new THREE.SphereGeometry(100, 20, 20);
    var mesh2 = new THREE.Mesh(geometry2, material);
    geometry.computeLineDistances();
    mesh2.position.z = -1000;
    mesh2.position.x = 100;
    scene.add(mesh2);


    var geometry3 = new THREE.PlaneGeometry(10000, 10000, 100, 100);
    var mesh3 = new THREE.Mesh(geometry3, material);
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