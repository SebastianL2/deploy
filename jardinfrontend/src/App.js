import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/Navbar";
import Home from "./pages/UserPages/Home";
import Admissions from "./pages/UserPages/Admissions";
import About from "./pages/UserPages/About";
import Metodology from "./pages/UserPages/Metodology";
import Services from "./pages/UserPages/Services";
import Spaces from "./pages/UserPages/Spaces";
import Gallery from "./pages/UserPages/Gallery";
import Contact from "./pages/UserPages/Contact";
import Login from "./pages/UserPages/Login";
import NotFound from "./pages/UserPages/NotFound";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PrivateRouteTeacher from "./components/PrivateRouteTeacher";
import Teachers from "./pages/AdminPages/Teachers";
import AdminGallery from "./pages/AdminPages/Gallery";
import Games from "./pages/TeacherPages/Games";
import RegistUser from "./pages/AdminPages/RegistUser";
import CreateGalleries from './pages/AdminPages/CreateGalleries'
import {
  HOME,
  ADMISSIONS,
  ABOUT,
  SERVICES,
  SPACES,
  GALLERY,
  LOGIN,
  NOTFOUND,
  METODOLOGY,
  CONTACT,
} from "./routes/PublicPaths";
import {
  TEACHERS_ADMIN,
  GALLERY_ADMIN,
  TEACHER_GAMES,
  TEACHER_REGIST,
  CREATE_GALLERIES
} from "./routes/PrivatePaths";
import Footer from "./components/Footer";
import AdminProvider from "./context/AdminContext";
import UserProvider from "./context/TeacherContext";

function App() {
  return (
    <PrimeReactProvider>
      <AdminProvider>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path={HOME} element={<Home />} />
              <Route path={ADMISSIONS} element={<Admissions />} />
              <Route path={METODOLOGY} element={<Metodology />} />
              <Route path={ABOUT} element={<About />} />
              <Route path={SERVICES} element={<Services />} />
              <Route path={SPACES} element={<Spaces />} />
              <Route path={GALLERY} element={<Gallery />} />
              <Route path={CONTACT} element={<Contact />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={NOTFOUND} element={<NotFound />} />
              <Route
                path={TEACHERS_ADMIN}
                element={
                  <PrivateRouteAdmin>
                    <Teachers />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={GALLERY_ADMIN}
                element={
                  <PrivateRouteAdmin>
                    <AdminGallery />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={TEACHER_GAMES}
                element={
                  <PrivateRouteTeacher>
                    <Games />
                  </PrivateRouteTeacher>
                }
              />
              <Route
                path={TEACHER_REGIST}
                element={
                  <PrivateRouteAdmin>
                    <RegistUser />
                  </PrivateRouteAdmin>
                }
              />
              <Route
                path={CREATE_GALLERIES}
                element={
                  <PrivateRouteAdmin>
                    <CreateGalleries />
                  </PrivateRouteAdmin>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </AdminProvider>
    </PrimeReactProvider>
  );
}

export default App;
