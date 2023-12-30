<script lang="ts">
  // The script remains the same as it's not affected by the CSS changes
  import { appWindow } from "@tauri-apps/api/window"

  const onMinimize = () => {
    appWindow.minimize()
  }

  const onMaximize = () => {
    appWindow.isMaximized().then((isMaximized) => {
      if (isMaximized) {
        appWindow.unmaximize()
      } else {
        appWindow.maximize()
      }
    })
  }

  const onClose = () => {
    appWindow.close()
  }
</script>

<div class="h-8 flex justify-between items-center bg-primary select-none rounded-t-xl px-2"
     data-tauri-drag-region
>
  <img alt="Logo" class="h-6 w-6" src="/favicon.png" />
  <p class="absolute left-1/2 transform -translate-x-1/2 font-bold text-white">Tauri Svelte Template!</p>
  <div class="flex items-center justify-between w-20">
    <button class="toolbar-btn" on:click={onMinimize}>
      <img alt="Minimize" src="/toolbar/minimize.svg" />
    </button>
    <button class="toolbar-btn" on:click={onMaximize}>
      <img alt="Maximize" src="/toolbar/maximize.svg" />
    </button>
    <button class="toolbar-btn" on:click={onClose}>
      <img alt="Close" src="/toolbar/close.svg" />
    </button>
  </div>
</div>

<style lang="postcss">
  .toolbar-btn {
    @apply h-4 w-4 m-auto font-bold cursor-pointer hover:opacity-55 duration-75 transition-colors ease-in-out;
  }
</style>