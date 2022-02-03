<script>
  export let title, tagline;
</script>

<main class="">
  <ul class="">
    <h4>{ tagline }</h4>
    <li>
      <a href="https://www.youtube.com/channel/UCZSr5B0l07JXK2FIeWA0-jw/videos">
        https://www.youtube.<span>sveltesociety</span>.com/
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=vEQhLyqgFE4">https://www.youtube.<span>sveltemastery</span>.com/<span class="com">
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w">
        https://www.youtube.<span>academind</span>.com/
      </a>
    </li>
    <li><a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg">
      https://www.youtube.<span>netninja</span>.com/</a>
    </li>
    <li><a href="https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw">
      https://www.youtube.com/<span>codinggarden</span></a>
    </li>
    <li><a href="https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw">
      https://www.youtube.com/<span>kevinpowell</span></a>
    </li>
    <li><a href="https://www.youtube.com/channel/UCyOXWTxea5FbOcyIjbB9SvA">
      https://www.youtube.com/<span>jantcu</span></a>
    </li>
    <li><a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ">
      https://www.youtube.com/<span>freecodecamp</span></a>
    </li>
  </ul>
</main>

<style>
  main {
    grid-template-columns: 1fr 3fr;
  }

  h3 {
    font-weight:  400;
    /*display: inline;*/
    font-size:  2rem;
  }

  h4 {
    /*display: inline;*/
    margin:  0;
    font-size:  1.7rem;
  }

  span {
    color: indianred;
  }

  a {
    text-decoration: none;
    color: rgba(220, 20, 60, 0.4);
  }

  a:hover {
    color: indianred;
  }

  ul {
    margin:  0;
    margin-left: 30px;
  }

  li {
    /*line-height: 1rem;*/
    list-style: none;
    color:  dimgray;
    display:  inline-block;
  }
</style>
