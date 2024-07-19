import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

//hook to use context
export const useSocketContext = ()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children})=>{

    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setSocket] = useState(null);
    const {userAuth} = useAuthContext();

    useEffect(()=>{
        if(userAuth){
            const socket = io("http://localhost:5000",{
                query:{
                    userId: userAuth._id
                }
            })

            setSocket(socket);

            // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            })


            return ()=>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[userAuth])

//     // Log the updated onlineUser state outside of the useEffect to ensure it's the latest state
//   useEffect(() => {
//     console.log("Getting online users 2- ", onlineUser);
//   }, [onlineUser]);



    return <SocketContext.Provider value={{ socket, onlineUsers}}>{children}</SocketContext.Provider>
}