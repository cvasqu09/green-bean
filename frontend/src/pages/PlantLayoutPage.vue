<template>
  <div class="flex flex-column">
    <h2 class="align-self-start">Layout page</h2>
    <Button class="flex align-self-end mb-2" icon="pi pi-plus" label="Add Layout" @click="toggleLayoutModal()"></Button>
    <LayoutList :layouts="layouts"></LayoutList>
    <PlantLayout></PlantLayout>
  </div>
  <Dialog v-model:visible="displayModal" :modal="true">
    <template #header><h3>Add Layout</h3></template>
    <div class="flex flex-column mt-1">
      <div class="mb-2">
        <InputText type="text" id="layout-name" v-model="layoutName" placeholder="Name"></InputText>
      </div>
      <Button class="mt-2 align-self-end" @click="addLayout">Add</Button>
    </div>
  </Dialog>
</template>

<script lang="ts">
import PlantLayout from '../components/PlantLayout.vue';
import { useLayoutStore } from '../stores/layoutStore';
import { onMounted, ref } from 'vue';
import LayoutList from '../components/LayoutList.vue';
import { storeToRefs } from 'pinia';

export default {
  name: "PlantLayoutPage",
  components: {LayoutList, PlantLayout},
  props: {},
  setup() {
    const layoutStore = useLayoutStore()
    const layoutName = ref('');
    const displayModal = ref(false);
    const toggleLayoutModal = () => {
      displayModal.value = !displayModal.value
    }
    const { layouts } = storeToRefs(layoutStore);

    const addLayout = async () => {
      await layoutStore.addLayout({
        name: layoutName.value,
        configuration: {}
      })
      toggleLayoutModal()
    }

    onMounted(async () => {
      await layoutStore.loadStore()
    })

    return {
      addLayout,
      displayModal,
      layoutName,
      layouts,
      toggleLayoutModal
    }
  }
}
</script>

<style scoped>

</style>
