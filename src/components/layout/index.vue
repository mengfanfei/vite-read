<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.meta.fullPath"/>
    </keep-alive>
    <component :is="Component" :key="$route.meta.fullPath" v-if="!$route.meta.keepAlive"/>
  </router-view> 
  <Navigation v-if="$route.meta.showTabbar" />
</template>

<script lang="ts">
import Navigation from '@/components/navigation'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
  components: {
    Navigation
  }
})
</script>


