import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'

// 👇 Importar y registrar íconos de oh-vue-icons
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiReplyFill,
  FaChevronUp,
  MdMorevert,
  BiTelephoneOutboundFill,
  LaExternalLinkAltSolid,
  MdMorehoriz
} from 'oh-vue-icons/icons'

addIcons(
  BiReplyFill,
  FaChevronUp,
  MdMorevert,
  BiTelephoneOutboundFill,
  LaExternalLinkAltSolid,
  MdMorehoriz
)

const app = createApp(App)

app.component('v-icon', OhVueIcon) // Esto es necesario para que los íconos funcionen

app.use(router).mount('#app')
