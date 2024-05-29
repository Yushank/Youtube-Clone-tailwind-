import { VideoCard } from "./VideoCard";

const VIDEOS = [{
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "How this new stealh plane keeps the US ahead of China",
    ChannelName: "Search Party",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}, {
    image: "photo.png",
    thumbImage:"thumb.jpg",
    title: "demo title",
    ChannelName: "demo channel",
    views: "398K views",
    uploadTime: "13 days ago"
}];


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video =><div>
            <VideoCard
                image= {video.image}
                thumbImage= {video.thumbImage}
                title = {video.title}
                ChannelName = {video.ChannelName}
                views ={video.views}
                uploadTime= {video.uploadTime}
            ></VideoCard>
        </div>)}
    </div>
}