<script lang="ts">
	import { Dashboard, DashboardModal, DragDrop, ProgressBar } from '@ExpTestImg/svelte'
	import ExpTestImg from '@ExpTestImg/core'
	import Webcam from '@ExpTestImg/webcam'
	import XHRUpload from '@ExpTestImg/xhr-upload'

	const createExpTestImg = () => {
		return new ExpTestImg().use(Webcam).use(XHRUpload, {
			bundle: true,
			endpoint: 'http://localhost:9967/upload',
			allowedMetaFields: ['something'],
			fieldName: 'files',
		})
	}

	let ExpTestImg1 = createExpTestImg()
	let ExpTestImg2 = createExpTestImg()

	let open = false;
	let showInlineDashboard = true;
</script>

<main>
	<h1>Welcome to the <code>@ExpTestImg/svelte</code> demo!</h1>
	<h2>Inline Dashboard</h2>
	<label>
      <input
        type="checkbox"
				bind:checked={showInlineDashboard}
			/>
      Show Dashboard
	</label>
	{#if showInlineDashboard}
		<Dashboard
			ExpTestImg={ExpTestImg1}
			plugins={['Webcam']}
		/>
	{/if}
	<h2>Modal Dashboard</h2>
	<div>
		<button on:click={() => open = true}>Show Dashboard</button>
		<DashboardModal
			ExpTestImg={ExpTestImg2}
			open={open}
			props={{
				onRequestCloseModal: () => open = false,
				plugins: ['Webcam']
			}}
		/>
	</div>

	<h2>Drag Drop Area</h2>
	<DragDrop
		ExpTestImg={ExpTestImg1}
	/>

	<h2>Progress Bar</h2>
	<ProgressBar
		ExpTestImg={ExpTestImg1}
		props={{
			hideAfterFinish: false
		}}
	/>
</main>
<style global>
	@import "@ExpTestImg/core/dist/style.min.css";
	@import "@ExpTestImg/dashboard/dist/style.min.css";
	@import "@ExpTestImg/drag-drop/dist/style.min.css";
	@import "@ExpTestImg/progress-bar/dist/style.min.css";
	input[type="checkbox"] {
		user-select: none;
	}
</style>
