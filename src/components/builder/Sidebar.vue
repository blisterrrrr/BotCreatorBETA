<script setup>
import useDragAndDrop from '@/utils/Builder/useDnD'
import KeyboardStart from '@/components/builder/Nodes/KeyboardNodes/KeyboardStart.vue'
import { nodeTypes } from '@/utils/nodes/initialNodes'

const { onDragStart } = useDragAndDrop()
</script>

<template>
  <aside style="margin-bottom: 5px">
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes" style="display: flex; justify-content: flex-start">
      <template v-for="(node, nodetype) in nodeTypes" :key="nodetype">
        <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, nodetype)">{{ nodetype }}</div>
      </template>
<!--      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'keyboard-start')">Keyboard Start</div>-->

<!--      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'keyboard-btn')">Keyboard Button</div>-->

<!--      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'answer')">Bot Answer</div>-->
    </div>
  </aside>
</template>
