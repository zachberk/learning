import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const {
    data: catData,
    isLoading: isCatLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      try {
        const response = await Axios.get("https://catfact.ninja/fact");
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.error || "An error occurred");
      }
    },
  });

  const refetchCatData = () => {
    alert("Refetched data!");
    refetch();
  };

  return { catData, isCatLoading, error, refetchCatData };
};