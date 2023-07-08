// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix

import Results from "./components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTopRated";

  const res = await fetch(
    `https://api.themoviedb.org/3/${ 
    genre === "fetchTopRated"
      ? "movie/top_rated"
      : genre === "fetchTrending"
      ? "trending/all/week"
      : genre === "fetchUpcoming"
      ? "movie/upcoming"
      : "" // Add a default value or handle other cases
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results;
  //console.log(results);
  return (
    <div>
        <Results results={results} />
    </div>
  );
}