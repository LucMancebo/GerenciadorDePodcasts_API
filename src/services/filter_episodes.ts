import { repositoryPodcast } from "../repositories/podcasts_repository"

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName)
    return data
}