<script>
  import Nav from "../global/nav.svelte";
  import RecentPosts from "../components/posts/recentposts.svelte";
  import Completeposts from "../components/posts/completeposts.svelte";
  import About from "../components/pages/about.svelte";

  export let title, pic, description, content, current, body, body2, body3, allContent, components, allPosts, sub;
</script>

<main class="isGrid">
  <section class="upperJones isGrid">
    <header class="isGrid">
      <h1>{title}</h1>
    </header>
  </section>

  <section class="lowerJones">
    <div class="isNav isGrid">
      <Nav {current}/>
    </div>

    <div class="isContent">
      {#if current == "posts" }
        <RecentPosts {allPosts} {allContent} />
      {:else if current == "about"}
        <About {title} {body} {body2} {body3} {pic}/>
      {:else if current == "contact"}
        <h3>contact!</h3>
      {:else if current == "completeposts"}
        <Completeposts {allPosts} {allContent} />
        <!-- yeah... -->
      {/if}
    </div>
  </section>
</main>

<style>
  .isNav {
    height: 50px;
  }

  .lowerJones {

  }

  .isContent {
    grid-template-columns: 200px, 1fr;
    grid-template-areas:
    "pix body";
    /*background-color: pink;*/
    /*margin-left: 30%;*/
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
