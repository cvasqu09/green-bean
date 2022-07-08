<template>
  <Menubar :model="menuItems">
    <template #item="{item}">
      <Button class="p-button-link" :style="{color: '#495057'}" :icon="item.icon" :label="item.label"
              @click="routeTo(item.route)"></Button>
    </template>
  </Menubar>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
  name: "TheHeader",
  setup() {
    const router = useRouter();

    const menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: 'home'
      },
      {
        label: 'Plant Layout',
        icon: 'pi pi-table',
        route: 'layout'
      }
    ]

    const routeTo = (route) => router.push({name: route})

    return {
      menuItems,
      routeTo
    }
  }
}
</script>

<style scoped>

</style>
