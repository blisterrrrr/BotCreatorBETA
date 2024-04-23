<script setup lang="ts">
import { Handle, type NodeProps, Position, useVueFlow } from '@vue-flow/core'
import { ref } from 'vue'
import { useNodeDataUpdater } from '@/utils/nodes/useNodeDataUpdater'

const { updateNodeData } = useVueFlow()
const { handleEvent } = useNodeDataUpdater()
const { id, data } = defineProps<{
  id: string,
  data: {
    hello: string
    [key: string]: string | number
  }
}>()
</script>

<template>
  <div class="node-answer">
    <Handle type="target" :position="Position.Left" />
    <label for="userMessage">Message to react</label>
    <input class="nodrag" :value="data.hello"
           @input="(e) => handleEvent(e.target as HTMLInputElement, id, data, 'hello')"
           name="userMessage" />
  </div>
</template>

<style>
.vue-flow__node-answer {
  background: lightpink;
}

.node-answer {
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: gray solid 2px;
}

</style>