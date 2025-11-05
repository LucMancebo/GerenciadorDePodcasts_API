import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisode } from "../services/list_episodes_service";
import { serviceFilterEpisodes } from "../services/filter_episodes";
import { ContentType } from "../utils/content_type";
import { PodcastTransferModel } from "../models/podcast_transfer_model";

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON }

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisode();

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body))

  res.end()
}

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content = await serviceFilterEpisodes(req.url)

  res.writeHead(content.statusCode, DEFAULT_CONTENT)
  res.write(JSON.stringify(content))

  res.end()
}
