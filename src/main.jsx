import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Toaster } from "@/components/ui/sonner"
import { MessageProvider } from './context/MessageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <MessageProvider>
    <App />
    <Toaster position="top-right"/>
  </MessageProvider>,
)
