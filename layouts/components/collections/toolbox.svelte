<script>
  export let title, tagline;
</script>

<main class="">
  <ul>
    <h4>{ tagline }</h4>
    <li><a href="http://www.colors.commutercreative.com/">http://www.<span>namedwebcolors</span>.com/</a></li>
    <li><a href="https://css-tricks.com">https://<span>css-tricks</span>.com</a></li>
    <li><a href="https://plenti.co/">https://<span>plenti</span>.co/</a></li>
    <li><a href="https://svelte.dev/">https://<span>svelte</span>.dev/</a></li>
    <li><a href="https://sveltesociety.dev/">https://<span>sveltesociety</span>.dev/</a></li>
    <li><a href="https://madewithsvelte.com/">https://<span>madewithsvelte</span>.com/</a></li>
    <li><a href="https://awesomeopensource.com/">https://<span>awesomeopensource</span>.com/</a></li>
    <li><a href="http://getskeleton.com/">http://get<span>skeleton</span>.com/</a></li>
    <li><a href="https://gridbyexample.com/examples/">https://<span>gridbyexample</span>.com/examples/</a></li>
    <li><a href="https://tailwindcss.com/">https://<span>tailwindcss</span>.com/</a></li>
    <li><a href="https://tailwindcomponents.com/">https://<span>tailwindcomponents</span>.com/</a></li>
    <li><a href="https://fonts.google.com/">https://<span>googlefonts</span>.google.com/</a></li>
    <li><a href="https://fonts.adobe.com/">https://<span>adobefonts</span>.com/</a></li>\
    <li><a href="https://github.com/">https://<span>github</span>.com/</a></li>
    <li><a href="https://developer.mozilla.org/en-US/">https://developer.<span>mozilla</span>.org/en-US/</a></li>
    <li><a href="https://www.npmjs.com/package/http-server">https://www.<span>npm</span>js.com/package/http-server</a></li>
    <li><a href="https://expressjs.com/">https://<span>expressjs</span>.com/</a></li>
    <li><a href="https://www.mongodb.com/">https://www.<span>mongodb</span>.com/</a></li>
    <li><a href="https://www.freecodecamp.org/learn">https://www.<span>freecodecamp</span>.org/learn</a></li>
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
    margin-left: 30px;
  }

  li {
    line-height: 1rem;
    list-style: none;
    color:  dimgray;
    display:  inline;
    margin:  0;
  }
</style>
