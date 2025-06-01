<script lang="ts">
  import Scene from './Scene.svelte'
  import { Canvas } from '@threlte/core'
  import { Tween } from 'svelte/motion'
  import { fade } from 'svelte/transition'
  import { fromStore } from 'svelte/store'
  import { useProgress } from '@threlte/extras'

  const { progress } = useProgress()
  const p = fromStore(progress)
  const tweenedProgress = Tween.of(() => p.current, { duration: 150 })
  const progressWidth = $derived(100 * tweenedProgress.current)
  const progressLessThanOne = $derived(tweenedProgress.current < 1)
</script>


<!-- https://threlte.xyz/docs/reference/extras/use-progress -->

{#if progressLessThanOne}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-1 bg-black text-green-400 font-pixelify select-none"
  >
    <p class="text-sm tracking-widest animate-pulse drop-shadow-[0_0_10px_#00ff00]">
      LOADING...
    </p>
    <div class="w-1/3 h-2 bg-black border border-green-500 rounded relative">
      <div
        class="h-full bg-green-400 shadow-[0_0_15px_#00ff00] transition-all duration-150"
        style="width: {progressWidth}%"
      ></div>
    </div>
  </div>
{/if}


<main class="fixed inset-0 z-0">
  <Canvas>
    <Scene />
  </Canvas>
</main>

<style>
  .font-pixelify {
    font-family: 'Pixelify Sans', monospace, monospace;
  }
</style>
