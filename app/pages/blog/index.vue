<template>
  <div class="grid sm:grid-cols-1 m-5 gap-4 bg-base-300 min-h-200 rounded-3xl">
    <div class="flex flex-col items-center m-4">
      <h3 class="text-2xl font-bold m-4">All posts</h3>
      <SinglePostComponent :posts="allPosts" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const allPosts = await queryCollection('blog').order('date', 'DESC').all()
// const allTags = allPosts.flatMap(post => post.tags)
// const uniqueTags = Array.from(new Set(allTags))
</script>

<style></style>