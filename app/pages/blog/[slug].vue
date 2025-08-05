<script lang="ts" setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
    <div class="m-5 gap-4 bg-base-300 min-h-200 rounded-3xl">
        <div v-if="post" class="prose m-5 mt-15 mb-15 space-y-0.5 max-w-9/12 mx-auto">
            <div class="flex flex-wrap gap-1 mb-4">
                <span v-for="tag in post.tags" :key="String(tag)" class="badge badge-accent">
                    <NuxtLink :to="`/blog/tag/${String(tag)}`" class="text-white">
                        {{ String(tag) }}
                    </NuxtLink>
                </span>
            </div>
            <div class="text-sm text-gray-500 mb-4">
                <span>{{ new Date(post.date).toLocaleDateString() }}</span>
            </div>
            <ContentRenderer :value="post" />
        </div>
        <div v-else>
            <div class="empty-page m-5 mt-15 mb-15 space-y-0.5 items-center justify-center text-center">
                <h1 class="text-4xl">Page not found</h1>
                <p class="mt-10">Sorry! The content you are looking for does not exist.</p>
                <div class="mt-10">
                    <NuxtLink class="front-semibold" to="/blog">Back to posts list</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>