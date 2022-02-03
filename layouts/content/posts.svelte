<script>
    export let title, date, readTime, author, pic, caption, body, tsuzuku;
</script>

<section class="isMarginAutoCentered">

    <img src="/assets/images/{pic}" alt="{caption}">
    <p class="caption">{caption}</p>

    <header class="">
    <h1 class="">{ title }</h1>
    <div class="byLine">
      <span class="">{ date.replaceAll('/', '.') }</span>
      <span class="">/ { readTime }</span>
      <span>/ { author }</span>
    </div>
    </header>

    <!-- <article class="">{@html body}</article> -->
    <article class="">
      {#each body as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </article>

    {#if tsuzuku}
      <p class="tsuzuku">つづく</p>
    {:else}
      <p class="tsuzuku">終わり</p>
    {/if}
      <div class="postnav isFlexBetween">
      <div>
        <span><a href="/">home</a></span>
      </div>
      <div>
      <span><a href="/posts">recent posts</a></span>
      <span>/</span>
      <span><a href="/completeposts">complete posts</a></span>
      </div>
    </div>

</section>

<style>
  section {
    max-width: 50vw;
    padding: 50px 0;
  }

  header {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 0;
    /*letter-spacing: 1px;*/
  }

  .byLine {
    color: #3f3f3f;
    font-size: 1.6rem;
    font-weight: 500;
  }

  img {
    max-width: 100%;
  }

  a:link {
    color:  pink;
    text-decoration:  none;
  }

  .tsuzuku {
    text-align: end;
  }

  .postnav {
    border-top: solid tomato 1px;
    padding-top: 1rem;
    margin-top:  4rem;
    color: tomato;
  }

  .postnav a {
    text-decoration:  none;
    color: tomato;
  }

  .postnav a:hover {
    text-decoration:  underline;
  }


</style>
