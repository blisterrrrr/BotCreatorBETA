import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import { type GraphEdge, type GraphNode } from '@vue-flow/core'
import { ID_LENGTH } from '@/utils/CONSTANTS'

export const useNodeStore = defineStore('nodesstore', {
  state() {
    return {
      elements: [{
          id: nanoid(ID_LENGTH),
          position: { x: 0, y: 0 },
          label: 'Start Node',
          type: 'start'
      }]
    }
  },
  actions: {
    resetElements() {
      this.elements.length = 0
    },
    resetEdges(edges: GraphEdge[]) {
      edges.length = 0
    },
    resetNodes(nodes: GraphNode[]) {
      nodes.length = 0
    },
    listNodes(nodes: GraphNode[]) {
      return nodes
    },
    listEdges(edges: GraphEdge[]) {
      return edges
    }
  }
})