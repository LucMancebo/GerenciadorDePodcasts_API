import { podcastModel } from "./podcast_model";

export interface PodcastTransferModel{
    statusCode: number,
    body: podcastModel[]
}