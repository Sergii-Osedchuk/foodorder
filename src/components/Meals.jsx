import { useState, useEffect } from 'react';

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const result = await fetch('http://localhost:2000/meals');
      const data = await result.json();
      setMeals(data);
    }

    fetchMeals();
  }, [])

  return (
    <ul id='meals'>
      {meals.map(meal => 
        <li key={meal.id} className='meal-item'>{meal.name}</li>
      )}
    </ul>
  )
}