export function safeAssetSrc(src: string) {
  if (!src) return "";
  return src.startsWith("/") ? src : `/${src}`;
}
