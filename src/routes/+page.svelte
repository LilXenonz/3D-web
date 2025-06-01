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

{#if progressLessThanOne}
  <div
    transition:fade={{ duration: 200 }}
    class="fixed inset-0 bg-black flex flex-col items-center justify-center gap-1 text-green-400 font-pixelify select-none z-50"
  >
    <p class="text-sm tracking-widest drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] animate-pulse">
      Loading...
    </p>
    <div class="w-1/3 h-2 border border-green-500 rounded relative overflow-hidden bg-black">
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
