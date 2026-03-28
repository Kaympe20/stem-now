<script setup lang="ts">
import { ref, onMounted } from 'vue'

const agregatedJSON = ref<permanentLocation[]>([])

onMounted(async () => {
  agregatedJSON.value = await aggregateLocations()
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1>Stem Now</h1>
    <div v-for="location in agregatedJSON" :key="location.name">
      <div class="flex items-center justify-center gap-3">
        <div class="w-[60vh] min-h-50 flex flex-col justify-center">
          <h2 class="text-2xl font-bold underline mb-2">{{ location.name }}</h2>
          <p>{{ location.description }}</p>
        </div>
        <img :src="location.imageUrl.toString()" alt="Location Image" class="w-32 h-32 object-cover rounded-md" />
      </div>
    </div>
  </div>
</template>
