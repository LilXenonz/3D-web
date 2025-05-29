<script lang="ts">
  import { base } from '$app/paths';
</script>

<main>
  <header
    class="sticky top-4 z-10 mx-auto max-w-7xl bg-slate-50 rounded-b-lg shadow-md font-pixelify"
  >
    <nav>
      <div
        class="flex justify-center gap-12 px-6 py-4 m-4 rounded-xl"
      >
        <a
          href="{base}/"
          aria-label="Main Page"
          class="text-xl font-extrabold tracking-tighter text-slate-900 transition-transform duration-300 hover:scale-110"
        >
          Main
        </a>
        <a
          href="{base}/devblog"
          aria-label="Blog Page"
          class="text-xl font-extrabold tracking-tighter text-slate-900 transition-transform duration-300 hover:scale-110"
        >
          Blog
        </a>
      </div>
    </nav>
  </header>
</main>

<style>
  .font-pixelify {
    font-family: "Pixelify Sans", sans-serif;
  }
</style>
