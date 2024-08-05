import Meal from '../models/meal'; // Ensure this path is correct

export const fetchMealsByCategory = async (categoryId) => {
  try {
    const response = await fetch(`http://192.168.100.4:3000/meals?categoryId=${categoryId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map(item => new Meal(
      item.id,
      item.categoryIds,
      item.title,
      item.price,
      item.imageUrl,
      item.isGlutenFree,
      item.isVegan,
      item.isVegetarian,
      item.isLactoseFree
    ));
  } catch (error) {
    console.error('Fetch meals failed:', error);
    return []; // Return an empty array in case of error
  }
};
