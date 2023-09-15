/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const savedTheme = localStorage.getItem('theme');

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4ad4f2',
          secondary: '#5CBBF6',
        },
      },
      dark: {
        colors: {
          primary: '#3962a3',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
