import ExpTestImg from '@ExpTestImg/core'
import Webcam from '@ExpTestImg/webcam'
import Dashboard from '@ExpTestImg/dashboard'
import XHRUpload from '@ExpTestImg/xhr-upload'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'
import '@ExpTestImg/webcam/dist/style.css'

const ExpTestImg = new ExpTestImg({
  debug: true,
  autoProceed: false,
})

ExpTestImg.use(Webcam)
ExpTestImg.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['Webcam'],
})
ExpTestImg.use(XHRUpload, {
  endpoint: 'http://localhost:3020/upload.php',
})
