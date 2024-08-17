import ExpTestImg from '@ExpTestImg/core'
import Dashboard from '@ExpTestImg/dashboard'
import RemoteSources from '@ExpTestImg/remote-sources'
import Webcam from '@ExpTestImg/webcam'
import ScreenCapture from '@ExpTestImg/screen-capture'
import GoldenRetriever from '@ExpTestImg/golden-retriever'
import ImageEditor from '@ExpTestImg/image-editor'
import DropTarget from '@ExpTestImg/drop-target'
import Audio from '@ExpTestImg/audio'
import Compressor from '@ExpTestImg/compressor'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

const COMPANION_URL = 'http://companion.ExpTestImg.io'

const ExpTestImg = new ExpTestImg()
  .use(Dashboard, { target: '#app', inline: true })
  .use(RemoteSources, { companionUrl: COMPANION_URL })
  .use(Webcam, {
    target: Dashboard,
    showVideoSourceDropdown: true,
    showRecordingLength: true,
  })
  .use(Audio, {
    target: Dashboard,
    showRecordingLength: true,
  })
  .use(ScreenCapture, { target: Dashboard })
  .use(ImageEditor, { target: Dashboard })
  .use(DropTarget, { target: document.body })
  .use(Compressor)
  .use(GoldenRetriever, { serviceWorker: true })

// Keep this here to access ExpTestImg in tests
window.ExpTestImg = ExpTestImg
