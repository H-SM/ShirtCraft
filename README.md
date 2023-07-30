# ShirtCraft
ShirtCraft  is an innovative SaaS project that lets users design their custom t-shirts with a variety of patterns and colors. Import local designs and unleash your creativity! 🎨👕
<hr>

More on vite here > [vite in 100 sec](https://www.youtube.com/watch?v=KCrXgy8qtjM)

Vite is a JavaScript build tool that makes it faster and easier to build web applications. It's similar to tools like Webpack, but relies on modern browser features like ES Modules to simplify and speed-up the build process. 
<hr>

> Vite is one of the best things that happened in the front-end development ecosystem. The community around it is super active, we have tons of plugins and integrations for back-end frameworks (Rails, Laravel, ...). I wouldn't go back to anything else.

<hr>

### Dependencies for client side
- npm install three @react-three/fiber @react-thr
ee/drei -> 3D threeJS library for 3D rendering over the screen (react render for it) drei -> useful atoms for react 3D fiber
- npm install maath -> math over 3js
- npm install valtio -> manage react states (new library for it)
- npm install react-color -> color picker
- npm install framer-motion -> animations
- npm install -D tailwindcss postcss autoprefixer -> tailwind css w/ vite
<hr> 

### Defination of properties over TShirt model(Part of Canvas Model ) 

`<group>`
This line creates a `<group>` element. In Three.js, a group is an object that can contain other objects, allowing you to group multiple meshes or objects together and manipulate them as a single unit. It's a way to organize and manage objects in a scene.

```
<mesh
    castShadow
    geometry={nodes.T_Shirt_male.geometry}
    material={materials.lambert1}
    material-roughness={1}
    dispose={null}>
</mesh>
```

This block of code creates a `<mesh>` element, which represents a 3D object with geometry (shape) and material (appearance). Let's break down the attributes:

**castShadow**: This attribute indicates that the mesh should cast shadows in the scene. When set to true, the mesh will participate in shadow casting, affecting other objects in the scene based on light sources.

**geometry={nodes.T_Shirt_male.geometry}**: This attribute assigns the geometry data for the mesh. It appears to be referencing a variable nodes.T_Shirt_male.geometry, which likely holds the geometric data for the T-shirt mesh. In Three.js, a mesh's geometry defines its shape, such as vertices, faces, and normals.

**material={materials.lambert1}**: This attribute assigns the material for the mesh. It appears to be referencing a variable materials.lambert1, which likely holds the material properties for the T-shirt. Materials define how an object looks, including its color, texture, and how it reacts to light.

**material-roughness={1}**: This attribute sets the roughness of the material. In this case, it's set to 1, which means the material is fully rough. Roughness affects how shiny or smooth the surface of the material appears. A roughness of 1 means the surface will appear completely rough, while a roughness of 0 means it will be perfectly smooth.

**dispose={null}**: This attribute might be specific to the project's implementation. In Three.js, the dispose property is used to specify a callback function that will be called when the mesh is removed from the scene or when resources associated with it need to be cleaned up. In this case, it's set to null, which means no specific cleanup function is provided.

Overall, this code creates a group that contains a single mesh representing a T-shirt object in the scene. The T-shirt mesh has specific material properties, casts shadows, and has a roughness value set to 1.

<hr> 

### Dependencies for client side
- npm install cloudinary 
- npm install cors 
- npm install dotenv 
- npm install express 
- npm install mongoose 
- npm install nodemon     
- npm install openai     