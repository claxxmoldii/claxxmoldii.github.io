<script>
  import Head from './head.svelte';
  import Footeroo from './footeroo.svelte';
  import { makeTitle } from '../scripts/make_title.svelte';

  export let content, layout, allContent, allLayouts, env;
</script>

<html lang="en">
<Head title={makeTitle(content.filename)} />

<body class="isGrid">
  <svelte:component this={layout} {...content.fields} {content} {allContent} {allLayouts} />

  <footer class="isFlexCentered">
    <Footeroo />
  </footer>

<script src="https://kit.fontawesome.com/80f1b342a4.js" crossorigin="anonymous"></script>
</body>
</html>

<style>
  body {
    height: 100vh;
    grid-template-rows: auto 30px;
  }
</style>

