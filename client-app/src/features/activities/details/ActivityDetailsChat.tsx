import Button from "common/Button"

function ActivityDetailsChat() {
    return (
        <div className="bg-white mt-5 rounded-lg overflow-hidden">
            <h2 className="text-center py-3 bg-[#20a7ac] text-white font-bold">Chat about this event</h2>
            <div className="m-4">
                <div className="flex mb-5">
                    <img src="/images/user.png" alt="User" className="rounded-lg w-14 h-14 mr-4" />
                    <div>
                        <div>
                            <h3 className="font-bold inline mr-2">Matt</h3>
                            <p className="inline text-xs text-gray-400">Today at 5:42PM</p>
                        </div>
                        <p>How artistic!</p>
                        <Button type="button" className="text-gray-400 text-sm">Reply</Button>

                    </div>
                </div>
                <form>
                    <textarea className="w-full border-2 rounded-lg" rows={7} ></textarea>
                    <Button type="submit" className="bg-[#20a7ac] text-white py-2 px-3 rounded-lg block">
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                            </svg>
                            Add Reply
                        </>
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default ActivityDetailsChat