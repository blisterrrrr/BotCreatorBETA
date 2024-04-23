import { markRaw } from 'vue'
import AnswerNode from '@/components/builder/Nodes/AnswerNode.vue'
import KeyboardStart from '@/components/builder/Nodes/KeyboardNodes/KeyboardStart.vue'
import KeyboardButton from '@/components/builder/Nodes/KeyboardNodes/KeyboardButton.vue'

export const nodeTypes = {
  "answer": markRaw(AnswerNode),
  "keyboard-start": markRaw(KeyboardStart),
  "keyboard-btn": markRaw(KeyboardButton),
}