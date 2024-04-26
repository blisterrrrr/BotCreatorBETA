<script setup lang="ts">
import type { IKeyboardButton } from '@/utils/Builder/nodeinterfaces'
import { Handle, Position } from '@vue-flow/core'
import { useNodeDataUpdater } from '@/utils/nodes/useNodeDataUpdater'
import { useNodeConnection } from '@/utils/nodes/nodesConnections'


const { handleEvent } = useNodeDataUpdater()

const {id, data} = defineProps<{
  id: string,
  data: IKeyboardButton
}>()

const { useKeyboardNodeConnection } = useNodeConnection()
</script>

<template>
  <div class="node-keyboard-button basic-node">
    <Handle type="target" :position="Position.Left"
            :is-valid-connection="useKeyboardNodeConnection"/>
    <label for="kbname0">Button Name</label>
    <input class="nodrag" name="kbname0" :value="data.btnName"
           @input="(e) => handleEvent(e.target as HTMLInputElement,
           id,
           data,
           'btnName'
           )"
    >
    <label for="kbname1">Button Action</label>
    <input class="nodrag" name="kbname1" :value="data.rowName"
           @input="(e) => handleEvent(e.target as HTMLInputElement,
           id,
           data,
           'rowName'
           )"
    >
  </div>
</template>

<style scoped>

</style>