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

    foodName = "cheese";

    try {
      const response = await fetch(`https://serpapi.com/search.json?q=${foodName}&location=Spain&google_domain=google.es&hl=es&gl=es`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      console.error("Error fetching food data:", error);
      return null;
    }
  };
