<script>
  import { SOCIAL_MEDIA } from '../data/social-media';
  import Icon from 'svelte-awesome/components/Icon.svelte';

  export let profile;

  function getSocialNetwork(id) {
    return SOCIAL_MEDIA.find(icon => icon.id === id);
  }
</script>

<style>
  .superhero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
  @media (min-width: 576px) {
    .superhero {
      flex-direction: row;
    }
  }
  .person {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 3.8rem;
    font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    color: var(--superhero-name-color);
    text-transform: uppercase;
  }
  h2::selection {
    background: var(--body-color);
  }
  h3 {
    font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.25rem;
    font-weight: 300;
    color: #fff;
    color: var(--superhero-title-location-color);
  }
  section.social {
    display: flex;
    flex-direction: column;
  }

  section.social a {
    color: #fff;
    color: var(--body-color);
    text-decoration: none;
  }

  figure {
    font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0;
    color: hsl(0, 0%, 88%);
    color: var(--superhero-social-link-color);
  }
  figure:hover {
    color: #fff;
    color: var(--superhero-social-link-hover-color);
  }
  :global(.social-icon) {
    width: 2.25rem;
    height: 2.25rem;
    margin-right: 1rem;
  }
  :global(.github) {
    color: #f5f5f5;
    color: var(--superhero-social-github-color);
  }
  :global(.linkedin) {
    color: #f5f5f5;
    color: var(--superhero-social-linkedin-color);
  }
  :global(.twitter) {
    color: #f5f5f5;
    color: var(--superhero-social-twitter-color);
  }
</style>

<div class="superhero" id="top">
  <section class="person">
    <h2>
      {profile.firstName}
      <br />
      {profile.lastName}
    </h2>
    <h3>{profile.title}</h3>
    <h3>{profile.currentLocation}</h3>
  </section>
  <section class="social">
    {#each profile.social as socialProfile}
      <a
        href="{getSocialNetwork(socialProfile.id).route}{socialProfile.username}"
        target="_blank"
        rel="noopener"
      >
        <figure>
          <Icon
            class="social-icon {socialProfile.id}"
            data="{getSocialNetwork(socialProfile.id).icon}"
          />
          <span class="username">{socialProfile.username}</span>
        </figure>
      </a>
    {/each}
  </section>
</div>
