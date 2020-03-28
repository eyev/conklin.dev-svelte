<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  :global(*) {
    box-sizing: border-box;
  }
  :global(:root) {
    --body-background: hsl(240, 3%, 13%);
    --body-color: hsl(0, 0%, 88%);
    --logo-color: --body-color;
    /* header */
    --nav-link-color: --body-color;
    --theme-toggle-color: --body-color;
    /* SuperHero */
    --superhero-name-color: hsl(145, 74%, 45%);
    --superhero-social-github-color: hsl(0, 0%, 96%);
    --superhero-social-link-color: hsl(0, 0%, 73%);
    --superhero-social-linkedin-color: hsl(201, 100%, 35%);
    --superhero-social-twitter-color: hsl(203, 89%, 53%);
    --superhero-title-location-color: --body-color;
    --superhero-social-link-hover-color: hsl(0, 0%, 100%);
    /* Experience */
    --experience-accomplishments-color: --body-color;
    --experience-timeline-color: hsl(240, 1%, 33%);
    /* Technologies */
    --technologies-icon-color: hsl(0, 0%, 60%);
    --technologies-subheading-color: hsl(0, 0%, 60%);
    /* Tooltip */
    --tooltip-background: hsla(0, 0%, 38%, 0.902);
    --tooltip-color: --body-color;
  }
  :global(:root .light) {
    --body-background: hsl(0, 0%, 88%);
    --body-color: hsl(240, 3%, 13%);
    --logo-color: hsl(240, 3%, 13%);
    /* SuperHero */
    --superhero-social-github-color: hsl(0, 0%, 20%);
    --superhero-social-hover-color: hsl(0, 0%, 0%);
    --superhero-social-link-color: hsl(240, 4%, 25%);
    --superhero-social-link-hover-color: hsl(0, 0%, 0%);

    /* Experience */
    --experience-accomplishments-color: hsl(240, 3%, 13%);
    --experience-timeline-color: hsl(0, 0%, 60%);
    /* Technologies */
    --technologies-icon-color: hsl(0, 0%, 33%);
    --technologies-subheading-color: hsl(0, 0%, 33%);
    /* Tooltip */
    --tooltip-background: hsla(0, 0%, 38%, 0.902);
    --tooltip-color: hsl(0, 0%, 88%);
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
