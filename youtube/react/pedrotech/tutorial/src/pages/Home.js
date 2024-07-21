import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error occurred: {isError.message}</div>;

  return (
    <div>
      <h1> This is the homepage.</h1>
      <p>Here's a random cat fact: {catData?.fact}</p>
      <button onClick={refetch}> Generate new cat fact </button>
    </div>
  );
};
