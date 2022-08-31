import { useQuery } from "react-query";
import Character from "./Character";

export const Characters = () => {

    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        return response.json()
    }

    const { data, status } = useQuery('characters', fetchCharacters)

    if (status === 'loading') { return <div>Loading...</div> }
    if (status === 'error') { return <div>Error</div> }

    return (
        <div className="flex flex-wrap justify-center bg-slate-900">
            {data.results.map((character) => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    )
}

