<script lang="ts">
  import { base } from '$app/paths';
</script>

<main class="bg-black min-h-screen text-green-400 font-pixelify">
  <header class="sticky top-4 z-10 mx-auto max-w-4xl border-2 border-green-500 rounded-b-md shadow-lg">
    <nav class="px-4 py-2 flex justify-center gap-8 bg-black">
      <a
        href="{base}/"
        aria-label="Main Page"
        class="text-lg tracking-widest hover:text-green-200 transition-transform duration-200 hover:scale-105"
      >
        !MAIN!
      </a>
      <a
        href="{base}/devblog"
        aria-label="Blog Page"
        class="text-lg tracking-widest hover:text-green-200 transition-transform duration-200 hover:scale-105"
      >
        BLOG
      </a>
    </nav>
  </header>
</main>

<style>
  .font-pixelify {
    font-family: "Pixelify Sans", sans-serif;
  }
</style>
