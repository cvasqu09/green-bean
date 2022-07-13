<template>
  <div class="m-2">
    <div class="flex justify-content-between">
      <div class="flex">
        <IncrementButton class="mr-2" :count="rows" label="Rows"></IncrementButton>
        <IncrementButton class="mr-2" :count="cols" label="Cols"></IncrementButton>
        <IncrementButton :count="items" label="Items" @update="items = $event"></IncrementButton>
      </div>
      <Button class="align-self-center p-button-info" label="Regenerate Layout" @click="generateLayout"></Button>
    </div>
    <grid-layout :layout="layout"
                 :col-num="cols"
                 :row-height="100"
                 :max-rows="rows"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
                 :use-css-transforms="true"
                 :vertical-compact="false"
                 @layout-updated="updateLayout">
      <grid-item v-for="item in layout"
                 :key="item.i"
                 :static="item.static"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
                 :i="item.i"
                 class="flex justify-content-center"
      >
        <div class="flex flex-column align-self-center">
          <InputText class="max-w-5rem align-self-center" :placeholder="itemTitle(item)"></InputText>
          <ToggleButton :model-value="item.static" class="align-self-center" on-label="Static" off-label="Not Static"
                        @change="item.static = !item.static"></ToggleButton>
        </div>
      </grid-item>
    </grid-layout>
    <div class="flex justify-content-end mt-2">
      <Button class="p-button-info" icon="pi pi-save" label="Save Layout" @click="saveLayout"></Button>
    </div>
  </div>
</template>

<script>
import VueGridLayout from 'vue3-grid-layout';
import {computed, onMounted, ref} from 'vue';
import IncrementButton from "../ui/IncrementButton.vue";
import {useLayoutStore} from "../stores/layoutStore";
import {storeToRefs} from "pinia";

export default {
  name: "PlantLayout",
  props: {},
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    IncrementButton
  },
  setup() {
    const layoutStore = useLayoutStore();
    const {selectedLayout} = storeToRefs(layoutStore)
    const rows = ref(selectedLayout.layoutConfiguration?.rows || 10);
    const cols = ref(selectedLayout.layoutConfiguration?.cols || 10);
    const items = ref(selectedLayout.layoutConfiguration?.layoutDefinition?.length || 0);
    const layout = ref(selectedLayout.layoutConfiguration?.layoutDefinition || []);

    const itemTitle = (item) => {
      let result = item.i;
      if (item.static) {
        result += " - Static";
      }
      return result;
    }

    const updateLayout = (layoutUpdate) => {
      console.log('update', layoutUpdate)
    }

    // TODO: Generate this properly
    const generateLayout = () => {
      console.log('items', items.value)
      layout.value = []
      for (let i = 0; i < items.value; i++) {
        layout.value.push({
          x: i,
          y: 0,
          w: 2,
          h: 2,
          i: `Item - ${i}`,
          static: false
        })
      }
      console.log(layout.value)

    }

    const saveLayout = async (layout) => {
      const mappedLayout = layout.map()
      // await layoutStore.addLayout(layout);
    }

    onMounted(() => {
      generateLayout();
    })

    return {
      cols,
      generateLayout,
      itemTitle,
      layout,
      draggable: true,
      resizable: true,
      items,
      index: 0,
      rows,
      saveLayout,
      selectedLayout,
      updateLayout,
    }
  }
}
</script>

<style scoped lang="scss">
.vue-grid-layout {
  border: 1px solid grey;

  .static {
    position: absolute !important;
  }
}

.test {
  justify-content: center;
}
</style>
