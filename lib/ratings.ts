export function seededRating(seed: string): { rating: number; count: number } {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  }
  h = h >>> 0;
  const rating = Math.round((4.5 + (h % 51) / 100) * 10) / 10;
  const count = 60 + (h % 541);
  return { rating, count };
}