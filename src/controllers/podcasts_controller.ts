import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisode } from "../services/list_episodes_service";
import { serviceFilterEpisodes } from "../services/filter_episodes";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisode();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = req.url?.split("?p=")[1] ?? ""
  const content = await serviceFilterEpisodes(queryString)

  res.writeHead(200, {"content-type": "application/json"})
  res.end(JSON.stringify(content))
};
