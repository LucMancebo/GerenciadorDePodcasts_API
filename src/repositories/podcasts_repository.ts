import fs from 'fs' 
import path from 'path'
import { podcast } from '../models/podcast_model'



const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (): Promise<podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    const jsonFile = JSON.parse(rawData)
    return jsonFile
}