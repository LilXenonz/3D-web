<!-- src/routes/devblog/+page.svelte -->
<script>
	export let data;
  import { base } from '$app/paths';
  import { HTML } from '@threlte/extras';
  import { Canvas } from '@threlte/core';

</script>


<Canvas>
  <HTML>
      <h1 class="text-white">Devblog</h1>

      <ul>
        {#each data.posts as post}
          <li>
            <a href="{base}/devblog/{post.slug}" class="text-green-600">
              {post.title} — {post.date}  
            </a>
          </li>
        {/each}
      </ul>
  </HTML>
</Canvas>


