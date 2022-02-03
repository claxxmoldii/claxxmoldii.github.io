<script>
  export let pic, body, body2, body3;
</script>

<section class="isAbout isGrid">
  <img class="claxxWelder" src="/assets/images/{pic}" alt="welding minifig" />

  <div class="content">
    <p>{ body }</p>
    <p>{ body2 }</p>
    <p>{ body3 }</p>
  </div>
</section>

<!-- <section id="intro">
  {#each intro as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</section> -->

<style>
  .isAbout {
    /*background-color: beige;*/
  }

  .isGrid {
    grid-template-columns: 4fr 6fr ;
  }

  .claxxWelder {
    width: 250px;
    border:  6px hsla(0, 100%, 65%, .9) solid;
    border-radius: 50%;
  }
</style>
