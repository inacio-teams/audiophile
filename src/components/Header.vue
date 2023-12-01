<script setup>
import Cart from '../icons/Cart.vue'
import Logo from '../icons/Logo.vue'
</script>

<template>
  <header class="bg-[#141414] flex justify-center items-center">
    <div
      class="flex h-[96px] w-full max-w-[689px] lg:max-w-[1110px] px-[40px] lg:px-[165px] items-center justify-between border-b border-[#979797]"
    >
      <Logo />

      <nav class="lg:block hidden">
        <ul class="flex items-center gap-[34px]">
          <li>
            <a
              href="/"
              class="uppercase text-white hover:text-brand-caramel transition-colors duration-300 font-bold text-[13px] tracking-[2px] leading-[25px]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/headphones"
              class="uppercase text-white hover:text-brand-caramel transition-colors duration-300 font-bold text-[13px] tracking-[2px] leading-[25px]"
            >
              HEADPHONES
            </a>
          </li>
          <li>
            <a
              href="/speakers"
              class="uppercase text-white hover:text-brand-caramel transition-colors duration-300 font-bold text-[13px] tracking-[2px] leading-[25px]"
            >
              SPEAKERS
            </a>
          </li>
          <li>
            <a
              href="/earphones"
              class="uppercase text-white hover:text-brand-caramel transition-colors duration-300 font-bold text-[13px] tracking-[2px] leading-[25px]"
            >
              EARPHONES
            </a>
          </li>
        </ul>
      </nav>

      <Cart />
    </div>
  </header>
</template>
