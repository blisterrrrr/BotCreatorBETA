<script setup lang="ts">

import { Handle, Position } from '@vue-flow/core'

import { useNodeDataUpdater } from '@/utils/nodes/useNodeDataUpdater'
import type { IKeyboardStart } from '@/utils/Builder/nodeinterfaces'
import { useNodeConnection } from '@/utils/nodes/nodesConnections'

const { handleEvent } = useNodeDataUpdater()

const { id, data } = defineProps<{
  id: string,
  data: IKeyboardStart
}>()
const { useKeyboardNodeConnection } = useNodeConnection()
</script>

<template>
  <div class="node-keyboard-start basic-node">
    <Handle type="source"
            :position="Position.Right"
            :is-valid-connection="useKeyboardNodeConnection" />
    <label for="kbname">Keyboard Name</label>
    <input class="nodrag" name="kbname" :value="data.name"
           placeholder="Keyboard name here"
           @input="(e) => handleEvent(e.target as HTMLInputElement,
           id,
           data,
           'name'
           )"
    >
  </div>
</template>

<style scoped>

</style>