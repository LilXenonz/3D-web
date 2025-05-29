<script>
  import { Canvas, T } from '@threlte/core'
  import { HTML, OrbitControls } from '@threlte/extras'
  import Computer from '$lib/models/computer.svelte'
</script>

<div class="fixed height-full size-full top-0 left-0 z-0">
  <Canvas>
<T.PerspectiveCamera
  position={[20, 20, 35]}
  fov={20}
  oncreate={(ref) => {
    ref.lookAt(0, 2, 0)
  }}
  makeDefault
>

</T.PerspectiveCamera>

  <Computer/>

<T.Group position={[0, 5, 0]}>
  <HTML center transform>
    <div class="phone-screen">
        <slot/>
    </div>
  </HTML>
</T.Group>

    <T.AmbientLight/>
  </Canvas>
</div>

  

<style>
  .phone-screen {
  width: 300px;
  height: 200px;
  text-align: left;
  overflow: auto;
  background: blue;
  border-radius: 5px;
  font-family: "Pixelify Sans", sans-serif;
}

</style>