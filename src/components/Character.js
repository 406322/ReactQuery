export const Character = ({ character }) => {
    return (
        <div
            className="flex w-1/3 m-1 border border-black rounded-md bg-slate-600 overflow-hidden"
        >
            <img
                className="w-32"
                src={character.image}
                alt=""
            />
            <div
                className="m-2"
            >
                <h1
                    className="text-xl text-white font-bold">
                    {character.name}
                </h1>
                <p
                    className="font-bold text-white text-xs mb-1"
                >
                    {character.status} - {character.species}
                </p>
                <p className="text-white text-xs">Last seen on</p>
                <p
                    className="font-bold text-white text-xs"
                >{character.location.name}</p>
            </div>

        </div>
    )
}
