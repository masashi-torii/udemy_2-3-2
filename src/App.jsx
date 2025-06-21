// import './App.css'
// import "./styles.css"
import { Router } from "./router/Router";

const user = {
  name: "じゃけえ",
  image: "https://picsum.photos/150/160",
  email: "1234567@example.com",
  phone: "090-1234-4321",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"

}

export default function App() {
  return (
    <Router />
  )
}