
import { useQuery } from 'react-query'
import fetchSuperheroes from '../lib/fetchSuperheroes'

export const useSuperHeroesData = (onSuccess:any, onError:any) => {

  // const handleSelect = (data:any) => {
  //   const superheroNames = data?.data.map((hero:HeroTypes) => hero.name )
  //   return superheroNames
  // }

    return useQuery (
      'superheroes', 
      fetchSuperheroes,
      { 
        onSuccess,
        onError,
        // select:handleSelect,
      }
    )
}


