<script setup>
import Facebook from '../icons/Facebook.vue'
import Instagram from '../icons/Instagram.vue'
import Logo from '../icons/Logo.vue'
import Twitter from '../icons/Twitter.vue'
import NavigationMenu from './NavigationMenu.vue'

const date = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#101010] flex justify-center items-center">
    <div
      class="flex relative h-[365px] pt-[75px] w-full max-w-full lg:max-w-[1110px] mx-[24px] sm:mx-[40px] lg:mx-[165px] items-center justify-between"
    >
      <div class="bg-brand-caramel w-[101px] h-1 absolute top-0" />

      <div class="w-full h-full flex flex-col items-start justify-start">
        <div>
          <Logo />
          <p class="mt-[36px] font-medium text-[15px] leading-[25px] text-white">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>

        <span class="mt-[56px] font-medium text-[15px] leading-[25px] text-white">
          Copyright {{ date }}. All Rights Reserved
        </span>
      </div>

      <div class="w-full h-full flex flex-col items-end justify-start">
        <NavigationMenu />

        <div class="flex mt-[105px] justify-center items-center flex-row space-x-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  </footer>
</template>
