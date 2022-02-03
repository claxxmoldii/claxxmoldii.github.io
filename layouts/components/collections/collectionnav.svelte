<script>
  export let collection;
</script>

<nav>
  <ul class="isGrid menu">
    <li>
      <a  class:selected="{collection === 'toolbox'}"
          on:click="{() => collection = 'toolbox'}"
          href="/collections/toolbox" title="toolbox">
        toolbox
      </a>
    </li>
    <li>
      <a  class:selected="{collection === 'neattools'}"
          on:click="{() => collection = 'neattools'}"
          href="/collections/neattools" title="neattools">
        neattools
      </a>

    </li>
    <li>
      <a  class:selected="{collection === 'toolcart'}"
          on:click="{() => collection = 'toolcart'}"
          href="/collections/toolcart" title="toolcart">
        toolcart
      </a>
    </li>
    <li>
      <a  class:selected="{collection === 'bingewatch'}"
          on:click="{() => collection = 'bingewatch'}"
          href="/collections/bingewatch" title="bingewatch">
        bingewatch
      </a>
    </li>
  </ul>
</nav>

<style>
  ul {

  }

  li {
    text-decoration:  none;
    text-align: right;
    list-style: none;
    /*padding-right: 75px;*/
    justify-self: end;
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
