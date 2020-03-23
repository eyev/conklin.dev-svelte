<script>
  import SectionHeader from './SectionHeader.svelte';
  import Tooltip from './Tooltip.svelte';
  import { ICONS } from '../assets/icons';
  import Icon from 'svelte-awesome/components/Icon.svelte';

  export let profile;
  function getTechnologyIcon(id) {
    return ICONS.find(x => x[id]);
  }
</script>

<style>
  :global(.tech-icon) {
    width: 4rem;
    height: 4rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    color: #999;
    color: var(--technologies-icon-color);
  }
  :global(svg.fa-icon.tech-icon.svelte path:nth-child(1)) {
    fill: #1f1f21;
    fill: var(--body-background);
  }
  h3 {
    font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #999;
    color: var(--technologies-subheading-color);
    margin-bottom: 1rem;
  }
  .languages,
  .frameworks {
    display: flex;
    flex-wrap: wrap;
  }
  section {
    padding-bottom: 4rem;
  }
</style>

<section id="technologies">
  <SectionHeader>Technologies</SectionHeader>
  <h3>Languages & Supersets</h3>
  <div class="languages">
    {#each profile.technologies.languages as language}
      <Tooltip bind:content={language.name}>
        <Icon
          data={getTechnologyIcon(language.id)}
          class="tech-icon {language.id}" />
      </Tooltip>
    {/each}
  </div>
  <h3>Frameworks, Libraries, & Tools</h3>
  <div class="frameworks">
    {#each profile.technologies.frameworks as framework}
      <Tooltip bind:content={framework.name}>
        <Icon
          data={getTechnologyIcon(framework.id)}
          class="tech-icon {framework.id}" />
      </Tooltip>
    {/each}
  </div>
</section>
