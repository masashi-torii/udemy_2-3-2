import { BrowserRouter, Router, Switch } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" element={<Top />} />
                <Route path="/users" element={<Users />} />
            </Switch>
        </BrowserRouter>
    )
}