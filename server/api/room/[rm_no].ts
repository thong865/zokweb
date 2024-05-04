export default defineEventHandler((event) => {
    const rm_no = getRouterParam(event, 'rm_no')
    const rooms = fetch(`http://localhost:6543/api/v1/room/${rm_no}/detail`)
    return rooms
})
