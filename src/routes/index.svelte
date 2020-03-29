<script context="module">
  export async function preload({ params, query }) {
    const profileRequest = await this.fetch(`/data/webume.json`);
    const profile = await profileRequest.json();
    if (profileRequest.status === 404) {
      this.error(404, 'Not found');
    }
    return { profile };
  }
</script>

<script>
  import SuperHero from '../components/SuperHero.svelte';
  import Experience from '../components/Experience.svelte';
  import Technologies from '../components/Technologies.svelte';
  import { webumeStore } from '../data/stores.js';

  export let profile;
  webumeStore.set(profile);
</script>

<svelte:head>
  <title>conklin.dev - Justin Conklin - Software Engineer Portfolio</title>
</svelte:head>
<SuperHero />
<Experience />
<Technologies />
<!-- TODO: Projects? -->
