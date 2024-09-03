import { API_HOST } from "../utils/Constants";

export const getPokemonApi = async (endpointUrl: string | null) => {
  try {
    const url = `${API_HOST}/pokemon?limit=50&offset=0`;
    const res = await fetch(endpointUrl || url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemonDetailsByUrlApi = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemonDetailsApi = async (id: number) => {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
