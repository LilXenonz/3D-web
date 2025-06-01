<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article class="min-h-screen flex flex-col items-center justify-center bg-black p-8">
  <div class="max-w-3xl w-full bg-black bg-opacity-90 rounded-lg border-2 border-green-500 p-6 text-center text-green-400">
    <h1 class="text-4xl font-extrabold mb-4 tracking-widest select-none text-green-400">
      {data.title}
    </h1>
    <p class="mb-6 text-green-300">
      Published: <time datetime="{data.date}">{data.date}</time>
    </p>
    <div class="prose prose-invert max-w-none text-green-400">
      <svelte:component this={data.content} />
    </div>
  </div>
</article>


