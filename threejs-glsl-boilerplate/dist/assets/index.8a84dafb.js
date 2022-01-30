import{G as w,S as p,P as h,W as v,O as g,B as y,a as P,M as x}from"./vendor.62cf0f4d.js";const M=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}};M();var S=`void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vec4 mvPosition = viewMatrix * worldPosition;
  gl_Position = projectionMatrix * mvPosition;
}`,b=`uniform float uTick;

void main() {
  vec3 color = vec3((sin(uTick) + 1.0)/2.0, 0.0, (cos(uTick) + 1.0)/2.0);
  gl_FragColor = vec4(color, 1.0);
}`;let L=new w,r={scale:1};L.add(r,"scale",1,4).onChange(()=>{s.scale.set(r.scale,r.scale,r.scale)});const O={uTick:{type:"f",value:0}};let d=new p,i=new h(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=5;let o=new v;o.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(o.domElement);const z=new g(i,o.domElement);z.update();let C=new y(1,1,1);const W=new P({uniforms:O,vertexShader:S,fragmentShader:b});let s=new x(C,W);d.add(s);let u=()=>{requestAnimationFrame(u),s.rotation.x+=.01,s.rotation.y+=.01,o.render(d,i)};u();let m=()=>{const a=window.innerWidth,n=window.innerHeight;o.setPixelRatio(window.devicePixelRatio),o.setSize(a,n),i.aspect=a/n,i.updateProjectionMatrix()};window.addEventListener("resize",m);m();
