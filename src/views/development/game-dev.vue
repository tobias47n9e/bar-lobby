<route>{ "meta": { "title": "Game", "order": 0 } }</route>

<template>
    <div>
        <h1>{{ route.meta.title }}</h1>
        <markdown source="
- Models and Animation
- Lua, Widgets, Gadgets
- Music and Sounds
- Unit Definitions
" />
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>