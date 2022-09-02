import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper'
import './app.css'
import App from './App.svelte'

let app

const retrieveContainer = props => (props.container || document).querySelector('#app')

const render = (props = {}) => {
  app = new App({
    target: retrieveContainer(props),
    props
  })
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() { },
  unmount() {
    app.$destroy()
  },
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

export default app