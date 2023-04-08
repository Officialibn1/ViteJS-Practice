import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import { Messages, MessagesOne, MessagesTwo } from "./pages/Messages";

import { 
    Overview,
    Revenue,
    Users
} from "./pages/Overview";

import Products from "./pages/Products";

import {
    Reports, 
    ReportsOne,
    ReportsThree,
    ReportsTwo
} from "./pages/Reports";

import Support from "./pages/Support";

import Team from "./pages/Team";


const App = () => {


    return (
        <>
            <Sidebar />
            <Routes>
                <Route path="/reports" >
                    <Route index element={<Reports />} />
                    <Route path="reports1" element={<ReportsOne />} />
                    <Route path="reports2" element={<ReportsTwo />} />
                    <Route path="reports3" element={<ReportsThree />} />
                </Route>

                <Route path="/overview">
                    <Route index element={<Overview />} />
                    <Route path="users" element={<Users />} />
                    <Route path="revenue" element={<Revenue />} />
                </Route>

                <Route path="/products" element={<Products />} />

                <Route path="/team" element={<Team />} />

                <Route path="/messages">
                    <Route index element={<Messages />} />
                    <Route path="messages1" element={<MessagesOne />} />
                    <Route path="messages2" element={<MessagesTwo />} />
                </Route>

                <Route path="/support" element={<Support />} />
            </Routes>
        </>
    );
}

export default App;
