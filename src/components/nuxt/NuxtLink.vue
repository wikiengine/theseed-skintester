<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <router-link :to="to" class="custom-link">
    <slot />
  </router-link>
</template>