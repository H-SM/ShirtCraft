import { proxy } from "valtio";

//initial react State - think it as React-Context
const state = proxy({
    intro: true,// are we in the home page? 
    color: "#EFBD48", 
    isLogoTexture: true,//are we displaying the logo on the shirt? 
    isFullTexture: false,
    logoDecal :'./threejs.png',
    fullDecal : './threejs.png',
});

export default state;
