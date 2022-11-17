<template>
  <nav class="bg-black">
    <div
      class="container relative mx-auto flex flex-wrap items-center justify-between px-3 pt-8 pb-7 md:py-4 md:px-0"
    >
      <h2>
        <RouterLink
          class="block h-5 w-40 overflow-hidden whitespace-nowrap bg-[url('@/assets/images/logo-mobile.svg')] bg-center bg-no-repeat indent-[101%] md:h-8 md:w-[230px] md:bg-[url('@/assets/images/logo-desktop.svg')]"
          to="/"
        >
          THE F2E
        </RouterLink>
      </h2>
      <button class="relative h-5 w-[30px] md:hidden" @click="isShow = !isShow">
        <span
          class="absolute block h-[3px] w-[30px] rounded-full transition-colors before:absolute before:bottom-2 before:block before:h-[3px] before:w-[30px] before:rounded-full before:bg-gray-300 before:transition-transform after:absolute after:top-2 after:block after:h-[3px] after:w-[30px] after:rounded-full after:bg-gray-300 after:transition-transform"
          :class="[
            isShow
              ? 'bg-transparent before:translate-y-2 before:rotate-45 after:-translate-y-2 after:-rotate-45'
              : 'bg-gray-300',
          ]"
        />
      </button>
      <div
        class="absolute left-0 top-full z-10 flex w-full flex-col items-start overflow-hidden bg-black pl-3 transition-[padding-top,max-height] md:static md:max-h-screen md:w-auto md:flex-row md:items-center md:py-0"
        :class="[isShow ? 'max-h-screen pb-7 md:py-0' : 'max-h-0']"
      >
        <RouterLink
          class="w-full basis-full py-3 text-white hover:border-white hover:bg-white hover:pl-4 hover:font-bold hover:text-black md:mr-4 md:hover:pl-0"
          to="/"
        >
          關卡資訊
        </RouterLink>
        <RouterLink
          class="w-full basis-full py-3 text-white hover:border-white hover:bg-white hover:pl-4 hover:font-bold hover:text-black md:mr-4 md:hover:pl-0"
          to="/"
        >
          攻略資訊
        </RouterLink>
        <RouterLink
          class="mb-3 w-full basis-full py-3 text-white hover:border-white hover:bg-white hover:pl-4 hover:font-bold hover:text-black md:mr-4 md:mb-0 md:hover:pl-0"
          to="/"
        >
          求職專區
        </RouterLink>
        <div class="md:flex md:flex-row">
          <button
            type="button"
            class="mr-4 w-28 bg-primary py-3 hover:bg-amber-500 md:py-3"
          >
            註冊報名
          </button>
          <button
            type="button"
            class="w-28 bg-primary py-3 hover:bg-amber-500 md:py-3"
          >
            登入
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>
