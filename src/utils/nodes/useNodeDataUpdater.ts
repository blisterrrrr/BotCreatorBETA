import { useVueFlow } from '@vue-flow/core'

interface INodeDataUpdaterArgs {
  data: object,
  id: string,
  toUpdate: string
}

export const useNodeDataUpdater = () => {
  const { updateNodeData } = useVueFlow()
  const handleUpdate = <T>(target: T, id: string, data: object, toUpdate: string) => {

    updateNodeData(id, {
      ...data,
      [toUpdate]: target
    })
  }

  const handleEvent = <T extends HTMLElement>(target: T | null, id: string, data: object, toUpdate: string) => {
    if (!target) return
    //@ts-ignore
    handleUpdate(target.value, id, data, toUpdate)
  }
  return {
    handleUpdate,
    handleEvent
  }
}