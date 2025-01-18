<script setup lang="ts">
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY >= 38;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
      :class="[
      'bg-gray-100 text-2xl flex items-center justify-between w-full transition-all duration-200 ease-in-out z-50',
      isScrolled ? 'h-20 sticky top-0' : 'h-[122px]'
    ]"
  >
     <app-container class="flex justify-between items-center w-full">
       <icon-nuxt-icon />
       <ul class="flex items-center gap-4 *:cursor-pointer *:text-gray-600 hover:*:text-gray-900 *:transition-colors">
         <li>Home</li>
         <li>Catalog</li>
       </ul>
     </app-container>
  </header>
</template>

<style scoped>

</style>
