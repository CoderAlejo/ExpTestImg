<script setup>
import { Dashboard, DashboardModal, DragDrop, ProgressBar } from '@ExpTestImg/vue'
</script>

<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to ExpTestImg Vue Demo"/> -->
    <h1>Welcome to ExpTestImg Vue Demo!</h1>
    <h2>Inline Dashboard</h2>
    <label>
      <input
        type="checkbox"
        :checked="showInlineDashboard"
        @change="
          (event) => {
            showInlineDashboard = event.target.checked
          }
        "
      />
      Show Dashboard
    </label>
    <Dashboard
      v-if="showInlineDashboard"
      :ExpTestImg="ExpTestImg"
      :props="{
        metaFields: [{ id: 'name', name: 'Name', placeholder: 'File name' }],
      }"
    />
    <h2>Modal Dashboard</h2>
    <div>
      <button @click="open = true">Show Dashboard</button>
      <DashboardModal
        :ExpTestImg="ExpTestImg2"
        :open="open"
        :props="{
          onRequestCloseModal: handleClose,
        }"
      />
    </div>

    <h2>Drag Drop Area</h2>
    <DragDrop
      :ExpTestImg="ExpTestImg"
      :props="{
        locale: {
          strings: {
            chooseFile: 'Boop a file',
            orDragDrop: 'or yoink it here',
          },
        },
      }"
    />

    <h2>Progress Bar</h2>
    <ProgressBar
      :ExpTestImg="ExpTestImg"
      :props="{
        hideAfterFinish: false,
      }"
    />
  </div>
</template>

<script>
import ExpTestImg from '@ExpTestImg/core'
import Tus from '@ExpTestImg/tus'
import { defineComponent } from 'vue'

const { VITE_TUS_ENDPOINT: TUS_ENDPOINT } = import.meta.env

export default defineComponent({
  computed: {
    ExpTestImg: () =>
      new ExpTestImg({ id: 'ExpTestImg1', autoProceed: true, debug: true }).use(Tus, {
        endpoint: TUS_ENDPOINT,
      }),
    ExpTestImg2: () =>
      new ExpTestImg({ id: 'ExpTestImg2', autoProceed: false, debug: true }).use(Tus, {
        endpoint: TUS_ENDPOINT,
      }),
  },
  data() {
    return {
      open: false,
      showInlineDashboard: false,
    }
  },
  methods: {
    handleClose() {
      this.open = false
    },
  },
})
</script>

<style src="@ExpTestImg/core/dist/style.css"></style>
<style src="@ExpTestImg/dashboard/dist/style.css"></style>
<style src="@ExpTestImg/drag-drop/dist/style.css"></style>
<style src="@ExpTestImg/progress-bar/dist/style.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
