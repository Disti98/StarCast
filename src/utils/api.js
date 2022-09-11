const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=1bbb94955ee6f8ae09a5fd167a6e1a3a";

const GET = async (type, specific, ext) => {
  const res = await fetch(
    BASE_URL + type + "/" + specific + API_KEY + "&include_adult=false" + ext
  );
  return await res.json();
};

export { GET };
