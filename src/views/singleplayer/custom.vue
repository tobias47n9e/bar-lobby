<route>{ "meta": { "title": "Custom", "order": 2, "offline": true } }</route>

<template>
    <div>
        <h1>{{ route.meta.title }}</h1>
        <markdown source="
- Uses same Battle component as multiplayer custom battles but hides chat and spectators
" />
        <Battle />
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>