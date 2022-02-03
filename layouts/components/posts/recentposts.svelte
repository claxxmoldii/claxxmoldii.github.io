<script>
  import { sortByDate } from  '../../scripts/sort_by_date.svelte';
  export let allContent;

  let allPosts = sortByDate(allContent.filter(content => content.type == "posts"));

  // let allPosts = allContent.filter(content => content.type == "posts");

  // $: allPosts = allPosts.reverse();
</script>

<section>
  <h3>Recent blog posts:</h3>
  <ul>
    {#each allPosts as post, i}
      {#if i >= 0 && i < 3}
        <li>{post.fields.date.replaceAll('/', '.')} <a href="{post.path}">{post.fields.title}</a></li>
      {/if}
    {/each}
  </ul>
  <hr class="sep">
  <div class="completeposts">
    <a class="" href="/completeposts">
        complete posts list
      </a>
  </div>
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
</style>
