<!-- src/lib/Phonescene.svelte -->
<script>
	import { T } from '@threlte/core';
</script>

<T.Mesh position.y={1}>
<T.BoxGeometry args={[1, 20, 12]} />
<T.MeshBasicMaterial color="hotpink" />
</T.Mesh>
