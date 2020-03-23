<script>
  export let content;
</script>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 6rem;
    background-color: var(--tooltip-background);
    color: var(--tooltip-color);
    text-align: center;
    padding: 0.5rem 0;
    border-radius: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    z-index: 1;
  }

  .tooltip .tooltiptext {
    top: 80%;
    left: 50%;
    margin-left: -3.5rem;
  }
</style>

<div class="tooltip">
  <slot />
  <span class="tooltiptext">{content}</span>
</div>
