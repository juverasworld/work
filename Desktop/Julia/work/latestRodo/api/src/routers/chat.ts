import Elysia from "elysia";
import ServerResponse from "../utils/response";

const chat = new Elysia({prefix: "/chat"})
.get("/", async ()=>{
    return {message: 'Chats'}
}, {
    detail: {
        tags: ["Chat"]
    },
    response: ServerResponse,
})
export default chat;