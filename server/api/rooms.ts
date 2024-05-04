export default defineEventHandler((event) => {
    try{
        const rooms = fetch('https://zokapi.singhasoft.com/api/v1/rooms')
        return rooms
    }catch(e){
        console.log(e)
        return e
    }
 
})
