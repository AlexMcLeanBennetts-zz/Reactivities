function ActivityDetailsSidebar() {
    return (
        <div className="">
            <h2 className="text-center py-3 bg-[#20a7ac] text-white font-bold rounded-t-lg">3 People Going</h2>
            <div className="bg-white divide-y rounded-b-lg">

                <div className="flex p-4 relative">
                    <div className="ribbon-2">Host</div>
                    <img src="/images/user.png" alt="User" className="rounded-lg w-20 h-20 mr-4" />
                    <div>
                        <h3 className="font-bold inline mr-2 text-[#20a7ac]">Matt</h3>
                        <p className="text-orange-400 text-sm font-bold">Following</p>
                    </div>
                </div>
                <div className="flex p-4">
                    <img src="/images/user.png" alt="User" className="rounded-lg w-20 h-20 mr-4" />
                    <div>
                        <h3 className="font-bold inline mr-2 text-[#20a7ac]">Tom</h3>
                        <p className="text-orange-400 text-sm font-bold">Following</p>
                    </div>
                </div>
                <div className="flex p-4">
                    <img src="/images/user.png" alt="User" className="rounded-lg w-20 h-20 mr-4" />
                    <div>
                        <h3 className="font-bold inline mr-2 text-[#20a7ac]">Beth</h3>
                        <p className="text-orange-400 text-sm font-bold">Following</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetailsSidebar