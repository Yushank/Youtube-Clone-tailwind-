import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
      image={"photo.png"}
      thumbImage={"thumb.jpg"}
      title={"How this new stealh plane keeps the US ahead of China"}
      ChannelName={"Search Party"}
      views={"398K views"}
      uploadTime={"13 days ago"}></VideoCard>
    </div>
  );
}
