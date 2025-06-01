<script>
  export let data;
  import { base } from '$app/paths';
  import { HTML } from '@threlte/extras';
  import { Canvas } from '@threlte/core';
</script>

<Canvas>
  <HTML center>
    <section class="w-[250px] mx-auto bg-opacity-90 rounded-lg border-2 border-green-500 p-4 text-green-400 text-sm max-h-[300px] overflow-auto">
      <h1 class="text-3xl font-extrabold mb-4 tracking-widest select-none text-center">
        DEVBLOG
      </h1>
      <ul class="space-y-2 list-disc list-inside">
        {#each data.posts as post}
          <li>
            <a 
              href="{base}/devblog/{post.slug}" 
              class="hover:text-green-600 transition-colors duration-200 break-words"
            >
              {post.title} — <time datetime="{post.date}" class="text-green-300">{post.date}</time>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  </HTML>
</Canvas>
