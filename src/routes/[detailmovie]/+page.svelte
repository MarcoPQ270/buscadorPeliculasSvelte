<script>
    const rutaImagen = '/images/images_default.jpg'
  /** @type {import('./$types').PageData} */
  export let data
console.log(data.Poster)
</script>

<div class="container">
  <div class="row" style="margin-top:50px">
    {#if data.Response == "True"}
    <div class="col-sm-6" style="max-width: 350px;">
      <div class="card">
        {#if data.Poster != "N/A"}
            <img src={data.Poster} class="img-thumbnail" alt={data.Title} />
        {:else}
            <img src="{rutaImagen}" class="imgno-img-thumbnail" alt="no-img" />
        {/if}
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{data.Title}</h5>
          <h5 class="card-title">Year: {data.Year}</h5>
          <h5 class="card-title">Duracion: {data.Runtime}</h5>
          <h5 class="card-title">Genero: {data.Genre}</h5>
          <h5 class="card-title">Director: {data.Director}</h5>
          <p class="card-text">
           {data.Plot}
          </p>
          <a href="/" class="btn btn-primary">Regresar</a>
        </div>
      </div>
    </div>
    {:else}
    <div class="text-center">
        <h1 >No se encontro la pelicula...</h1>
    </div>
    {/if}
  </div>
</div>
