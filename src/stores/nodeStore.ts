import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { type GraphEdge, type GraphNode } from '@vue-flow/core'
import { ID_LENGTH } from '@/utils/CONSTANTS'

export const useNodeStore = defineStore('nodesstore', {
  state() {
    return {
      elements: [
        {
          id: nanoid(ID_LENGTH),
          type: 'answer',
          data: {
            hello: 'world'
          },
          position: { x: 0, y: 50 }
        },
        {
          id: nanoid(ID_LENGTH),
          type: 'keyboard-start',
          data: {
            name: 'hi!'
          },
          position: { x: 0, y: 100 }
        }
      ]
    }
  },
  actions: {
    listNodes(nodes: GraphNode[]) {
      return nodes
    },
    listEdges(edges: GraphEdge[]) {
      return edges
    }
  }
})