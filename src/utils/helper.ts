export const saveTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "";
};

export const saveSearch = (search: string) => {
  localStorage.setItem("search", search);
};

export const getSearch = () => {
  const search = localStorage.getItem("search");
  return search ? search : "";
};
