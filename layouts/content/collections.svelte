<script>
  //import Uses from "../components/source.svelte";
  import ToolBox from "../components/collections/toolbox.svelte";
  import NeatTools from "../components/collections/neattools.svelte";
  import BingeWatch from "../components/collections/bingewatch.svelte";
  import ToolCart from "../components/collections/toolcart.svelte";
  import Nav from "../global/nav.svelte";
  import CollectionNav from "../components/collections/collectionnav.svelte";

  export let title, tagline, description, content, current, body, collection;
</script>

<main class="isGrid">
  <section class="upperJones isGrid">
    <header class="isGrid">
      <h1>collections</h1>
    </header>
  </section>

  <section class="lowerJones">
    <div class="isNav isGrid">
      <Nav {current}/>
    </div>

    <div class="isGrid isContent ">
      <div class="collect-nav ">
        <CollectionNav {collection} />
      </div>
      <div class="collection ">
        {#if collection == "toolbox"}
          <ToolBox {title} {tagline}/>
        {/if}

        {#if collection == "neattools"}
          <div class="neattools">
            <NeatTools {title} {tagline}/>
          </div>
        {/if}

        {#if collection == "toolcart"}
          <div class="toolcart">
            <ToolCart {title} {tagline}/>
          </div>
        {/if}

        {#if collection == "bingewatch"}
          <div class="bingewatch">
            <BingeWatch {title} {tagline}/>
          </div>
        {/if}
      </div>
    </div>
  </section>
</main>

<style>
  .isNav {
    height: 50px;
  }

  .isContent {
    grid-template-columns: 1fr 3fr;
      /*grid-template-areas:
      "pix body";*/
    /*padding-top: 5rem;*/
  }

  .collection {

  }

  .collect-nav {
    margin-right:  2rem;
  }

  .neattools {
    margin-top: 35px;
  }

  .toolcart {
    margin-top: 70px;
  }

  .bingewatch {
    margin-top: 105px;
  }

  main {
    max-width: 50vw;
    max-height: 100vh;
    margin-left: 30vw;
    grid-template-rows: 40vh auto;
  }

  section {
    width: 50vw;
    margin: 0;
  }

  header {
    border-bottom: 2px solid #ff6565;
    align-items: end;
  }

  .isNav {
    justify-items: end;
    margin-top: 10px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }

  p {
    margin: 0;
    list-style: 10px;
  }
</style>
