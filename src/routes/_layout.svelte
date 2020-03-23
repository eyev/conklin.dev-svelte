<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(:root) {
    --body-background: #1f1f21;
    --body-color: #e0e0e0;
    --logo-color: --body-color;
    /* header */
    --nav-link-color: --body-color;
    --theme-toggle-color: --body-color;
    /* SuperHero */
    --superhero-name-color: #1ec966;
    --superhero-social-github-color: #f5f5f5;
    --superhero-social-hover-color: #fff;
    --superhero-social-linkedin-color: #0077b5;
    --superhero-social-twitter-color: #1da1f2;
    --superhero-title-location-color: --body-color;

    /* Experience */
    --experience-accomplishments-color: --body-color;
    --experience-timeline-color: #525254;
    /* Technologies */
    --technologies-icon-color: #999;
    --technologies-subheading-color: #999;
    /* Tooltip */
    --tooltip-background: rgba(31, 31, 33, 0.9);
    --tooltip-color: --body-color;
  }
  :global(:root .light) {
    --body-background: #e0e0e0;
    --body-color: #1f1f21;
    --logo-color: #1f1f21;
    /* SuperHero */
    --superhero-social-github-color: #333;
    --superhero-social-hover-color: #000;
    /* Experience */
    --experience-accomplishments-color: #1f1f21;
    --experience-timeline-color: #999;
    /* Technologies */
    --technologies-icon-color: #555;
    --technologies-subheading-color: #555;
    /* Tooltip */
    --tooltip-background: #3c3c3c;
    --tooltip-color: #e0e0e0;
  }
  :global(::selection) {
    background: #1ec966; /* WebKit/Blink Browsers */
  }
  :global(::-moz-selection) {
    background: #1ec966; /* Gecko Browsers */
  }
  .app-shell {
    display: block;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    padding: 0 1rem;
  }
</style>

<div class="app-shell">
  <Header {segment} />

  <main>
    <slot />
  </main>
</div>
