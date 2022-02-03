<div>
  <h4>summary</h4>
  <ul>
    <li>update plenti</li>
    <li>create new 'claxxmoldii' with new plenti</li>
    <li>copy 'plenti.json'</li>
    <li>recreate content type: 'behindthescenes'</li>
    <li>copy 'index.json' file</li>
    <li>copy 'global' folder</li>
    <li>copy 'assets' folder</li>
    <li>recreate content type: 'collections'</li>
    <li>copy 'posts.json' file</li>
    <li>recreate content type: 'posts'</li>
    <li>test! test! test!</li>
  </ul>
</div>

<h4>steps</h4>
<ul>
  <li>update plenti:</li>
  <li>update plenti with homebrew</li>    
  <li><code>brew upgrade plenti</code></li>
  <br>

  <li>create new 'claxxmoldii' with new plenti:</li>
  <li>rename 'claxxmoldii' folder to 'claxxmolidd-old'</li>
  <li>create plenti new site</li>
  <li><code>plenti new site claxxmoldii</code></li>
  <br>

  <li>copy 'plenti.json':</li>
  <br>

  <li>recreate content type: 'behindthescenes':</li>
  <li><code>plenti new type behindthescenes</code></li>
  <li>copy 'content/behindthescenes' folder contents (its .json files)</li>
  <li>copy 'layouts/components/behindthescenes' folder (its .svelte components)</li>
  <li>update buildlog.svelte</li>
  <li>browser test...</li>
  <br>

  <li>copy 'index.json' file:</li>
  <li>copy 'content/index.json' file</li>
  <li>copy 'layouts/content/index.svelte' file</li>
  <li>browser test...</li>
  <br>

  <li>copy 'global' folder:</li>
  <li>copy 'layouts/global' folder (its .svelte files)</li>
  <li>browser test...</li>
  <br>

  <li>copy 'assets' folder</li>
  <li>browser test...</li>
  <br>

  <li>recreate content type 'collections':</li>
  <li><code>plenti new type collections</code></li>
  <li>copy 'content/collections' folder contents (its .json files)</li>
  <li>copy 'layouts/content/collections.svelte' file</li>
  <li>copy 'layouts/components/collections' folder (its .json files)</li>
  <li>browser test...</li>
  <br>

  <li>copy 'posts.json' file:</li>  
  <li>copy 'content/pages/posts.json' file</li>
  <li>recreate content type 'posts'</li>
  <li><code>plenti new type collections</code></li>
  <li>copy 'layouts/content/posts.svelte' file</li>
  <li>copy 'layouts/components/posts' folder</li>
  <li>copy 'layouts/components/recentposts.svelte' file</li>
  <li>browser test...</li>
  <br>

  <li>check terminal error messages</li>
  <br>
</ul>

<style>
    ul {
      padding-bottom: 25px;
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

  code {
    /*font-weight: 200;*/
    color: skyblue;
    /*color: hsla(200, 97%, 60%, .8);*/
  }
</style>
