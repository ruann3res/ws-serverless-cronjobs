import { Loader2Icon, SendIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useEffect, useRef, useState } from "react";
import { useWebSockets } from "./hooks";

export function App() {
  const [messages, setMessages] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState('')
  const { isLoading, sendMessage } = useWebSockets({
    url: import.meta.env.VITE_WS_URL || '',
    onMessage: (data) => {
      setMessages(prevState => prevState.concat(data.message))
    }
  })

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const lastMessage = containerRef.current.lastChild as Element | null;
    lastMessage?.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage({ action: 'sendMessage', message })

    setMessage('')
  }

  return (
    <div className="h-screen grid place-items-center bg-zinc-200 p-4">
      <div className="w-full max-w-xl space-y-10" >
        {isLoading && (
          <div className="flex items-center gap-2 text-muted">
            <Loader2Icon className="animate-spin" />
            <span>Entrando no chat...</span>
          </div>
        )}
        {!isLoading && (
          <>
            <div className="bg-white h-96 overflow-y-auto rounded-lg shadow-2xl shadow-black/30 p-6 space-y-4"
              ref={containerRef}
            >
              {messages.map(message => (
                <div className="bg-zinc-50 border rounded-md p-3"
                  key={message + Math.random()}
                >
                  {message}
                </div>
              ))}

            </div>
            <form className="flex items-center gap-4" onSubmit={handleSubmit}>
              <Input placeholder="Digite sua mensagem.."
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
              <Button>
                <SendIcon className="size-5" />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

