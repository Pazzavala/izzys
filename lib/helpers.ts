export const truncateReview = (text: string, maxLength: number = 200) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};
