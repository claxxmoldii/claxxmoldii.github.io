<script>
  import { sortByDate } from  '../../scripts/sort_by_date.svelte';

  export let allContent;

  let allPosts = sortByDate(allContent.filter(content => content.type == "posts"));
  // let allPosts = everyPosts.reverse();//latest first

  let postStart = 0;
  let numOfItems = allPosts.length;
  let numPerPage = 5;
  let currentPage = 1;
  let numOfPages = Math.ceil(numOfItems/numPerPage);
  let postEnd;

  function incrementer() {
    currentPage += 1;
  };

  function decrementer() {
    currentPage -= 1;
  };

  $: numPerPage;
  $: postStart = (currentPage-1)*numPerPage;
  $: postEnd = postStart + numPerPage;
  $: somePosts = (allPosts.slice(postStart, postEnd));

  // onMount(async () => {
  //   return somePosts = allPosts;
  // });
</script>

<section>
  <h3>complete posts</h3>
  <ul>
    {#each somePosts as post, i}
      {#if i >= 0 && i < numPerPage}
        <li>{post.fields.date.replaceAll('/', '.')} <a href="{post.path}">{post.fields.title}</a></li>
      {/if}
    {/each}
  </ul>
  <hr class="sep">
  <div class="pejjinetaur">
    {#if currentPage == 1 }
      <a href="#" class="limit">&lt</a>
    {:else}
      <a href="#" on:click={decrementer}>&lt</a>
    {/if}
    <span> . . . </span>
    {#if currentPage == numOfPages }
      <a href="#" class="limit">&gt</a>
    {:else}
      <a href="#" on:click={incrementer}>&gt</a>
    {/if}
  </div>
  <!-- <div class="pejjinetaur">
    <button on:click={decrementer}>&lt</button>
    <button on:click={incrementer}>&gt</button>
    <p>current page is {currentPage} </p>
    <p>postStart is {postStart}, postEnd is {postEnd} </p>
    <p>there are {numOfItems} posts, there are {numOfPages} pages</p>
  </div> -->
</section>

<style>
  section,
  .sep {
    margin-left: 30%;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1.7rem;
    margin-bottom:  .5rem;
    color:  grey;
  }

  li {
    /*font-weight:  500;*/
    line-height: 2rem;
    list-style:  none;
    color:  rgba(0,0,0,0.6);
  }

  li a {
    text-decoration:  none;
    color:  tomato;
    padding-left:  2rem;
  }

  a::before {
    content: none;
  }

  a:hover,
  .completeposts a:hover {
    text-decoration: underline;
    /*color: mediumpurple;*/
    /*font-weight:  bolder;*/
  }

  .sep {
    margin: 0;
    /*margin-left:  30%;*/
/*    margin-top: 1.5rem;
    margin-bottom: 1.5rem;*/
    width: 24rem;
    border-top: 2px solid tomato;
  }

  .completeposts {
    text-align: right;
    width: 24rem;
  }

  .completeposts a {
    text-decoration:  none;
    color:  tomato;
  }

  .pejjinetaur {
    font-size: 2rem;
    color: tomato;
  }

  .pejjinetaur a {
    color:  tomato;
    text-decoration: none;
  }

  .pejjinetaur .limit {
    color: grey;
    cursor: inherit;
  }
</style>
