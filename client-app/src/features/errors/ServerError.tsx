import PageContainer from "app/layout/PageContainer";
import { useStore } from "app/stores/store";
import { observer } from "mobx-react-lite";

function ServerError() {
    const { commonStore } = useStore();
    return (
        <PageContainer>
            <h1 className="text-2xl font-bold text-red-500">Server Error</h1>
            <p className="font-bold">{commonStore.error?.message}</p>
            {commonStore.error?.details && (
                <>
                    <h2 className="font-bold text-xl">Stack Trace</h2>
                    <div className="px-4">

                        <code>{commonStore.error.details}</code>
                    </div>

                </>
            )}
        </PageContainer>
    )
}

export default observer(ServerError)