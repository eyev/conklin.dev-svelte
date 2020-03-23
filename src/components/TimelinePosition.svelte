<script>
  export let position;
</script>

<style>
  .position-location-time {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    min-width: 16rem;
    margin-bottom: 1rem;
  }

  section.position:before {
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: #525254;
    background-color: var(--experience-timeline-color);
    position: absolute;
    left: -0.45rem;
    top: 0.85rem;
  }
  section.position {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 4rem;
  }
  @media (min-width: 720px) {
    section.position {
      flex-direction: row;
    }
  }
  .accomplishments {
    margin-left: 2rem;
  }
  h3 {
    font-size: 1.125rem;
    font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
  }
  li {
    list-style: inside;
    color: #e0e0e0;
    color: var(--experience-accomplishments-color);
    font-family: 'Open Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>

<section class="position">
  <div class="position-location-time">
    <span class="location">{position.location}</span>
    <time>{position.date}</time>
  </div>
  <div class="accomplishments">
    <h3>{position.company}, {position.position}</h3>
    <ul>
      {#each position.accomplishments as accomplishment}
        <li>{accomplishment}</li>
      {/each}
    </ul>
  </div>
</section>
