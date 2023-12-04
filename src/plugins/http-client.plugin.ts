import axios from "axios";

// PATRÓN ADAPTADOR
// --- USANDO FETCH ---
// const httpClientPlugin = {
//   get: async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   },
// };

// -- USANDO AXIOS ---
export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },
  post: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  put: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  delete: async (url: string) => {
    throw new Error("Not implemented");
  },
};
