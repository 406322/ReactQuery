import { useQuery } from "react-query";
import { Character } from "./Character";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { useState } from "react";

export const Characters = () => {

    const [page, setPage] = useState(1)

    const fetchCharacters = async ({ queryKey }) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        return response.json()
    }

    const { data, status, isPreviousData, isLoading, isError } = useQuery(['characters', page], fetchCharacters, {
        keepPreviousData: true
    })

    if (isLoading) { return <Loading /> }
    if (isError) { return <Error /> }

    return (
        <>
            <div className="flex flex-wrap justify-center bg-slate-900">
                {data.results.map((character) => (
                    <Character key={character.id} character={character} />
                ))}
            </div>
            <div className="flex justify-center bg-slate-900 gap-2">
                <button
                    className="bg-gray-300 rounded-sm p-1 w-20"
                    onClick={() => { setPage((previous) => previous - 1) }}
                    disabled={page === 1}>
                    Previous
                </button>
                <button
                    className="bg-gray-300 rounded-sm p-1 w-20"
                    onClick={() => { setPage((previous) => previous + 1) }}
                    disabled={isPreviousData || !data.info.next}
                >
                    Next
                </button>
            </div>
        </>
    )
}

