<script setup lang="ts">
import type {ICard} from '~/types/Card'
import AppBlockCards from "~/components/AppBlockCards.vue";
import AppHeader from "~/components/AppHeader.vue";
import {useScreenSize} from "~/composebles/useScreenSize";

const screenWidth = useScreenSize()

const cardList = ref<ICard[]>([
  {value: '130km/h', description: 'Conquering the limits of speed', img: 'Photo-card-2.webp'},
  {value: '265kg', description: 'Optimal weight for lightness', img: 'Photo-card-3.webp'},
  {value: '27.00hp', description: 'The power of the beast inside', img: 'Photo-card-4.webp'},
  {value: '280сс', description: 'Thoughtful structure of every detail', img: 'Photo-card-1.webp'},
])

</script>

<template>
  <AppHeader />
  <main class="md:mt-[138px] mt-[30px]">
    <app-container>
      <section>
        <div class="max-w-[1048px] m-auto">
          <h1 class="text-blackCustom md:text-3xl text-[22px] font-semibold md:leading-[42px] leading-[30.8px] tracking-[0.6px] md:text-center text-left md:mb-6 mb-5">
            {{screenWidth> 767 ?  'Sharmax Expert Pro 300' : 'Sharmax Custom RR 250' }}
          </h1>
          <p class="font-description font-light md:text-center text-left md:leading-[26.2px] leading-[19.6px] md:text-lg text-sm text-grayCustom-op md:mb-7 mb-5 tracking-[0.3px]">
            {{
              screenWidth> 767 ?
              ' A new level of quality in the world of enduro. The Sharmax Expertpro 300 is one of the most powerful bikes from Sharmax Motors. Responsive and reliable, the ExpertPro 300 motorcycle will give you a feeling of superiority on any track.' :
              'Welcome to Sharmax where we strive to reconnect people with nature through our top-of-the-line motorcycles, versatile quad bikes and buggies, and exhilarating water '
            }}

          </p>
          <div class="relative z-10 flex items-center justify-center flex-wrap md:px-16 md:py-10 px-0 py-0 md:bg-grayCustom100 bg-inherit md:rounded-3xl md:gap-x-[72px] gap-x-2.5 md:gap-y-6 gap-y-2.5 w-full xl:max-w-[1048px] lg:max-w-[800px] md:max-w-[600px] m-auto">
            <app-block-cards
              v-for="(items, index) in cardList"
              :key="index"
              :items="items"
              class="even:flex-row-reverse"
            />
          </div>
        </div>
        <div class="md:grid grid-cols-3 gap-5 -mt-20 hidden">
          <img
              v-for="({img, description}, index) in cardList"
              :key="index"
              :src="img"
              :alt="description"
              :class="[
                  {'w-full lg:max-h-[344px] md:max-h-[250px] grid-span-1': index !== 3},
                  {'object-top': index === 2},
                  {'col-span-3 w-screen max-w-full max-h-full -order-1 aspect-auto': index === 3}
              ]"
              class="object-cover object-center rounded-3xl h-full"
          >
        </div>
      </section>
      <section class="flex justify-center mt-20">
        <OpacityCard />
      </section>
      <section class="mt-20">
        <h3 class="text-blackCustom text-2xl font-semibold text-center mb-3">Lorem ipsum dolor</h3>
        <p class="font-description font-light text-center leading-6 text-lg text-grayCustom-op mb-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur dicta dignissimos, distinctio
          eaque earum expedita itaque molestiae placeat qui ullam voluptatibus. Aspernatur magnam, obcaecati quia
          reprehenderit sit tempora tenetur?
        </p>

      </section>
    </app-container>
  </main>
</template>

<style scoped>

</style>
