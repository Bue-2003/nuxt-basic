export default defineEventHandler(event => {
  return {
    messsage : getQuery(event) 
  }
})
