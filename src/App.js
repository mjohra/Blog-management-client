import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageUserPost from './Pages/Dashboard/ManageUserPost/ManageUserPost';
import ManagePosts from './Pages/Dashboard/ManagePosts/ManagePosts';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="/dashboard" element={<DashboardHome></DashboardHome>}></Route>
            <Route path="/dashboard/makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path="/dashboard/addBlog" element={<AddBlog></AddBlog>}></Route>
            <Route path="/dashboard/manageUserPost" element={<ManageUserPost></ManageUserPost>}></Route>
            <Route path="/dashboard/managePost" element={<ManagePosts></ManagePosts>}></Route>
            </Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
