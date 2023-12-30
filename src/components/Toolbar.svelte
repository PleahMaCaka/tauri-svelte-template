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

<div data-tauri-drag-region
     class="h-8 flex justify-between items-center bg-primary select-none rounded-t-xl px-2"
>
  <img class="h-6 w-6" alt="Logo" src="/favicon.png" />
  <p class="absolute left-1/2 transform -translate-x-1/2 font-bold text-white">Tauri Svelte Template!</p>
  <div class="flex items-center justify-between w-20">
    <button on:click={onMinimize} class="toolbar-btn">
      <img alt="Minimize" src="/toolbar/minimize.svg" />
    </button>
    <button on:click={onMaximize} class="toolbar-btn">
      <img alt="Maximize" src="/toolbar/maximize.svg" />
    </button>
    <button on:click={onClose} class="toolbar-btn">
      <img alt="Close" src="/toolbar/close.svg" />
    </button>
  </div>
</div>

<style lang="postcss">
  .toolbar-btn {
    @apply h-4 w-4 m-auto font-bold cursor-pointer hover:opacity-55 duration-75 transition-colors ease-in-out;
  }
</style>