
export function VideoCard(props: any) {
    return <div className="p-3">
        <img src={props.image}></img>

        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={"rounded-full w-9 h-9"} src={props.thumbImage}></img>
            </div>

            <div className="col-span-11 pl-5">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-gray-600 text-base">
                    {props.ChannelName}
                </div>
                <div className="col-span-11 text-gray-600 text-base">
                    {props.views} | {props.uploadTime}
                </div>
            </div>

        </div>
    </div>
}