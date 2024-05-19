import { useQuery, useMutation } from 'react-query'
import fetchSuperhero from '../lib/fetchSuperhero'
import addSuperhero from '../lib/addSuperhero';

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

export const useAddHeroData = ( ) => {
	return useMutation(addSuperhero)
}