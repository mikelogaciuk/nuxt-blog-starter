<template>
  <div class="m-5 gap-4 bg-base-300 min-h-200 rounded-3xl">
    <div class="flex flex-col items-center m-4">
      <h3 class="text-2xl font-bold m-4">Posty</h3>
      <SinglePostComponent :posts="filteredPosts" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const tag: string | string[] = useRoute().params.tag?.toString() || ''

const allPosts = await queryCollection('blog').order('date', 'DESC').all()
const filteredPosts = allPosts.filter(post => post.tags.includes(tag))
</script>

<style></style>