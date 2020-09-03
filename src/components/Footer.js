import { Block } from "../lib/blockmodule.js";

//Define APP Block
export class Footer extends Block {
  constructor(id){
    super({
      id,
      name: 'footer',
    })

  }

  builder(state, props){
    return `<h1>I am the ${props.word} component</h1>`
  }
}
