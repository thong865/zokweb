export default defineEventHandler(async(event) => {
    try{
        const rooms = await $fetch('https://zokapi.singhasoft.com/api/v1/rooms')
        return rooms
    }catch(e){
        console.log(e)
        return e
    }
 
})
