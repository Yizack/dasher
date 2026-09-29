export const SITE = {
  name: "Dasher",
  domain: "dasher.yizack.com",
  twitch: {
    extension: {
      products: ["AUDIO"]
    }
  },
  host: import.meta.dev ? "http://localhost:5173" : "https://dasher.yizack.com",
  cdn: import.meta.dev ? "http://localhost:5173" : "https://cdn.yizack.com"
};
