export default defineEventHandler(async (event) => {
    try {
        const rm_no = getRouterParam(event, 'rm_no')
        const rooms = await $fetch(`https://zokapi.singhasoft.com/api/v1/room/${rm_no}/detail`)
        return rooms
    } catch (e) {
        console.log(e)
        return e
    }

})
