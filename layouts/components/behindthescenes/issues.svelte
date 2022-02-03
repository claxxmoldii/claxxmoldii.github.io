<ul>
    <li>
      navigation.svelte is based on svelte class directive 'https://svelte.dev/tutorial/classes'. it's wonky here. [collections] and [about] links have to be double-clicked for css to take effect. links are working though. [home] and [posts] are okay.
      resolved. svelte prop passing. <span class="date">/2021.04.17</span>
    </li><br>

    <li>
      links... have to be refreshed. i'm not sure what's going on here but after watcing jantcu/plenti bigspring: part 18 video, tried turning off javascript, and funky stuff went away. tried running public folder on npm-http-server, links need refreshing. turned off js, funky stuff went away. using FF. tried it on brave, same thing... <span class="date">/2021.04.17</span>
    </li><br>

    <li>
      links-refreshing... may have something to do with svelte: component allLayout prop... not yet done with the detective work... <span class="date">/2021.04.21</span>
    </li><br>

    <li>
      do not fight the tool... nav is okay as it is, use it. nav is working okay now.
    </li>

    <li>
      since rebuild from plenti v.0.4.24, tagline function is working again... huh...
      yey!
    </li>

    <li>checking... teshting...</li>

  </ul>

<style>
    ul {
    grid-area: list;
    padding-bottom: 100px;
  }

  li {
    color: rgba(0,0,0,0.7);
    font-size: 1.6rem;
    list-style: none;
  }

  .date {
    color: lightskyblue;
    padding-left:  10px;
  }
</style>
