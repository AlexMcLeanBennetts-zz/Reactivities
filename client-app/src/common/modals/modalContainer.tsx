import { useStore } from "app/stores/store";
import { observer } from "mobx-react-lite";

function ModalContainer() {
    const { modalStore } = useStore();
    let isModalOpen = modalStore.modal.open;

    return (
        <>
            {isModalOpen && (
                <div
                    className="absolute w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center"
                    onClick={() => modalStore.closeModal()}
                >

                    <div
                        className="mx-auto p-5 border w-96 shadow-lg rounded-md bg-white z-100"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="mt-3 text-center">
                            {modalStore.modal.body}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default observer(ModalContainer);