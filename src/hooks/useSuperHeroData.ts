import { useQuery, useMutation, useQueryClient } from 'react-query'
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
	const queryClient = useQueryClient()
	return useMutation(addSuperhero, {
		onSuccess: ( ) => {
			queryClient.invalidateQueries('superheroes')  // to refetch
		}
	})
}