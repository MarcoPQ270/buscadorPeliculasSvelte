<script>
  import ListMovies from "./listMovies.svelte"
  let value = ""
  let response = []

  const handleinput = (event) => {
    value = event.target.value
  }

  const cleanInput = () => {
    value = ""
    response = []
  };

  $: {
    const url = "https://www.omdbapi.com/?s="
    if (value.length > 3) {
      response = fetch(`${url}${value}&apikey=9a1c8584`)
        .then((response) => response.json())
        .then((apiResponse) => apiResponse.Search || [])
    }
  }
</script>

<style>
nav {
    margin-block-end: 30px;
}
</style>

<nav class="navbar bg-body-tertiary">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">Search</span>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar Pelicula"
        aria-label="Username"
        aria-describedby="basic-addon1"
        autofocus
        {value}
        on:input={handleinput}
      />
      <button
        class="btn btn-outline-success me-2"
        type="button"
        on:click={cleanInput}>Limpiar</button
      >
    </div>
  </form>
</nav>

{#await response}
  <b>Cargando...</b>
{:then movies}
  <div class="container">
    <div class="row">
      {#each movies as { Title, Year, Poster, imdbID }}
        <div class="col-3">
          <ListMovies {imdbID} {Title} {Year} {Poster} />
        </div>
      {:else}
      <div class="text-center">
        <b clas>No hay resultados</b>
      </div>
      
      {/each}
    </div>
  </div>
{:catch error}
  <p>Error del servidor</p>
{/await}
