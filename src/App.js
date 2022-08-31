import { QueryClientProvider, QueryClient } from "react-query"
import Header from "./components/Header"
import { Characters } from "./components/Characters"

const queryClient = new QueryClient

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Characters />
      </QueryClientProvider>
    </>

  )
}