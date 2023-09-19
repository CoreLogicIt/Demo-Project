import { useQuery } from "@tanstack/react-query";

const fetchUsers = async (AbortSignal) => {
  const controller = new AbortController();
  // cancelling requests using AbortController
  //   controller.abort();
  const { aborted } = controller.signal;
  if (!aborted) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        controller.signal
      );
      const data = await response.json();
      return data;
    } catch (err) {
       return err
    }
  }

  return "request cancelled";
};

export const useUserData = () => {
  return useQuery(["jsonUsers"], fetchUsers);
};
