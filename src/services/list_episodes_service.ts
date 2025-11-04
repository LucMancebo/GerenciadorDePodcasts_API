import { repositoryPodcast } from "../repositories/podcasts_repository"




export const serviceListEpisode = async () => {
    const data = await repositoryPodcast()

    return data
}