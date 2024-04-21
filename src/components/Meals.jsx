import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.jsx';
import Error from './Error.jsx';

const requestConfig = {};

export default function Meals() {
  const { data: meals, isLoading, error } = useHttp('http://localhost:2000/meal', requestConfig);

  if (isLoading) {
    return <p className='center'>Data is fetching ...</p>;
  }

  if (error) {
    return <Error title = 'Failed to fetch meals' message={error}/>
  }
  

  return (
    <ul id='meals'>
      {meals.map(meal => 
          <MealItem key={meal.id} meal={meal}/>
      )}
    </ul>
  )
}