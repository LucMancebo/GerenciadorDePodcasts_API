import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { StatusCode } from "../utils/status_code";

export const serviceListEpisode = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body:data
  }
  

  return responseFormat;
};
