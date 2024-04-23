export interface IKeyboardStart {
  name: string,
  type: 'reply',
  rows?: IKeyboardButton[],
}

export interface IKeyboardButton {
  btnName: string,
  rowName: string
}