<script>
  import { T } from '@threlte/core'
  import { Environment, OrbitControls, Sky } from '@threlte/extras';
  import LegoShip from '$lib/models/LegoShip.svelte';


</script>

<T.PerspectiveCamera makeDefault position={[10, 1, 5]} zoom={2} fov={50}>
  <OrbitControls  enableDamping autoRotateSpeed={0.5}/>
</T.PerspectiveCamera>


<LegoShip 
scale={0.02}/>  


<Environment/>