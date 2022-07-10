import { defineStore } from 'pinia'
import httpClient from '../httpClient';
import { Layout } from '../constants';

interface LayoutStoreState {
  layouts: Layout[]
}

export const useLayoutStore = defineStore('layouts', {
  state: (): LayoutStoreState => {
    return {
      layouts: []
    }
  },
  actions: {
    async loadStore() {
      const response = await httpClient.get('/layouts/')
      this.layouts = response.data
    },
    async addLayout(layout) {
      try {
        const response = await httpClient.post('/layouts/', layout)
        this.layouts.push(response.data)
      } catch (e) {
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
    }
  }
})
