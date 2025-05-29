<script>
  export let data;
  import { base } from '$app/paths';
  import { HTML } from '@threlte/extras';
  import { Canvas } from '@threlte/core';
</script>

<Canvas class="w-full h-full bg-gray-900">
  <HTML>
    <section class="max-w-3xl mx-auto bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6">
      <h1 class="text-4xl font-bold text-white mb-6">Devblog</h1>
      <ul class="space-y-3 list-disc list-inside">
        {#each data.posts as post}
          <li>
            <a href="{base}/devblog/{post.slug}" class="text-green-400 hover:text-green-600 transition-colors duration-200">
              {post.title} — <time datetime="{post.date}">{post.date}</time>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  </HTML>
</Canvas>
