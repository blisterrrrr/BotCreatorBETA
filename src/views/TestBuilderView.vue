<script setup>
import { useNode, useVueFlow, VueFlow } from '@vue-flow/core'
// import { initialNodes } from '@/utils/nodes/initialNodes'
import { Background } from '@vue-flow/background'
import useDragAndDrop from '@/utils/Builder/useDnD'
import { onMounted, ref } from 'vue'
import Sidebar from '@/components/builder/Sidebar.vue'
import AnswerNode from '@/components/builder/Nodes/AnswerNode.vue'
import KeyboardStart from '@/components/builder/Nodes/KeyboardNodes/KeyboardStart.vue'
import { nodeTypes } from '@/utils/nodes/initialNodes'
import { storeToRefs } from 'pinia'
import { useNodeStore } from '@/stores/nodeStore'
import KeyboardButton from '@/components/builder/Nodes/KeyboardNodes/KeyboardButton.vue'
import { nanoid } from 'nanoid'
import useNodeSaver from '@/utils/nodesaver'
import StartNode from '@/components/builder/Nodes/StartNode.vue'

const { onConnect, addEdges, addNodes, onInit, edges } = useVueFlow()
const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()
const { exporter, handleKeyboardNodes, handleBlockNodes } = useNodeSaver()

const { elements } = storeToRefs(useNodeStore())
const {
  listNodes,
  resetElements,
  resetEdges,
  resetNodes
} = useNodeStore()

const handleClick = () => {
  handleKeyboardNodes()
  handleBlockNodes()
  console.log(exporter)
  console.log(JSON.stringify(exporter))
}

onConnect((param) => {
  addEdges(param)
})
const test = 'node-keyboard-start'
</script>

<template>
  <button @click="handleClick">Save</button>
  <Sidebar />
  <div style="width: 900px; height: 90vh; border: gray 3px solid" @drop="onDrop">
    <VueFlow v-model="elements" @dragover="onDragOver"
             @dragleave="onDragLeave"
             :node-types="nodeTypes"
    >
      <Background pattern-color="#aaa"
                  :gap="16"
                  :style="{
          backgroundColor: isDragOver ? 'rgba(147,34,175,0.1)' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
      />
      <template #node-answer="{id, data}">
        <AnswerNode :id :data />
      </template>
      <template #node-start>
        <StartNode></StartNode>
      </template>
      <template #[test]="{ id, data }">
        <KeyboardStart :id :data />
      </template>
      <template #node-keyboard-btn="{ id, data }">
        <KeyboardButton :id :data />
      </template>
    </VueFlow>
  </div>
</template>

<style lang="scss">
@import "@vue-flow/core/dist/style.css";

/* import the default theme (optional) */
@import "@vue-flow/core/dist/theme-default.css";

@import "@/assets/Nodes/BasicNode";
</style>