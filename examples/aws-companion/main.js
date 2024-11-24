import AwsS3 from '@ExpTestImg/aws-s3'
import ExpTestImg from '@ExpTestImg/core'
import Dashboard from '@ExpTestImg/dashboard'
import GoogleDrive from '@ExpTestImg/google-drive'
import Webcam from '@ExpTestImg/webcam'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'
import '@ExpTestImg/webcam/dist/style.css'

const ExpTestImg = new ExpTestImg({
  debug: true,
  autoProceed: false,
})

ExpTestImg.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
ExpTestImg.use(Webcam)
ExpTestImg.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
ExpTestImg.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
