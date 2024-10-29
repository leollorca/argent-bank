const request = (url, options = {}) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
  });
}

export const getToken = (ids) => {
  return request("/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ids),
  });
}

export const getUser = (token) => {
  return request("/user/profile", {
    method: "POST",
    headers: { "Authorization": `Bearer ${token}` },
    body: JSON.stringify(token),
  });
}