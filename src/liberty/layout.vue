<template>
	<div class="liberty">
		<h1>layout</h1>
		<nuxt-link to="/">home</nuxt-link>
		<nuxt-link to="/about">about</nuxt-link>
		<slot />
	</div>
</template>

<script>
export default {
	name: "liberty"
}
</script>