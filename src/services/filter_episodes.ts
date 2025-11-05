import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { StatusCode } from "../utils/status_code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {

  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body:data
  }

  return responseFormat;
};
