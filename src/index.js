import { Block } from "./lib/blockmodule.js";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";
import "./styles.scss";

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<m-app id="app"></m-app>`;


//Define APP Block
class App extends Block {
  constructor(id){
    super({
      id,
      name: 'app',
      state: {hello: 'Hello World'},
    })

  }

  builder(state, props){
    return `<h1>Hello World</h1>
    <m-header id="header"></m-header>
    <m-main id="main"></m-main>
    <m-footer id="footer" word="footer"></m-footer>`
  }

  assemble(state, props){
    const header = new Header('header')
    const main = new Main('main')
    const footer = new Footer('footer')
  }
}

const app = new App('app')


