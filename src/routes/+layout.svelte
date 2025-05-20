<div class="scene">
	<slot />
</div>

<svelte:head>
	<title>Threlte</title>
</svelte:head>

<style>
	.scene {
		position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
	}
</style>
