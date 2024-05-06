export const useRoom = () => {
    const data = ref()
    const pending = ref(false)
    const error = ref(false)
    const getRooms = async () => {
        try {
            const { pending: p, data: rooms, error: er } = await useLazyAsyncData("listRooms", () =>
                $fetch("/api/rooms")
            );
            if (rooms) {
                data.value = rooms?.value.data
            }
            if (p) {
                pending.value = p.value
            }
            if (er) {
                error.value = er.value
            }
        } catch (error) {
            console.log(error)
        }

    }
    const getRoomDetail = async (rm_no: string) => {
        try {
            const { pending: p, data: room, er } = await useLazyAsyncData("RoomDetail", () =>
                $fetch(`/api/room/${rm_no}`)
            );
            if (room) {
                data.value = room?.value.data
            }
            if (p) {
                pending.value = p.value
            }
            if (er) {
                error.value = er.value
            }
        } catch (error) {
            console.log(error)
        }

    }
    return { data, getRooms, pending, error, getRoomDetail }
}