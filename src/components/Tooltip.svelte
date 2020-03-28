<script>
  export let content;
</script>

<style>
  /**
    Credit @cbracco: https://codepen.io/cbracco/pen/nufHz
  **/

  .tooltip {
    position: relative;
    cursor: pointer;
    text-align: center;
  }

  .tooltip:before,
  .tooltip:after {
    font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    position: absolute;
    visibility: hidden;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    -webkit-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
      -webkit-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    -moz-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
      -moz-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
      transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    pointer-events: none;
    background-color: var(--tooltip-background);
    color: var(--tooltip-color);
    border-radius: 0.15rem;
  }

  .tooltip:hover:before,
  .tooltip:hover:after,
  .tooltip:focus:before,
  .tooltip:focus:after {
    visibility: visible;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    opacity: 1;
  }
  .tooltip:before {
    z-index: 9;
    border: 0.375rem solid transparent;
    background: transparent;
    content: '';
  }
  .tooltip:after {
    z-index: 8;
    padding: 0.5rem;
    width: 8rem;
    background-color: hsla(0, 0%, 38%, 0.902);
    background-color: var(--tooltip-background);
    color: #fff;
    color: var(--tooltip-color);
    content: attr(data-tooltip);
    font-size: 14px;
    line-height: 1.2;
  }

  .tooltip:before,
  .tooltip:after {
    bottom: 105%;
    left: 50%;
  }

  .tooltip:before {
    margin-left: -0.375rem;
    margin-bottom: -0.75rem;
    border-top-color: hsla(0, 0%, 38%, 0.902);
    border-top-color: var(--tooltip-background);
  }
  .tooltip:after {
    margin-left: -4rem;
  }
</style>

<div class="tooltip" data-tooltip="{content}">
  <slot />
</div>
