// composables/utils.ts
export const useFetch = async (options: {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: any;
  headers?: { [key: string]: string };
}) => {
  const response = await fetch(options.url, {
    method: options.method,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};


// Ambil data user dari /me
export const getUserData = async () => {

  const data = await useFetch({
    method: "GET",
    url: "https://cms-finance.naditechno.id/api/v1/me",
  });

  return data.data; // Sesuai struktur respon
};

export const getSetting = async () => {
  const data = await useFetch({
    method: "GET",
    url: "https://cms-les.naditechno.id/api/setting",
  });
  return data.data; // Sesuai struktur respon
};

export const getHome = async () => {
  const data = await useFetch({
    method: "GET",
    url: "https://cms-les.naditechno.id/api/home",
  });
  return data.data; // Sesuai struktur respon
};
