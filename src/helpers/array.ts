export const distinctBy = <T>(arrayLike: T[], key: string): T[] => {
  const mapLike = new Map(arrayLike.map((item) => [item[key], item]));
  return Array.from(mapLike.values());
};
