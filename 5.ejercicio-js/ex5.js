'use strict';

async function getCharacters(month) {
    try {
        const charactersUrl = [];
        const charactersName = [];

        const {
            info: { pages },
        } = await (
            await fetch('https://rickandmortyapi.com/api/episode')
        ).json();

        for (let i = 1; i <= pages; i++) {
            const { results: episodes } = await (
                await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`)
            ).json();

            const filteredEpisodes = episodes.filter((episode) => {
                return episode.air_date.toLowerCase().includes(month);
            });

            filteredEpisodes.forEach((episode) => {
                const { characters } = episode;
                for (const character of characters) {
                    if (!charactersUrl.includes(character))
                        charactersUrl.push(character);
                }
            });
        }

        for (const url of charactersUrl) {
            const {
                name,
                origin: { name: location },
            } = await (await fetch(`${url}`)).json();
            charactersName.push(`${name} - ${location}`);
        }
        console.log(charactersName.sort());
    } catch (error) {
        console.log('Ups.. something went wrong. Please try again');
    }
}

getCharacters('january');
