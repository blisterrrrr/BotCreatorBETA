import { markRaw } from 'vue'
import AnswerNode from '@/components/builder/Nodes/AnswerNode.vue'
import KeyboardStart from '@/components/builder/Nodes/KeyboardNodes/KeyboardStart.vue'
import KeyboardButton from '@/components/builder/Nodes/KeyboardNodes/KeyboardButton.vue'
import StartNode from '@/components/builder/Nodes/StartNode.vue'


export const nodeTypes = {
  'start': markRaw(StartNode),
  "answer": markRaw(AnswerNode),
  "keyboard-start": markRaw(KeyboardStart),
  "keyboard-btn": markRaw(KeyboardButton),
}