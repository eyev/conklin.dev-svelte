<style>
  .timeline {
    position: relative;
    padding-top: 3rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    margin-top: 2rem;
  }
  .timeline:before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: #525254;
    background-color: var(--experience-timeline-color);
    position: absolute;
    top: 0;
  }
  .top-cap:before {
    content: '';
    width: 1.25rem;
    height: 2px;
    background-color: #525254;
    background-color: var(--experience-timeline-color);
    position: absolute;
    top: 0;
    left: 0.45rem;
  }
  .bottom-cap:before {
    content: '';
    width: 1.25rem;
    height: 2px;
    background-color: #525254;
    background-color: var(--experience-timeline-color);
    position: absolute;
    bottom: 0;
    left: 0.45rem;
  }
</style>

<div class="timeline">
  <div class="top-cap" />
  <slot />
  <div class="bottom-cap" />
</div>
