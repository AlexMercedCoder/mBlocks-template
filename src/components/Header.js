import { Block } from "../lib/blockmodule.js";

//Define APP Block
export class Header extends Block {
  constructor(id){
    super({
      id,
      name: 'header',
    })

  }

  builder(state, props){
    return `<h1>I am the header component</h1>`
  }
}