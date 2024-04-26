import { useNodeStore } from '@/stores/nodeStore'
import { storeToRefs } from 'pinia'
import { type GraphNode, useVueFlow } from '@vue-flow/core'
import { keyboardTypes } from '@/utils/nodes/nodesConnections'

type keyObj = {
  name: string,
  type: string,
  rows: string[]
}

type blockObj = {
  id: string,
  type: string,
  parameters: {
    [K: string]: string
  },
  father: string | null,
  children: string[]
}

const keyboard_type = 'reply'

const useNodeSaver = () => {

  const exporter: {
    keyboards: keyObj[],
    blocks: blockObj[],
  } = {
    keyboards: [],
    blocks: []
  }
  const keyboards = []

  //подготавливаем стор
  const { elements: els } = storeToRefs(useNodeStore())
  const { listNodes, listEdges, resetElements } = useNodeStore()
  const {
    nodes,
    getConnectedEdges,
  } = useVueFlow()
  //чистим старое
  const cleanupExporterKeyboards = () => {
    exporter.keyboards.length = 0
  }

  const cleanupExporterBlocks = () => {
    exporter.blocks.length = 0
  }

  const handleKeyboardNodes = () => {
    cleanupExporterKeyboards()
    nodes.value.forEach((val, index): void => {
      if (val.type === 'keyboard-start') {
        const keyboardObject: keyObj = {
          name: val.data.name,
          type: keyboard_type,
          rows: []
        }
        handleKeyboardButtons(val.id, keyboardObject.rows)
        exporter.keyboards.push(keyboardObject)
      }
    })
  }

  const handleKeyboardButtons = (parentId: string, keyboardRows: string[]) => {
    const edges = getConnectedEdges(parentId)
    edges.forEach((edge) => {
      keyboardRows.push(edge.targetNode.data.rowName as string)
    })
  }

  const handleBlockNodes = () => {
    cleanupExporterBlocks()
    nodes.value.forEach((value, index) => {
      if (!keyboardTypes.includes(value.type)) {
        const blockObject: blockObj = {
          id: value.id,
          type: value.type,
          parameters: value.data,
          father: null,
          children: []
        }
        findFather(value, blockObject)
        findChilden(value, blockObject)
        exporter.blocks.push(blockObject)
      }
    })
  }

  function findChilden(value: GraphNode, blockObject: blockObj) {
    const edges = getConnectedEdges(value.id)
    edges.forEach((edge) => {
      if (edge.sourceNode.id === value.id) {
        blockObject.children.push(edge.targetNode.id)
      }
    })
  }

  const findFather = (node: GraphNode, obj: blockObj) => {
    const edges = getConnectedEdges(node.id)
    edges.forEach((edge) => {
      if (edge.targetNode.id === node.id) {
        obj.father = edge.sourceNode.id
      }
    })
  }



  return {
    exporter,
    cleanupExporter: cleanupExporterKeyboards,
    handleKeyboardNodes,
    handleKeyboardButtons,
    handleBlockNodes,
    findFather,
    findChilden,
  }
}

export default useNodeSaver