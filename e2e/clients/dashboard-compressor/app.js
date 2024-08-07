import Compressor from '@ExpTestImg/compressor'
import Dashboard from '@ExpTestImg/dashboard'
import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'

const ExpTestImg = new ExpTestImg()
  .use(Dashboard, {
    target: document.body,
    inline: true,
  })
  .use(Compressor, {
    mimeType: 'image/webp',
  })

// Keep this here to access ExpTestImg in tests
window.ExpTestImg = ExpTestImg
