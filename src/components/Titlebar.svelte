<script lang="ts">
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

<div class="titlebar" data-tauri-drag-region>
    <img alt="Logo" src="/favicon.png" />
    <p>Tauri Svelte Template!</p>
    <div>
        <button on:click={onMinimize}>-</button>
        <button on:click={onMaximize}>[]</button>
        <button on:click={onClose}>x</button>
    </div>
</div>

<style lang="scss">
  $color: orange;
  $tb-height: 32px;
  $tb-item-height: $tb-height - 6px;

  .titlebar {
    background-color: $color;
    height: $tb-height;

    display: flex;
    align-items: center;
    justify-content: space-between;

    user-select: none;

    border-radius: 0 10px 0 0;
    padding: 0 8px;

    p {
      position: fixed;
      left: 50%;
      transform: translateX(-50%);
      font-weight: bold;
      color: lightgrey;
    }

    img {
      height: $tb-item-height;
      width: $tb-item-height;
    }

    button {
      height: $tb-item-height;
      width: $tb-item-height;
      border: none;
      background-color: transparent;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      align-items: center;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        transition: background-color 0.13s ease-in-out;
      }
    }
  }
</style>