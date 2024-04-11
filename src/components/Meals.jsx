import { useState, useEffect } from 'react';
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:2000/meals');
      const data = await response.json();

      if (!response.ok) {
        //...
      }
      setMeals(data);
    }

    fetchMeals();
  }, [])

  return (
    <ul id='meals'>
      {meals.map(meal => 
          <MealItem key={meal.id} meal={meal}/>
      )}
    </ul>
  )
}