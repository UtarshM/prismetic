export function safeAssetSrc(src: string) {
  const [path] = src.split("?");
  const normalized = path
    .split("/")
    .map((segment) => {
      if (!segment) return "";
      try {
        return encodeURIComponent(decodeURIComponent(segment));
      } catch {
        return encodeURIComponent(segment);
      }
    })
    .join("/");
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
}
