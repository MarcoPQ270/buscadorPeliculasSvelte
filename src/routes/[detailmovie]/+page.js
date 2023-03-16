import { error } from '@sveltejs/kit'
 
/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
  if (params.detailmovie) {
    const url = "https://www.omdbapi.com/?i="
      return fetch(`${url}${params.detailmovie}&apikey=9a1c8584`)
        .then((response) => response.json())
        .then((apiResponse) => apiResponse)
  }
 
/*   throw error(404, 'Not found') */
}