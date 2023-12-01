<script setup>
import Cart from '../icons/Cart.vue'
import Logo from '../icons/Logo.vue'
import Menu from '../icons/Menu.vue'
</script>

<template>
  <header class="bg-[#FFFFFF]">
    <h1 class="heading-1">Text</h1>
    <div class="flex h-[90px] items-center justify-between border-b border-white/10 px-6">
      <Menu />
      <Logo />
      <Cart />
    </div>
  </header>
  <slot />
</template>
