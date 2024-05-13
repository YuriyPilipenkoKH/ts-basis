import { useQuery } from 'react-query'
import fetchSuperhero from '../lib/fetchSuperhero'

export const useSuperHeroData = (heroId:string, onSuccess:any, onError:any) => {

	return useQuery(
		['superhero', heroId], // Providing a unique query key
		() => fetchSuperhero(heroId), // Pass a function that returns the promise
		{
				onSuccess,
				onError,
		}
);
}

