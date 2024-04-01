import StartForm from '@/components/Forms/StartForm.vue'
import SendForm from '@/components/Forms/SendForm.vue'
import type MessageForm from '@/components/Forms/MessageForm.vue'

type FormTypes = 'start' | 'send' | 'answer'

export type ComponentTypes = typeof StartForm | typeof SendForm | typeof MessageForm

export interface FormDescription {
  id: number
  type: FormTypes
  parameters: {
    message: string,
    buttons: []
    triggerMSg?: string
  }
  children: FormDescription[]
}

