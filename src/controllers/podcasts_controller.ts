import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisode} from '../services/list_episodes_service'


export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {

  const content = await serviceListEpisode()
  
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
