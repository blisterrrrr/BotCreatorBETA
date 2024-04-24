import { useNodeStore } from '@/stores/nodeStore'
import { storeToRefs } from 'pinia'
import { useVueFlow } from '@vue-flow/core'

type keyObj = {
  name: string,
  type: string,
  rows: string[]
}

const useNodeSaver = () => {

  const exporter: {
    keyboards: keyObj[],
    blocks: [],
  } = {
    keyboards: [],
    blocks: []
  }
  const keyboards = []

  //подготавливаем стор
  const { elements: els } = storeToRefs(useNodeStore())
  const { listNodes, listEdges, resetElements } = useNodeStore()
  const { nodes, getConnectedEdges } = useVueFlow()

  //чистим старое
  const cleanupExporterKeyboards = () => {
    exporter.keyboards.length = 0
  }

  const handleKeyboardNodes = () => {
    cleanupExporterKeyboards()
    nodes.value.forEach((val, index): void => {
      if (val.type === 'keyboard-start') {
        const keyboardObject: keyObj = {
          name: val.data.name,
          type: val.data.type,
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

  return {
    exporter,
    cleanupExporter: cleanupExporterKeyboards,
    handleKeyboardNodes,
    handleKeyboardButtons
  }
}

export default useNodeSaver