import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import { getMovies } from "../../../components/movie-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovies(id)
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
    params: { id },
}: {
        params: { id: string };
    }) {
    return (
      <div>
        <Suspense fallback={<h1>loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    );
}