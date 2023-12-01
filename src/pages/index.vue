<script setup>
import ChevronLeft from '../icons/ChevronLeft.vue'
</script>

<template>
  <!-- <header class="bg-[#191919]">
        <div class="flex h-[90px] items-center justify-between border-b border-white/10 px-6">
          <Menu />
          <Logo />
          <Cart />
        </div>
        <div class="flex h-[511px] flex-col items-center justify-center px-6 text-center text-white">
          <span class="text-sm uppercase tracking-[10px] text-white/40">New product</span>
          <h1 class="mb-6 mt-4 text-4xl font-bold tracking-[1.29px]">
            XX99 Mark II HeadphoneS
          </h1>
          <p class="text-[15px] font-medium leading-[25px] text-white/60">
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </p>
          <a
            href="#"
            class="mt-7 inline-flex h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase"
          >See
            product</a>
        </div>
      </header> -->
  <div class="mx-auto w-full max-w-[327px] md:max-w-[689px] lg:max-w-[1110px]">
    <div class="flex flex-col gap-[68px] pt-[92px] md:flex-row md:gap-2.5 md:[&>*]:flex-1">
      <div
        class="flex h-[165px] flex-col items-center justify-center rounded-lg bg-[#F1F1F1] uppercase"
      >
        <img src="~/assets/home/headphones-float.png" alt="" class="mt-[-52px]" />
        <p class="mb-4 mt-9 text-[15px] font-bold tracking-[1.07px]">Headphones</p>
        <p class="flex items-center gap-3 text-[13px] font-bold text-black/50">
          Shop
          <ChevronLeft />
        </p>
      </div>
      <div
        class="flex h-[165px] flex-col items-center justify-center rounded-lg bg-[#F1F1F1] uppercase"
      >
        <img src="~/assets/home/speakers-float.png" alt="" class="mt-[-52px]" />
        <p class="mb-4 mt-9 text-[15px] font-bold tracking-[1.07px]">Speakers</p>
        <p class="flex items-center gap-3 text-[13px] font-bold text-black/50">
          Shop
          <ChevronLeft />
        </p>
      </div>
      <div
        class="flex h-[165px] flex-col items-center justify-center rounded-lg bg-[#F1F1F1] uppercase"
      >
        <img src="~/assets/home/earphones-float.png" alt="" class="mt-[-52px]" />
        <p class="mb-4 mt-9 text-[15px] font-bold tracking-[1.07px]">Earphones</p>
        <p class="flex items-center gap-3 text-[13px] font-bold text-black/50">
          Shop
          <ChevronLeft />
        </p>
      </div>
    </div>
    <div class="mt-[120px] flex flex-col gap-6">
      <div
        class="flex flex-col items-center gap-8 rounded-lg bg-[#D87D4A] px-6 py-[55px] md:gap-16 lg:max-h-[560px] lg:flex-row lg:items-start lg:justify-center lg:overflow-hidden lg:pt-[96px]"
      >
        <img src="~/assets/home/mobile/image-speaker-zx9.png" class="w-[172px] lg:w-[410px]" />
        <div class="flex flex-col items-center lg:mt-[37px] lg:items-start">
          <p
            class="mb-6 max-w-[276px] text-center text-4xl font-bold uppercase text-white md:text-[56px] md:leading-[58px] lg:text-start"
          >
            ZX9 SPEAKER
          </p>
          <p
            class="max-w-[280px] text-center text-[15px] font-medium text-white/75 md:max-w-[349px] lg:text-start"
          >
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </p>
          <a
            href="/"
            class="mt-6 flex h-[48px] w-full max-w-[160px] items-center justify-center bg-black text-[13px] font-bold uppercase text-white md:mt-10"
            >See product</a
          >
        </div>
      </div>

      <div
        class="max-h-[320px] overflow-hidden rounded-lg bg-[#f1f1f1] grid-stack lg:max-h-[560px]"
      >
        <img src="~/assets/home/mobile/image-speaker-zx7.jpg" class="" />
        <div class="flex flex-col gap-8 self-center px-6">
          <p class="text-[28px] font-bold tracking-[2px]">ZX7 SPEAKER</p>
          <a
            href="/"
            class="flex h-12 w-full max-w-[160px] items-center justify-center border border-black text-[13px] font-bold uppercase"
            >See product</a
          >
        </div>
      </div>

      <div class="flex flex-col gap-6 md:flex-row md:gap-2.5 lg:max-h-[320px]">
        <div class="w-full overflow-hidden rounded-lg">
          <picture>
            <source
              srcset="~/assets/home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcset="~/assets/home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 768px)"
            />
            <img src="~/assets/home/mobile/image-earphones-yx1.jpg" />
          </picture>
        </div>
        <div
          class="flex w-full flex-col gap-8 rounded-lg bg-[#F1F1F1] px-6 py-10 md:justify-center lg:px-[95px]"
        >
          <p class="text-[28px] font-bold uppercase tracking-[2px]">YX1 Earphones</p>
          <a
            class="flex h-12 w-full max-w-[160px] items-center justify-center border border-black text-[13px] font-bold uppercase transition-colors hover:bg-black hover:text-white"
            >See product</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
