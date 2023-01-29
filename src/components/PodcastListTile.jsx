import episodesList from "../Episodes";
import {useState} from 'React';

function PodcastListTile({title}) {
    const [episodes, setEpisodes] = useState(episodesList)
    const uppercaseTitle = title.toUpperCase();

    const toggleEpisodeWatched = (targetIndex) => {

        setEpisodes(prevEpisodes => {
            const index = prevEpisodes.findIndex(episode => episode.id === targetIndex);
            const updatedEpisode = {...prevEpisodes[index]}
            updatedEpisode.watched = !updatedEpisode.watched;
            const updatedEpisodes = [...prevEpisodes];
            updatedEpisodes[index] = updatedEpisode;
            
            return updatedEpisodes;
        })
    }

    const handleCheckboxInput = (id) => {
        toggleEpisodeWatched(id)
    }

    return (
        <div className="podcast-list-tile">
            <h1>LISTEN TO ALL THE {uppercaseTitle} EPISODES</h1>
            <form>
                <ul>
                    {episodes.map((episode) => (
                        <li key={episode.id}>
                            <input 
                                onChange={() => handleCheckboxInput(episode.id)}
                                checked={episode?.watched} 
                                value={episode.name} 
                                name={episode.name} 
                                id={episode.name} 
                                type="checkbox"/>
                            <label htmlFor={episode.name}>
                                <p>
                                    {episode.id} || &nbsp;
                                    {
                                        episode.watched?
                                        <s>{episode.name}</s>
                                        :
                                        <>{episode.name}</>
                                    }
                                </p>
                            </label>
                        </li>
                    ))}

                </ul>
            </form>
        </div>
    )
}

export default PodcastListTile