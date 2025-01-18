<script setup lang="ts">
defineProps<{
  scroll:boolean
}>()
</script>

<template>
  <header
      :class="[
      'top-0 bg-gray-100 md:text-2xl text-base flex items-center justify-between w-screen transition-all duration-200 ease-in-out z-50',
      scroll ? 'fixed shadow' : 'relative'
    ]"
  >
     <app-container :class="[
     'flex justify-between items-center w-full',
           scroll ? 'h-[84px] max-h-[84px]' : 'max-h-[122px] h-[122px]'
     ]"
     >
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
