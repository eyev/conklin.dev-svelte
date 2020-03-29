<script>
  import SectionHeader from './SectionHeader.svelte';
  import Timeline from './Timeline.svelte';
  import TimelinePosition from './TimelinePosition.svelte';
  import { webumeStore } from '../data/stores.js';
</script>

<style>
  section {
    padding: 2rem 0;
    margin-bottom: 4rem;
  }
</style>

<section id="experience">
  <SectionHeader>Experience</SectionHeader>
  <Timeline>
    {#each $webumeStore.experience as position}
      <TimelinePosition {position} />
    {/each}
  </Timeline>
</section>
