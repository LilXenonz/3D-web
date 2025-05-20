<script lang="ts">
  import { onMount } from 'svelte'
  import { T, useThrelte, useTask } from '@threlte/core'
  import { OrbitControls } from '@threlte/extras'
  import PixelWorld from '$lib/models/PixelWorld.svelte'

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  const { camera } = useThrelte()

  useTask(() => {
    //console.log($camera.position)
  })

  function handleResize() {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
  }
  
  window.addEventListener('resize', handleResize)
  
  const aspect = sizes.width / sizes.height

</script>


<PixelWorld />

<T.OrthographicCamera
makeDefault
position={[32, 21, -84]}
zoom={10}
left={-aspect * 50}
right={aspect *50}
top={50}
bottom={-50}
near={11}
far={1000}>

<OrbitControls enableDamping></OrbitControls>

</T.OrthographicCamera>

<T.AmbientLight color={0x404040} intensity={3}/>

<T.DirectionalLight>
  
</T.DirectionalLight>