import { useGetCat } from "../useGetCat";

export const Cat = () => {
  const { catData, isCatLoading, error, refetchCatData } = useGetCat();
  if (isCatLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  return (
    <div>
      <h1> This is the homepage.</h1>
      <p>Here's a random cat fact: {catData?.fact}</p>
      <button onClick={refetchCatData}> Generate new cat fact </button>
    </div>
  );
};
