<script setup lang="ts">
import type {ICard} from "~/types/Card";

defineProps<{
  items: ICard
}>()
</script>

<template>
  <div class="flex gap-x-2.5 md:gap-0 md:block">
    <div class="flex flex-col md:items-center justify-center items-start bg-grayCustom100 md:w-44 w-auto md:p-0 px-[17.5px] py-[21px] md:rounded-0 rounded-xl">
      <p class="text-blackCustom font-medium md:text-[22px] text-base md:leading-[26.25px] leading-[19.09px] md:mb-3 mb-2.5 tracking-[1.3px]">
        {{items.value}}
      </p>
      <span class="md:mb-3 mb-2.5 h-0.5 bg-neutral-950 w-full opacity-30" />
      <p class="text-blackCustom-op font-description font-light md:text-lg text-sm md:leading-[21.76px] leading-[16.93px] md:text-center text-left tracking-[0.3px]">
        {{items.description}}
      </p>
    </div>
    <img
        class="md:hidden block max-h-[134px] max-w-[155px] w-full rounded-xl object-center object-cover aspect-square"
        :src="items.img" :alt="items.description">
  </div>
</template>

<style scoped>

</style>
