
const apiKEY = import.meta.env.VITE_API_KEY;

export const getAllFoods = async () => {
    const url = "/foodAPI.json";
  
    try {
      const response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching food data:", error);
      return null;
    }
  };

export const getOnceKindOfFoods = async (category) => {
    const url = "/foodAPI.json";
  
    try {
      const response = await fetch(url, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const filteredFoods = data.filter(food => food.category.toLowerCase() === category.toLowerCase());

      return filteredFoods;
    } catch (error) {
      console.error("Error fetching food data:", error);
      return null;
    }
  };

  export const getFoodCalories = async (foodName) => {
    try {
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodName}&search_simple=1&action=process&json=true`,
    );
    const data = await response.json();

    if (data.products && data.products.length > 0) {
      const product = data.products[0];
      const calories = product?.nutriments ? product?.nutriments?.energy_value : 0;
      return calories;
    } else {
      console.log("Producto no encontrado");
      return null;
    }} catch (error) {
      console.error("Error al obtener los datos:", error);
    return null;
    }
    
  };
  
