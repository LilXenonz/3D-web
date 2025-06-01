<script>
  import { Canvas, T } from '@threlte/core';
  import { HTML, OrbitControls } from '@threlte/extras';
  import Bg from '$lib/models/BG.svelte';
  import RetroComputer from '$lib/models/retro_computer.svelte';
</script>

<div class="fixed inset-0 z-0">
  <Canvas>
    <T.PerspectiveCamera
      position={[20, 20, 35]}
      fov={20}
      oncreate={(ref) => ref.lookAt(0, 2, 0)}
      makeDefault
    />

    <RetroComputer />
    <Bg />

    <T.Group position={[0, 5, 0]}>
      <HTML transform>
        <div class="phone-screen border-2 border-green-500 rounded-md font-pixelify overflow-auto text-green-400 bg-black">
          <slot />
        </div>
      </HTML>
    </T.Group>

    <T.AmbientLight />
    <T.DirectionalLight />
  </Canvas>
</div>

<style>
  .phone-screen {
    width: 300px;
    height: 200px;
  }

  .font-pixelify {
    font-family: 'Pixelify Sans', monospace;
  }
</style>
