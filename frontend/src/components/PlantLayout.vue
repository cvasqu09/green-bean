<template>
  <div class="m-2">
    <div class="flex justify-content-between">
      <div class="flex">
        <IncrementButton class="mr-2" :count="rows" label="Rows"></IncrementButton>
        <IncrementButton class="mr-2" :count="cols" label="Cols"></IncrementButton>
        <IncrementButton :count="items" label="Items" @update="items = $event"></IncrementButton>
      </div>
      <div>
        <Button class="align-self-center p-button-info mr-2" label="Regenerate Layout" @click="generateLayout"></Button>
        <Button class="align-self-center p-button-danger" label="Close Layout" @click="closeLayout"></Button>
      </div>
    </div>
    <grid-layout :layout="layout"
                 :col-num="cols"
                 :row-height="100"
                 :max-rows="rows"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
                 :use-css-transforms="true"
                 :vertical-compact="false">
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
import {onMounted, ref, watch} from 'vue';
import IncrementButton from "../ui/IncrementButton.vue";
import {useLayoutStore} from "../stores/layoutStore";
import {storeToRefs} from "pinia";
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: "PlantLayout",
  props: {
    selectedLayout: {
      type: Object,
      required: true,
    }
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    IncrementButton
  },
  setup(props) {
    const layoutStore = useLayoutStore();
    const rows = ref(props.selectedLayout.configuration?.rows || 10);
    const cols = ref(props.selectedLayout.configuration?.cols || 10);
    const items = ref(props.selectedLayout.configuration?.layoutDefinition?.length || 0);
    const layout = ref(props.selectedLayout.configuration?.layoutDefinition || []);

    const itemTitle = (item) => {
      let result = item.i;
      if (item.static) {
        result += " - Static";
      }
      return result;
    }

    // TODO: Generate this properly
    const generateLayout = () => {
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
    }

    const closeLayout = () => {
      layoutStore.setSelectedLayout()
    }

    const saveLayout = async () => {
      let updatedLayout = cloneDeep(props.selectedLayout)

      if (updatedLayout.configuration) {
        updatedLayout.configuration.rows = rows.value
        updatedLayout.configuration.cols = cols.value
        updatedLayout.configuration.layoutDefinition = layout.value
      } else {
        updatedLayout.configuration = {
          rows: rows.value,
          cols: cols.value,
          layoutDefinition: layout.value
        };
      }

      console.log('updatedLayout', updatedLayout)
      await layoutStore.updateLayout(updatedLayout);
    }

    onMounted(() => {
      generateLayout();
    })

    return {
      closeLayout,
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
