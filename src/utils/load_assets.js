export function getAssetsUrl(name) {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}