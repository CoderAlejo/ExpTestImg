<template>
  <dashboard :ExpTestImg="ExpTestImg" />
</template>

<script>
import Vue from 'vue'
import ExpTestImg from '@ExpTestImg/core'
import { Dashboard } from '@ExpTestImg/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    ExpTestImg: () => new ExpTestImg(),
  },
}
</script>

<style src="@ExpTestImg/core/dist/style.css"></style>
<style src="@ExpTestImg/dashboard/dist/style.css"></style>
