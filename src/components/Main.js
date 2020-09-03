import { Block } from "../lib/blockmodule.js";

//Define APP Block
export class Main extends Block {
  constructor(id){
    super({
      id,
      name: 'main',
      state: {word: 'Main'}
    })

  }

  builder(state, props){
    return `<h1>I am the ${state.word} component</h1><button>Click Me</button>`
  }

  assemble(state, props){
    const el = this
    document.querySelector('button').addEventListener('click', () => {
      el.setState({word: 'main'})
    })
  }
}
