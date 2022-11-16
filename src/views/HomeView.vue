<template>
  <div class="h-screen bg-[url('@/assets/images/town-rock.png')]">
    <NavbarComponent />
    <div class="banner container mx-auto bg-black pt-10 relative">
      <h1
        class="
          border-[3px] rounded-[13px]
          w-fit mx-auto font-cubic text-white lg:border-[12px] lg:rounded-[33px] border-white
          px-3 relative"
      >
        <span
          class="
            block text-[56px] leading-[65px] text-center
            lg:text-[200px] lg:leading-[233px]"
        >
          The F2E 4th
        </span>
        <span
          class="
            block text-2xl leading-[28px] text-end
            lg:text-[47px] lg:leading-[47px] lg:bg-black
            lg:absolute lg:right-7 lg:-bottom-1 lg:translate-y-2/3"
        >
          互動式網頁設計
        </span>
      </h1>
      <div class="absolute top-0 lg:top-auto bottom-0 left-0 right-0 overflow-hidden">
        <h3
          class="attack-warning
            font-cubic bg-white/70 text-center text-3xl lg:text-8xl py-3 lg:py-7 text-r
            absolute top-1/3 left-0 right-0 z-10"
        >
          F2E攻擊了你的村莊！
        </h3>
        <p class="font-cubic text-white text-center absolute top-1/2 lg:top-2/3 left-0 right-0">
          <span class="text-2xl lg:hidden">點擊螢幕開始</span>
          <span class="hidden lg:inline text-5xl">請按空白鍵開始</span>
        </p>
        <img
          src="@/assets/images/castle.svg"
          alt="castle"
          class="absolute lg:static h-[291px] lg:h-auto object-cover bottom-0"
        >
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute w-20 bottom-1/4 right-[16%] lg:w-40 lg:top-[9%]"
        >
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute w-24 lg:w-48 top-3/4 left-0 -scale-x-100 lg:top-[45%] lg:left-[10%]"
        >
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute w-24 bottom-0 right-0 lg:w-48 lg:-bottom-[6%] lg:right-[13%]"
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
  inject: ['$gsap'],
  mounted() {
    this.$gsap.fromTo(
      '.attack-warning',
      {
        color: 'rgb(156, 163, 175)',
      },
      {
        color: 'rgb(248, 68, 68)',
        duration: 0,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      },
    );
  },
};
</script>

<style scoped>
.banner {
  height: calc(100vh - 80px);
}
</style>
