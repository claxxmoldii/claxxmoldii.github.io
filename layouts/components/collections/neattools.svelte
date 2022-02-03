<script>
  export let title, tagline;
</script>

<main class="">
  <ul>
    <h4>{tagline}</h4>
    <li><a href="https://carrd.co/">https://<span>carrd</span>.co/</a></li>
    <li><a href="https://blocsapp.com/">https://<span>blocsapp</span>.com/</a></li>
    <li><a href="https://webflow.com/">https://<span>webflow</span>.com/</a></li>
    <li><a href="https://strapi.io">https://<span>strapi</span>.io</a></li>
    <li><a href="https://froont.com/">https://<span>froont</span>.com/</a></li>
    <li><a href="https://www.pulsecms.com/">https://www.<span>pulsecms</span>.com/</a></li>
    <li><a href="https://www.contentful.com/">https://www.<span>contentful</span>.com/</a></li>
    <li><a href="https://gohugo.io/">https://go<span>hugo</span>.io/</a></li>
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
  }
</style>
