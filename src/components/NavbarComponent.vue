<template>
  <nav class="bg-black">
    <div
      class="
        container flex flex-wrap items-center justify-between px-3 pt-8 pb-7 mx-auto relative
        md:py-6"
    >
      <h1>
        <RouterLink
          class="
            logo
            h-5 w-40 bg-[url('@/assets/images/logo-mobile.svg')]
            md:h-8 md:w-[230px] md:bg-[url('@/assets/images/logo-desktop.svg')]"
          to="/"
        >
          THE F2E
        </RouterLink>
      </h1>
      <button
        class="navbar-toggler md:hidden"
        :class="{ show: isShow === true }"
        @click="isShow = !isShow"
      >
        <span class="bar-icon" />
      </button>
      <div
        class="navbar-collapse"
        :class="{ show: isShow === true }"
      >
        <RouterLink
          class="navbar-link md:mr-4"
          to="/"
        >
          關卡資訊
        </RouterLink>
        <RouterLink
          class="navbar-link md:mr-4"
          to="/"
        >
          攻略資訊
        </RouterLink>
        <RouterLink
          class="navbar-link mb-3 md:mr-4 md:mb-0"
          to="/"
        >
          求職專區
        </RouterLink>
        <div class="md:flex md:flex-row">
          <button
            type="button"
            class="mr-4 w-28 bg-primary py-3 hover:bg-amber-500 md:py-4"
          >
            註冊報名
          </button>
          <button
            type="button"
            class="w-28 bg-primary py-3 hover:bg-amber-500 md:py-4"
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
