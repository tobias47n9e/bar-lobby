<route>{ "meta": { "title": "Donate", "order": 3 } }</route>

<template>
    <div>
        <h1>{{ route.meta.title }}</h1>
        <markdown source="
- BAR is a free, open-source project supported by hardworking individuals blahblah
- How your donation gets used
- Donate button
- List of donators
" />
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>