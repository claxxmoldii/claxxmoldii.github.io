<script>
  import BuildLog from '../components/behindthescenes/buildlog.svelte';
  import Reproduction from '../components/behindthescenes/reproduction.svelte';
  import Attributions from '../components/behindthescenes/attributions.svelte';
  import Issues from '../components/behindthescenes/issues.svelte';

  export let title, tagline, description, content, current, body, component;
</script>

<section class="bts container isGrid">
   <header>
      <h1>{ title }</h1>
      <h5>{ tagline }</h5>
  </header>

  <div class="components">
    {#if component == "buildlog"}
      <BuildLog />
    {/if}

    {#if component == "reproduction"}
      <Reproduction />
    {/if}

    {#if component == "attributions"}
      <Attributions />
    {/if}

    {#if component == "issues"}
      <Issues />
    {/if}
  </div>

</section>

<style>
  section {
    align-items: baseline;
  }

  .container {
    width:  50vw;
    /*background-color: beige;*/
  }

  .bts {
    margin-top: 30vh;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title list";
  }

  header {
    grid-area: title;
    position:  sticky;
    /*background-color: beige;*/
  }

  .components {
    grid-area: list;
    padding-bottom: 100px;
  }

  li {
    font-size: 1.6rem;
    list-style: none;
  }

  .date {
    color: lightskyblue;
    padding-left:  10px;
  }
</style>
