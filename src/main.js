import './app.css'
import App from './App.svelte'

import OrchyBaseMfe from '@orchy-mfe/spa-adapter'
export class SvelteMfe extends OrchyBaseMfe {
  async mount(microFrontendProperties) {
    this.app = new App({
      target: this.getContainer(),
      props: microFrontendProperties
    })
  }

  async unmount() {
    this.app.$destroy()
  }
}

customElements.define('svelte-mfe', SvelteMfe)