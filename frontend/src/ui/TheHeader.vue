<template>
  <Menubar :model="menuItems"></Menubar>
</template>

<script>
export default {
  name: "TheHeader",
  setup() {
    const menuItems = [{
      label: 'Home',
      icon: 'pi pi-home'
    }]

    return {
      menuItems
    }
  }
}
</script>

<style scoped>

</style>
