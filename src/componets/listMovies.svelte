<script>
  const rutaImagen = '/images/images_default.jpg'
  export let imdbID, Title, Year, Poster;
</script>

<div class="card" style="width: 18rem; margin-block-end: 30px;">
  {#if Poster != "N/A"}
    <img src={Poster} class="card-img-top" alt={Title} />
  {:else}
  <img src="{rutaImagen}" class="imgno-img-thumbnail" alt="no-img" />
  {/if}
  <div class="card-body text-center">
    <h5 class="card-title">{Title}</h5>
    <p class="card-text">{Year}</p>
    <a href="/{imdbID}" class="btn btn-primary">Ver Mas</a>
  </div>
</div>
