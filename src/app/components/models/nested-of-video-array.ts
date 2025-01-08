import { VideoCategory } from "./video-category";


export interface NestedVideoArray{
    id: number ; 
    name: string;
    video: VideoCategory[];
}