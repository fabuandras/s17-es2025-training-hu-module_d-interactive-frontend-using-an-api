import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import MentorsPage from "./pages/MentorsPage";
import BookedSessionPage from "./pages/BookedSessionPage";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegistrationPage /> },

    {
      path: "/",
      element: <Layout />,
      errorElement: <NoPage />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },

        { path: "dashboard", element: <DashboardPage /> },

        {
          path: "courses",
          children: [
            { index: true, element: <CoursesPage /> },
            { path: ":id", element: <CourseDetailsPage /> },
          ],
        },

        { path: "mentors", element: <MentorsPage /> },

        { path: "bookedsession", element: <BookedSessionPage /> },
      ],
    },

    { path: "*", element: <NoPage /> },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;