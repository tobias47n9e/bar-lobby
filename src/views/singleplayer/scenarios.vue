<route>{ "meta": { "title": "Scenarios", "order": 1, "offline": true } }</route>

<template>
    <div>
        <h1>{{ route.meta.title }}</h1>
        <markdown source="
- Scenarios list - pull from online scenarios database?
- Scenario preview panel - shows mission objective, top 10 leaderboard
" />
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>