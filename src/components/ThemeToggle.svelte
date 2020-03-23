<script>
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { lightBulbOn, lightBulbSlash } from '../assets/icons';

  let theme = 'dark';
  let themeStore = writable(theme);

  onMount(() => {
    const initTheme = window.localStorage.getItem('theme') || 'dark';
    themeStore.update(() => initTheme);

    themeStore.subscribe(value => {
      value === 'dark'
        ? window.document.body.classList.remove('light')
        : window.document.body.classList.add('light');
      window.localStorage.setItem('theme', value);
      theme = value;
    });
  });

  function toggleTheme() {
    themeStore.update(t => {
      const newTheme = t === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }
</script>

<style>
  button.theme-toggle {
    background: transparent;
    border: none;
    color: #fff;
    color: var(--theme-toggle-color);
    padding: 0.65rem 0.5rem 0.5rem;
  }
</style>

<button
  class="theme-toggle"
  on:click={toggleTheme}
  alt="Toggle theme - current theme: {theme}">
  <Icon
    data={theme === 'dark' ? lightBulbOn : lightBulbSlash}
    style="margin-top: .1rem;" />
</button>
