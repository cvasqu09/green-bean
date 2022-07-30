import { defineStore } from 'pinia'
import httpClient from '../httpClient';
import { Layout } from '../constants';

interface LayoutStoreState {
  layouts: Layout[]
  selectedLayout?: Layout
}

export const useLayoutStore = defineStore('layouts', {
  state: (): LayoutStoreState => {
    return {
      layouts: [],
      selectedLayout: undefined,
    }
  },
  actions: {
    async loadStore() {
      const response = await httpClient.get('/layouts/')
      this.layouts = response.data
    },
    async addLayout(layout: Layout) {
      try {
        const response = await httpClient.post('/layouts/', layout)
        this.layouts.push(response.data)
      } catch (e) {
        throw e
      }
    },
    async updateLayout(layout: Layout) {
      try {
        const response = await httpClient.put(`/layouts/${layout.id}/`, layout)
        const layoutIndex = this.layouts.findIndex(layout => layout.id === response.data.id)
        this.layouts[layoutIndex] = response.data
      } catch(e) {
        throw e
      }
    },
    async deleteLayout(layoutId: string) {
      try {
        await httpClient.delete(`/layouts/${layoutId}`)
        this.layouts = this.layouts.filter(layout => layout.id !== layoutId)
      } catch (e) {
        throw e
      }
    },
    setSelectedLayout(layoutId?: string) {
      const foundLayout = this.layouts.find(layout => layout.id === layoutId)
      if (foundLayout) {
        this.selectedLayout = foundLayout
      } else {
        this.selectedLayout = undefined;
      }
    }
  }
})
