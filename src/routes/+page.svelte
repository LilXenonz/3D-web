

<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte'
  </script>
  
<div class="w-screen h-screen">
  
  <div class="absolute top-0 w-full pointer-events-none">
    <h1 class="text-center my-6 text-white w-full font-bold text-6xl">
      threlte/svelte 2025
    </h1>
  </div>
  
  <div class="absolut w-full h-full top-0 left-0"> 
    <Canvas>
      <Scene />
    </Canvas>
  </div>

  <div class="absolute left-6 bottom-6 pointer-events-none rounded-xl border-gray-700 px-6 py-6 text-white bg-gray-900/50">
    <h1 class="font-bold text-xl mb-4">
      idk svelte 2025
    </h1>
    <div>
      hej<br>
      hej 
    </div>
  </div>

</div>



  
