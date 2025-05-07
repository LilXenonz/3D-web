<script lang="ts">
  import { Environment, Grid, OrbitControls } from '@threlte/extras'
  import { EquirectangularReflectionMapping } from 'three'
  import { RGBELoader } from 'three/examples/jsm/Addons.js'
  import { T, useLoader } from '@threlte/core'
  import LegoShip from '$lib/models/LegoShip.svelte';


  const { load } = useLoader(RGBELoader)
  const map = load('/hdr/pine_picnic_4k.hdr', {
    transform(texture) {
      texture.mapping = EquirectangularReflectionMapping
      return texture
    }
  })
</script>

<T.PerspectiveCamera makeDefault position={[10, 5, 5]} zoom={3} fov={70}> 
  <OrbitControls
    enableDamping={true}
    autoRotate
    autoRotateSpeed={0.5}/>
</T.PerspectiveCamera>

<Grid/>

<LegoShip 
scale={0.03}/>  


{#await map then texture}
  <Environment
    isBackground
    {texture}
  />
{/await}
