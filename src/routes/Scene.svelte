<script lang="ts">
  import { onMount } from 'svelte'
  import { T, useThrelte, useTask } from '@threlte/core'
  import { OrbitControls, Sky } from '@threlte/extras'
  import World from '$lib/models/world.svelte'
  import { SoftShadows } from '@threlte/extras'
  import * as THREE from 'three'
	import { render } from 'svelte/server';
  import { HTML } from '@threlte/extras'
  
  
  const sizes = {
    width: window.innerWidth, 
    height: window.innerHeight
  }
  const { renderer } = useThrelte()
  let aspect = sizes.width / sizes.height

  useTask(() => {
    //console.log($camera.position)
  })

  function handleResize() {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
  }
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.5
  window.addEventListener('resize', handleResize)


</script>

<World />


<T.OrthographicCamera
makeDefault
position={[32, 21, -84]}
zoom={10}
top={50}
bottom={-50}
near={1}
far={1000}>

<!--- -><OrbitControls enableDamping></OrbitControls> -->

</T.OrthographicCamera>

<T.AmbientLight intensity={1.5} />

<T.DirectionalLight 
  castShadow
  position={[40, 80, 0]} 
  target.position={[-15, 0, 0]}
  shadow.camera.left={-135}         
  shadow.camera.right={135} 
  shadow.camera.top={135}         
  shadow.camera.bottom={-135}
  shadow.normalBias={0.2}
  shadow.mapSize.width={4096}
  shadow.mapSize.height={4096}
  shadow.radius = 4
  >     
  {#snippet children({ ref })}
    <!-- <T.DirectionalLightHelper args={[ref]}/> -->
    <!--<T.CameraHelper args={[ref.shadow.camera]} />-->
  {/snippet}
</T.DirectionalLight>