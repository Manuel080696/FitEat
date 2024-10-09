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