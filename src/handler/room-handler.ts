import { Socket } from "socket.io";
import {v4 as UUIDv4} from "uuid";

const roomHandler = (socket: Socket) => {
     const createRoom = () => {
        console.log("Creating a new room"); // we will log the room creation in the server console
        const roomId = UUIDv4(); // unique roo id where ultiple users or connections can exchange data
        socket.join(roomId); // we will make the socket connection enter a new room
        socket.emit("room-created", {roomId}); // we will emit an event from the server side tha socet connecton has been established to a room
        console.log(`Room created with id: ${roomId}`); // we will log the room id in the server console
     };

     const joinedRoom = ({roomId}: {roomId: string}) => {
        console.log("New user has joined room joined ", roomId);
     };

     // we will call the above two func when the client
     // will emit to crate a room and join room

     socket.on("create-room", createRoom); // when the client will emit create room event we will call the create room function
     socket.on("join-room", joinedRoom); // when the client will emit join room event we will call the join room function
};

export default roomHandler;
