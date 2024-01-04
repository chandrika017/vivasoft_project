import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AnonymousLayout,
  Dashboard,
  MainLayout,
  NotFound,
  PrivateRoute,
  Profile,
  PublicRoute,
  SignIn,
  SingUp,
  UserList,
} from "./getAllRoute";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AnonymousLayout />
            </PublicRoute>
          }
        >
          <Route index element={<SignIn />} />
          <Route path="/singup" element={<SingUp />} />
        </Route>
        <Route
          element={
             <PrivateRoute>
              <MainLayout />
             </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<UserList />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
