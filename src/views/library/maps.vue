<route>{ "meta": { "title": "Maps", "order": 1 } }</route>

<template>
    <div>
        <h1>{{ route.meta.title }}</h1>
        <markdown source="
- Similar to online map browser
- Indicator whether map is installed or not
- Easy one click install button
- Demo map button that launches a simple offline game on the map
- Searchable
- Sortable
- Filterable
- Paginated
" />
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>