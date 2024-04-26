import type { Connection } from '@vue-flow/core'
import { useVueFlow } from '@vue-flow/core'

export const keyboardTypes = ['keyboard-start', 'keyboard-btn']

export const useNodeConnection = () => {
  const { findNode } = useVueFlow()

  const useBlockNodeConnection = (connection: Connection) => {
    return !keyboardTypes.includes(findNode(connection.target)?.type as string) &&
      !keyboardTypes.includes(findNode(connection.source)?.type as string)
  }

  const useKeyboardNodeConnection = (connection: Connection) => {
    return keyboardTypes.includes(findNode(connection.target)?.type as string) &&
      keyboardTypes.includes(findNode(connection.source)?.type as string)
  }

  return {
    useBlockNodeConnection,
    useKeyboardNodeConnection
  }
}