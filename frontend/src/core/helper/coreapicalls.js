import { API } from "../../backend";

export const getProducts = () => {
  return fetch(`http://127.0.0.1:8000/api/nseindex/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getTopgainers = () => {
  return fetch(`${API}bse/topgainers/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getToplosers = () => {
  return fetch(`${API}bse/toplosers/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getNroducts = () => {
  return fetch(`${API}news/`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getPosts = () => {
  return fetch(`${API}blog/`, {method: "GET"})
  .then((response) => {
    return response.json();
  })
  .catch((err) => console.log(err));
}

