<script setup>
import Cart from '../icons/Cart.vue'
import Logo from '../icons/Logo.vue'
import Menu from '../icons/Menu.vue'
import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
  <header class="bg-[#141414] flex justify-center items-center">
    <div
      class="flex h-[96px] w-full max-w-full lg:max-w-[1110px] mx-[24px] sm:mx-[40px] lg:mx-[165px] items-center justify-between border-b border-[#979797]"
    >
      <div class="hidden sm:flex justify-center items-center">
        <Menu class="mr-[42px] lg:hidden block" />
        <Logo />
      </div>

      <Menu class="block sm:hidden" />
      <Logo class="block sm:hidden" />

      <NavigationMenu class="lg:block hidden" />

      <Cart />
    </div>
  </header>
</template>
