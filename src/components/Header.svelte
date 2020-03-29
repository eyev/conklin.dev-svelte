<script>
  import Nav from '../components/Nav.svelte';
  import ThemeToggle from './ThemeToggle.svelte';

  export let segment;
</script>

<style>
  header {
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    margin-bottom: 2.5rem;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: #1f1f21;
    background: var(--body-background);
    z-index: 1;
    transition: background 0.3s ease-in;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    color: var(--logo-color);
    display: flex;
    margin-right: auto;
    text-decoration: none;
  }
</style>

<header class="{segment === undefined ? 'home' : undefined}">
  <a href="#top" class="logo">conklin.dev</a>
  <Nav />
  <ThemeToggle />
</header>
