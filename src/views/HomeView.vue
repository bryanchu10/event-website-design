<template>
  <div class="h-screen bg-[url('@/assets/images/town-rock.png')]">
    <NavbarComponent />
    <div class="banner container relative mx-auto bg-black pt-10">
      <h1
        class="relative mx-auto w-fit rounded-[13px] border-[3px] border-white px-3 font-cubic text-white lg:rounded-[33px] lg:border-[12px]"
      >
        <span
          class="block text-center text-[56px] leading-[65px] lg:text-[200px] lg:leading-[233px]"
        >
          The F2E 4th
        </span>
        <span
          class="block text-end text-2xl leading-[28px] lg:absolute lg:right-7 lg:-bottom-1 lg:translate-y-2/3 lg:bg-black lg:text-[47px] lg:leading-[47px]"
        >
          互動式網頁設計
        </span>
      </h1>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 overflow-hidden lg:top-auto"
      >
        <h3
          class="attack-warning text-r absolute top-1/3 left-0 right-0 z-10 bg-white/70 py-3 text-center font-cubic text-3xl lg:py-7 lg:text-8xl"
        >
          F2E攻擊了你的村莊！
        </h3>
        <p
          class="absolute top-1/2 left-0 right-0 text-center font-cubic text-white lg:top-2/3"
        >
          <span class="text-2xl lg:hidden">點擊螢幕開始</span>
          <span class="hidden text-5xl lg:inline">請按空白鍵開始</span>
        </p>
        <img
          src="@/assets/images/castle.svg"
          alt="castle"
          class="absolute bottom-0 h-[291px] object-cover lg:static lg:h-auto"
        />
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute bottom-1/4 right-[16%] w-20 lg:top-[9%] lg:w-40"
        />
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute top-3/4 left-0 w-24 -scale-x-100 lg:top-[45%] lg:left-[10%] lg:w-48"
        />
        <img
          src="@/assets/images/fire.gif"
          alt="fire"
          class="absolute bottom-0 right-0 w-24 lg:-bottom-[6%] lg:right-[13%] lg:w-48"
        />
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
