<script setup>
import useDragAndDrop from '@/utils/Builder/useDnD'

const { onDragStart } = useDragAndDrop()
</script>

<template>
  <aside style="margin-bottom: 5px">
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes" style="display: flex; justify-content: flex-start">
      <div class="vue-flow__node-keyboard-start" :draggable="true" @dragstart="onDragStart($event, 'keyboard-start')">Input Node</div>

      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node</div>

      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>
    </div>
  </aside>
</template>
