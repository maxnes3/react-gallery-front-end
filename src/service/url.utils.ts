class UrlUtils {
  public static buildUrl(baseUrl: string, path: string): string {
    return `${import.meta.env.VITE_SERVER_URL}${baseUrl}${path}`;
  }
}

export default UrlUtils;
