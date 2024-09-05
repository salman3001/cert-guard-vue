import { createVuetify } from 'vuetify'
import defaults from './defaults'
import { icons } from './icons'
import { themes } from './theme'

// Styles
import 'vuetify/styles'
import type { App } from 'vue'

export default function (app: App) {
  const vuetify = createVuetify({
    defaults,
    icons,
    theme: {
      defaultTheme: 'light',
      themes,
    },
  })

  app.use(vuetify)
}
