<script>
  export let title, intro, components, content, allContent, current, tagline;
  import Nav from "../global/nav.svelte";

  const tagNum = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is inclusive and the minimum is inclusive
  }

 //  $: currentPage = content.pager;
 // let postsPerPage = 3;
 // let allPosts = allContent.filter(content => content.type == "post");
 // let totalPosts = allPosts.length;
 // let totalPages = Math.ceil(totalPosts / postsPerPage);
 //  $: postRangeHigh = currentPage * postsPerPage;
 //  $: postRangeLow = postRangeHigh - postsPerPage;
</script>

<main class="isGrid">
  <section class="upperJones isGrid">
    <header class="isGrid">
      <div>
        <h1><a class="title" href="/">{ title }</a></h1>
        <h3>{ tagline[tagNum(0,(tagline.length-1))] }</h3>
      </div>

    </header>
  </section>

  <section class="lowerJones isGrid">
    <div class="isNav isGrid">
      <Nav {current}/>
    </div>
  </section>
</main>

<style>
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
    /*margin-bottom: 10px;*/
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
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    margin-bottom:  10px;
  }

  .title {
    text-decoration: none;
    color: inherit;
  }
</style>

