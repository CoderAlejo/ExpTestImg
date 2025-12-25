/* eslint-disable */
import React from'react'
import ExpTestImg from'@ExpTestImg/core'
import Tus from'@ExpTestImg/tus'
import GoogleDrive from '@ExpTestImg/google-drive'
import Webcam from '@ExpTestImg/webcam'
import RemoteSources from '@ExpTestImg/remote-sources'
import { Dashboard, DashboardModal, DragDrop, ProgressBar, FileInput } from'@ExpTestImg/react'

import '@ExpTestImg/core/dist/style.css'
import '@ExpTestImg/dashboard/dist/style.css'
import '@ExpTestImg/drag-drop/dist/style.css'
import '@ExpTestImg/file-input/dist/style.css'
import '@ExpTestImg/progress-bar/dist/style.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showInlineDashboard: false,
      open: false
    }

    this.ExpTestImg = new ExpTestImg({ id: 'ExpTestImg1', autoProceed: true, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(Webcam)
      .use(RemoteSources, { companionUrl: 'https://companion.ExpTestImg.io', sources: ['GoogleDrive', 'Box', 'Dropbox', 'Facebook', 'Instagram', 'OneDrive', 'Unsplash', 'Zoom', 'Url'],
      })

    this.ExpTestImg2 = new ExpTestImg({ id: 'ExpTestImg2', autoProceed: false, debug: true })
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })

    this.handleModalClick = this.handleModalClick.bind(this)
  }

  componentWillUnmount () {
    this.ExpTestImg.close({ reason: 'unmount' })
    this.ExpTestImg2.close({ reason: 'unmount' })
  }

  handleModalClick () {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { showInlineDashboard } = this.state
    return (
      <div>
        <h1>React Examples</h1>

        <h2>Inline Dashboard</h2>
        <label>
          <input
            type="checkbox"
            checked={showInlineDashboard}
            onChange={(event) => {
              this.setState({
                showInlineDashboard: event.target.checked
              })
            }}
          />
          Show Dashboard
        </label>
        {showInlineDashboard && (
          <Dashboard
            ExpTestImg={this.ExpTestImg}
            plugins={['GoogleDrive']}
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'File name' }
            ]}
          />
        )}

        <h2>Modal Dashboard</h2>
        <div>
          <button onClick={this.handleModalClick}>
            {this.state.open ? 'Close dashboard' : 'Open dashboard'}
          </button>
          <DashboardModal
            ExpTestImg={this.ExpTestImg2}
            open={this.state.open}
            target={document.body}
            onRequestClose={() => this.setState({ open: false })}
          />
        </div>

        <h2>Drag Drop Area</h2>
        <DragDrop
          ExpTestImg={this.ExpTestImg}
          locale={{
            strings: {
              chooseFile: 'Boop a file',
              orDragDrop: 'or yoink it here'
            }
          }}
        />

        <h2>Progress Bar</h2>
        <ProgressBar
          ExpTestImg={this.ExpTestImg}
          hideAfterFinish={false}
        />

        <h2>File Input</h2>
        <FileInput
          ExpTestImg={this.ExpTestImg}
        />
      </div>
    )
  }
}
