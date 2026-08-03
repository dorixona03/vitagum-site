/* ═══════════ VITAGUM · 3D hero (gummy bears) ═══════════ */
import * as THREE from '../vendor/three.module.min.js';

const canvas = document.getElementById('hero-canvas');
const prefersReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = matchMedia('(max-width: 760px)').matches;
const no3d = new URLSearchParams(location.search).has('no3d');

if (canvas && !prefersReduced && !no3d) { try { init(); } catch(e) { canvas.remove(); } }

function init(){
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x140d1e, 14, 30);

  const camera = new THREE.PerspectiveCamera(42, 1, .1, 60);
  camera.position.set(0, 0, 13);

  /* environment: candy-colored equirect gradient */
  const envTex = makeEnv();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromEquirectangular(envTex).texture;
  scene.environment = env;
  envTex.dispose();

  /* lights */
  scene.add(new THREE.AmbientLight(0xffffff, .35));
  const key = new THREE.DirectionalLight(0xfff2dd, 2.2); key.position.set(4, 6, 6); scene.add(key);
  const rimP = new THREE.PointLight(0xff4f7e, 30, 30); rimP.position.set(-7, 3, -2); scene.add(rimP);
  const rimB = new THREE.PointLight(0x4fc7ff, 26, 30); rimB.position.set(7, -4, -3); scene.add(rimB);

  /* gummy material factory */
  const gummy = (hex)=> new THREE.MeshPhysicalMaterial({
    color: hex, roughness:.16, metalness:0,
    clearcoat:1, clearcoatRoughness:.22,
    transmission:.5, thickness:2.2, ior:1.35,
    attenuationColor: new THREE.Color(hex), attenuationDistance: 2.5,
    envMapIntensity: 1.1,
  });

  /* ── gummy bear from primitives ── */
  function makeBear(hex){
    const g = new THREE.Group();
    const m = gummy(hex);
    const add = (geo, x,y,z, sx=1,sy=1,sz=1)=>{
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(x,y,z); mesh.scale.set(sx,sy,sz);
      g.add(mesh); return mesh;
    };
    const S = (r,ws=28,hs=20)=> new THREE.SphereGeometry(r, ws, hs);
    add(S(1.05), 0, 0, 0, 1.12, 1.28, .8);            // body
    add(S(.80),  0, 1.55, .04, 1.02, .96, .78);       // head
    add(S(.32), -.58, 2.2, .02);                      // ear L
    add(S(.32),  .58, 2.2, .02);                      // ear R
    add(S(.34),  0, 1.32, .52, 1.15, .9, .7);         // muzzle
    add(new THREE.CapsuleGeometry(.32,.5,8,16), -1.0, .5, .1).rotation.z =  .85; // arm L
    add(new THREE.CapsuleGeometry(.32,.5,8,16),  1.0, .5, .1).rotation.z = -.85; // arm R
    add(new THREE.CapsuleGeometry(.38,.42,8,16), -.52, -1.28, .08).rotation.z =  .22;  // leg L
    add(new THREE.CapsuleGeometry(.38,.42,8,16),  .52, -1.28, .08).rotation.z = -.22;  // leg R
    add(S(.42), 0, .28, .62, 1.35, 1.5, .5);          // belly
    g.scale.z = .85;
    return g;
  }

  const palette = [0xff4f7e, 0xffb42d, 0x9ee937, 0x4fc7ff, 0xa06bff, 0xff7043];
  const floaters = [];

  const bearCount = isMobile ? 3 : 5;
  for(let i=0;i<bearCount;i++){
    const bear = makeBear(palette[i%palette.length]);
    scene.add(bear);
    floaters.push(seed(bear, i, bearCount, 'bear'));
  }
  /* candy extras: rings & balls */
  const extraCount = isMobile ? 4 : 8;
  for(let i=0;i<extraCount;i++){
    const hex = palette[(i+2)%palette.length];
    const mesh = (i%2===0)
      ? new THREE.Mesh(new THREE.TorusGeometry(.5,.24,18,36), gummy(hex))
      : new THREE.Mesh(new THREE.SphereGeometry(.42,24,18), gummy(hex));
    scene.add(mesh);
    floaters.push(seed(mesh, i, extraCount, 'extra'));
  }

  function seed(obj, i, n, kind){
    // keep the centre clear for the headline: cluster left / right in vertical slots
    const side = i%2 ? -1 : 1;
    const slot = Math.floor(i/2);
    const nSide = Math.ceil(n/2);
    const x = side * ((kind==='bear' ? (isMobile? 2.6 : 4.2) : (isMobile? 3.6 : 5.6)) + Math.random()*1.6);
    const spread = isMobile? 7.5 : 6.4;
    const y = ((nSide>1 ? slot/(nSide-1) : .5) - .5) * spread
            + (Math.random()-.5)*1.1 + (kind==='extra'? .6*side : 0);
    const z = -1.5 - Math.random()*4 + (kind==='extra'? -1 : 0);
    const s = kind==='bear' ? (.52+Math.random()*.24) : (.68+Math.random()*.45);
    obj.position.set(x,y,z); obj.scale.setScalar(s);
    obj.rotation.set(Math.random()*.5-.25, Math.random()*1.6-.8, Math.random()*.5-.25);
    return {obj, baseY:y, baseX:x, baseRotY:obj.rotation.y, baseRotX:obj.rotation.x, ph:Math.random()*Math.PI*2,
      spinX:(Math.random()-.5)*.25, spinY:(Math.random()-.5)*.5,
      amp:.35+Math.random()*.4, speed:.4+Math.random()*.35};
  }

  /* mouse / gyro parallax */
  let mx=0, my=0, tx=0, ty=0;
  addEventListener('pointermove', e=>{
    tx = (e.clientX/innerWidth - .5);
    ty = (e.clientY/innerHeight - .5);
  }, {passive:true});

  /* resize */
  function resize(){
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  /* pause when hero off-screen */
  let visible = true;
  new IntersectionObserver(([e])=>{visible = e.isIntersecting}, {threshold:0}).observe(canvas);

  const clock = new THREE.Clock();
  renderer.setAnimationLoop(()=>{
    if(!visible) return;
    const t = clock.getElapsedTime();
    mx += (tx-mx)*.04; my += (ty-my)*.04;
    camera.position.x = mx*1.6;
    camera.position.y = -my*1.2;
    camera.lookAt(0,0,0);
    for(const f of floaters){
      f.obj.position.y = f.baseY + Math.sin(t*f.speed + f.ph)*f.amp;
      f.obj.position.x = f.baseX + Math.cos(t*f.speed*.7 + f.ph)*f.amp*.5;
      f.obj.rotation.y = f.baseRotY + Math.sin(t*f.speed*.8 + f.ph)*.45;
      f.obj.rotation.x = f.baseRotX + Math.cos(t*f.speed*.6 + f.ph)*.2;
    }
    renderer.render(scene, camera);
  });
}

/* candy-gradient equirectangular env */
function makeEnv(){
  const c = document.createElement('canvas'); c.width=512; c.height=256;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0,0,0,256);
  g.addColorStop(0,'#3b2a63'); g.addColorStop(.45,'#1d1330'); g.addColorStop(1,'#0e0817');
  x.fillStyle=g; x.fillRect(0,0,512,256);
  const spot=(cx,cy,r,col)=>{
    const rg=x.createRadialGradient(cx,cy,0,cx,cy,r);
    rg.addColorStop(0,col); rg.addColorStop(1,'transparent');
    x.fillStyle=rg; x.fillRect(cx-r,cy-r,r*2,r*2);
  };
  spot(120,60,90,'rgba(255,190,120,.9)');   // warm key
  spot(400,70,80,'rgba(160,107,255,.8)');   // grape
  spot(260,40,70,'rgba(255,255,255,.75)');  // white top
  spot(60,180,80,'rgba(255,79,126,.55)');   // raspberry low
  spot(450,190,80,'rgba(79,199,255,.5)');   // sky low
  const tex = new THREE.CanvasTexture(c);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
