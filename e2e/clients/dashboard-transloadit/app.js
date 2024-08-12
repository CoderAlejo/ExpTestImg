import { ExpTestImg } from '@ExpTestImg/core'
import Dashboard from '@ExpTestImg/dashboard'
import Transloadit from '@ExpTestImg/transloadit'

import generateSignatureIfSecret from './generateSignatureIfSecret.js'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

// Environment variables:
// https://en.parceljs.org/env.html
const ExpTestImg = new ExpTestImg()
  .use(Dashboard, { target: '#app', inline: true })
  .use(Transloadit, {
    service: process.env.VITE_TRANSLOADIT_SERVICE_URL,
    waitForEncoding: true,
    getAssemblyOptions: () => generateSignatureIfSecret(process.env.VITE_TRANSLOADIT_SECRET, {
      auth: { key: process.env.VITE_TRANSLOADIT_KEY },
      template_id: process.env.VITE_TRANSLOADIT_TEMPLATE,
    }),
  })

// Keep this here to access ExpTestImg in tests
window.ExpTestImg = ExpTestImg
