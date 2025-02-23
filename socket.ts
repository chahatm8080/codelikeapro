import toast from 'react-hot-toast';
import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

export const initSocket = async () => {
    const options: Partial<ManagerOptions & SocketOptions> = {
        forceNew: true,
        reconnectionAttempts: 10000,
        timeout: 10000,
        transports: ['websocket']
    };
    return io("http://localhost:5000" as string, options);
};
