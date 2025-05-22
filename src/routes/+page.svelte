<script lang="ts">
  import Scene from './scene.svelte'
  import { Canvas } from '@threlte/core'
</script>

<main>
  <div>
    <Canvas>
          <Scene/>
    </Canvas>
  </div>
</main>

<style>
  div {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>



