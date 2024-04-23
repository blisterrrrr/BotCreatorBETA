<script setup lang="ts">

import { Handle, Position } from '@vue-flow/core'

import { useNodeDataUpdater } from '@/utils/nodes/useNodeDataUpdater'
import type { IKeyboardStart } from '@/utils/Builder/nodeinterfaces'

const { handleEvent } = useNodeDataUpdater()

const { id, data } = defineProps<{
  id: string,
  data: IKeyboardStart
}>()

</script>

<template>
  <div class="node-keyboard-start basic-node">
    <Handle type="source" :position="Position.Right" />
    <label for="kbname">Keyboard Name</label>
    <input class="nodrag" name="kbname" :value="data.name || 'Name of keyboard'"
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