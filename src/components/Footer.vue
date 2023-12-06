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
      class="flex relative h-fit lg:h-[365px] pt-[75px] w-full max-w-full lg:max-w-[1110px] mx-[24px] sm:mx-[40px] lg:mx-[165px] items-center justify-center md:justify-between"
    >
      <div class="bg-brand-caramel w-[101px] h-1 absolute top-0" />

      <div class="w-full h-full flex flex-col items-start justify-start">
        <div class="flex flex-col">
          <Logo class="self-center md:self-auto" />

          <NavigationMenu class="lg:hidden block mt-8 self-center md:self-auto" />

          <p
            class="mt-[36px] lg:mb-0 text-center md:text-start self-center md:self-auto font-medium text-[15px] leading-[25px] text-white"
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>

        <div
          class="lg:mt-[56px] mt-[48px] md:mt-[80px] space-y-[48px] md:space-y-0 w-full mb-[36px] lg:mb-0 flex flex-col md:flex-row justify-center md:justify-between"
        >
          <span class="font-medium text-[15px] leading-[25px] text-white self-center md:self-auto">
            Copyright {{ date }}. All Rights Reserved
          </span>

          <div class="flex lg:hidden justify-center items-center flex-row space-x-4">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>

      <div class="w-full h-full hidden lg:flex flex-col items-end justify-start">
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
