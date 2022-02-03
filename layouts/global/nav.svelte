<script>
  export let current;
</script>

<nav>
  <ul class="menu isFlex">
    <li>
      <a  class:selected="{current === 'home'}"
          on:click="{() => current = 'home'}"
          href="/" title="home">
        home
      </a>
    </li>
    <li>
      <a  class:selected="{current === 'posts'}"
          on:click="{() => current = 'posts'}"
          href="/posts" title="posts">
        posts
      </a>

    </li>
    <li>
      <a  class:selected="{current === 'collections'}"
          on:click="{() => current = 'collections'}"
          href="/collections/toolbox" title="collections">
        collections
      </a>
    </li>
    <li>
      <a  class:selected="{current === 'about'}"
          on:click="{() => current = 'about'}"
          href="/about" title="about">
        about
      </a>
    </li>
  </ul>
</nav>

<style>
  li {
    text-decoration:  none;
    list-style: none;
    padding-right: 75px;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);
  }

  a:hover {
    color: #ff6565;
  }

  .selected {
    color: rgba(0, 0, 0, 0.8);
  }

  .selected:hover {
    pointer-events: none;
  }
</style>
