export default defineEventHandler((event) => {
    const rm_no = getRouterParam(event, 'rm_no')
    const rooms = fetch(`http://localhost:6543/api/v1/roombkcurr/${rm_no}`,{
        method:'POST'
    })
    return rooms
})
