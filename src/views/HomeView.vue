<template>
  <div class="h-screen bg-[url('@/assets/images/town-rock.png')]">
    <NavbarComponent />
    <div class="banner container mx-auto bg-black pt-10 relative">
      <h1
        class="
          border-[3px] rounded-[13px]
          w-fit mx-auto font-cubic text-white md:border-[12px] md:rounded-[33px] border-white
          px-3 relative"
      >
        <span
          class="
            block text-[56px] leading-[65px] text-center
            md:text-[200px] md:leading-[233px]"
        >
          The F2E 4th
        </span>
        <span
          class="
            block text-2xl leading-[28px] text-end
            md:text-[47px] md:leading-[47px] md:bg-black
            md:absolute md:right-7 md:-bottom-1 md:translate-y-2/3"
        >
          互動式網頁設計
        </span>
      </h1>
      <div class="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <h3
          class="attack-warning
            font-cubic bg-white/70 text-center text-3xl md:text-8xl py-3 md:py-7 text-r
            absolute top-1/3 left-0 right-0 z-10"
        >
          F2E攻擊了你的村莊！
        </h3>
        <p class="font-cubic text-white text-center absolute top-1/2 md:top-2/3 left-0 right-0">
          <span class="text-2xl md:hidden">點擊螢幕開始</span>
          <span class="hidden md:inline text-5xl">請按空白鍵開始</span>
        </p>
        <img
          src="@/assets/images/castle.svg"
          alt="castle"
          class="absolute h-[291px] object-cover bottom-0"
        >
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute w-20 bottom-1/4 right-[16%] md:w-40 md:top-[9%]"
        >
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute w-24 md:w-48 top-3/4 left-0 -scale-x-100 md:top-[45%] md:left-[10%]"
        >
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute w-24 bottom-0 right-0 md:w-48 md:-bottom-[6%] md:right-[13%]"
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
