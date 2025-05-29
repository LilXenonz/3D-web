<!-- src/routes/devblog/[slug]/+page.svelte -->
<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article class="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-8">
  <div class="max-w-3xl w-full bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6 text-center text-white">
    <h1 class="text-4xl font-bold mb-4">{data.title}</h1>
    <p class="mb-6 text-green-400">Published: <time datetime="{data.date}">{data.date}</time></p>
    <div class="prose prose-invert max-w-none">
      <svelte:component this={data.content} />
    </div>
  </div>
</article>
