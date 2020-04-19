varying vec3 vUv;

uniform vec3 colorA;
uniform vec3 colorB;
uniform vec3 colorC;

void main() {
	vec3 color = vec3(0);
	vec3 color2 = vec3(mix(color,colorA,vUv.x));
	vec3 color3 = vec3(mix(color2,colorB,vUv.y));
	vec3 color4 = vec3(mix(color3,colorC,vUv.z));
  	gl_FragColor = vec4(color4, 1.0);
}