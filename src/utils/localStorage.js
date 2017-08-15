const createLSKey = key => `--awesome-app-${key}--`;

export const save = (key, value) => {
  localStorage.setItem(createLSKey(key), JSON.stringify(value));
};

export const load = (key) => {
  const json = localStorage.getItem(createLSKey(key));
  return json ? JSON.parse(json) : null;
};
