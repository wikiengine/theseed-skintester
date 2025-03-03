<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link :to="to" active-class="" exact-active-class="" :aria-current="null">
    <slot />
  </router-link>
</template>