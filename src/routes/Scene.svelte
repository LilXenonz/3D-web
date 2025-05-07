<script lang="ts">
  import { Environment, Grid, OrbitControls, Text3DGeometry } from '@threlte/extras'
  import { EquirectangularReflectionMapping } from 'three'
  import { RGBELoader } from 'three/examples/jsm/Addons.js'
  import { T, useLoader } from '@threlte/core'
  import LegoShip from '$lib/models/LegoShip.svelte'


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
    autoRotateSpeed={0.5} />
</T.PerspectiveCamera>

<Grid />

<T.Mesh position={[-3.8, 1.7, 0]}>  
  <Text3DGeometry  
    text={"Lego City"} 
    size={0.5}
    depth={0.2}
  />
  <T.MeshStandardMaterial
  color="#FFD700"
  metalness={0.8}
  roughness={0.2}
/>
</T.Mesh>


<LegoShip scale={0.03} />

{#await map then texture}
  <Environment
    isBackground
    {texture}
  />
{/await}
