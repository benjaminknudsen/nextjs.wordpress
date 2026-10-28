export function getCategories(post) {
  const categories = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term?.taxonomy === "category");
  const otherCategories = categories.filter(
    (category) => category.slug !== "uncategorized" && category.name !== "Uncategorized",
  );

  return otherCategories.length > 0 ? otherCategories : categories;
}
