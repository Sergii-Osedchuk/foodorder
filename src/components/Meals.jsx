import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.jsx';

const requestConfig = {};

export default function Meals() {
  const { data: meals, isLoading, error } = useHttp('http://localhost:2000/meals', requestConfig);

  isLoading && <p>Fetching meals...</p>

  

  return (
    <ul id='meals'>
      {meals.map(meal => 
          <MealItem key={meal.id} meal={meal}/>
      )}
    </ul>
  )
}