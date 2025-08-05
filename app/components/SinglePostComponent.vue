<template>

  <ul class="list-none m-4 space-y-1">
    <li v-for="post in posts" :key="post.id">
      <div class="card w-200 bg-base-200 shadow-sm">
        <div class="card-body">
          <h2 class="text-lg font-bold">
            <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
          </h2>
          <p class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString() }}</p>
          <div class="flex flex-wrap gap-1">
            <span v-for="tag in post.tags" :key="tag" class="badge badge-accent">
              <NuxtLink :to="`/blog/tag/${tag}`" class="text-white">{{ tag }}</NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';

defineProps<{ posts: Array<any> }>();
</script>
