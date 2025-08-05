<template>
  <div>
    <div class="grid sm:grid-cols-12 m-5 gap-4">
      <div class="col-span-3 min-h-[50px] flex justify-start items-center text-4xl text-shadow-xs">
        <UIcon name="solar:sidebar-code-outline" size="36px" />
        <p class="ml-2">Your blog</p>
      </div>
      <div class="col-span-6 min-h-[50px]  flex justify-center items-center text-1xl text-shadow-xs gap-5">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </div>
      <div class="col-span-3 min-h-[50px] flex justify-end items-center">
        <input type="checkbox" value="sunset" class="toggle theme-controller" />

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>



</script>

<style></style>