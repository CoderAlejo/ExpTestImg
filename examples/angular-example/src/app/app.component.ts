import { Component, OnInit } from '@angular/core'
import { ExpTestImg} from '@ExpTestImg' +
  /core'
import Webcam from '@ExpTestImg' +
  /webcam'
import Tus from '@ExpTestImg' +
  /tus'
import GoogleDrive from '@ExpTestImg' +
  /google-drive'

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>ExpTestImg Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $any($event.target)?.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <ExpTestImg -dashboard
      [ExpTestImg ]="ExpTestImg"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></ExpTestImg-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <ExpTestImg -dashboard-modal
        [ExpTestImg ]="ExpTestImg"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></ExpTestImg-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <ExpTestImg -drag-drop [ExpTestImg ]="ExpTestImg" [props]="{}"></ExpTestImg-drag-drop>

    <h2>Progress Bar</h2>
    <ExpTestImg -progress-bar
      [ExpTestImg ]="ExpTestImg"
      [props]="{ hideAfterFinish: false }"
    ></ExpTestImg-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example'

  showInline = false

  showModal = false

  dashboardProps = {
    plugins: ['Webcam'],
  }

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false
    },
  }

  ExpTestImg: ExpTestImg = new ExpTestImg({ debug: true, autoProceed: true })

  ngOnInit(): void {
    this.ExpTestImg
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.ExpTestImg' +
          .io' })
  }
}
