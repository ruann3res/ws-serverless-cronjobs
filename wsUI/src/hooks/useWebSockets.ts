import { useCallback, useEffect, useRef, useState } from "react"

interface IUseWebSocketsOptions {
    url: string;
    onMessage(data: Record<string, any>): void
}


export function useWebSockets({ url, onMessage }: IUseWebSocketsOptions) {
    const [isLoading, setIsLoading] = useState(true)
    const websocket = useRef<WebSocket | null>()
    const memoizedOnMessage = useRef(onMessage)

    useEffect(() => {
        const ws = new WebSocket(url)
        websocket.current = ws
        function handleNewMessage(event: MessageEvent<string>) {
            const data = JSON.parse(event.data)
            memoizedOnMessage.current(data)
        }

        function handleOpen() {
            setIsLoading(false)
        }

        ws.addEventListener('message', handleNewMessage)
        ws.addEventListener('open', handleOpen)

        return () => {
            websocket.current = null
            ws.removeEventListener('message', handleNewMessage)
            ws.removeEventListener('open', handleOpen)

            ws.close()
        }
    }, [url])


    const sendMessage = useCallback((data: { action: string, [key: string]: string }) => {
        websocket.current?.send(JSON.stringify(data))
    }, [])

    return {
        isLoading,
        sendMessage,
    }
}