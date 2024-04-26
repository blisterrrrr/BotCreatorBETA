<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import { useNameStore } from '@/stores/name'
import { storeToRefs } from 'pinia'
import { useNodeConnection } from '@/utils/nodes/nodesConnections'

const { LSName } = storeToRefs(useNameStore())
const { useBlockNodeConnection } = useNodeConnection()

</script>

<template>
  <div class="basic-node">
    <label>Bot Name</label>
    <input class="nodrag disinput" :value="LSName" disabled />
    <Handle type="source"
            :position="Position.Right"
            :is-valid-connection="useBlockNodeConnection"/>
  </div>
</template>

<style scoped lang="scss">
.disinput:disabled {
  background-color: rgb(87, 87, 87);
  color: white;
}
</style>