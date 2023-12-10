import SignOutForm from "./_auth/forms/signOutForm";
import SigninForm from "./_auth/forms/signinForm";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./_root/pages";
import AuthlayOut from "./_auth/forms/AuthlayOut";
import Rootlayout from "./_root/pages/Rootlayout";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/*public route*/}
        <Route element={<AuthlayOut />}>
          <Route path="/sign-in" element={<SigninForm />} />

          <Route path="/sign-up" element={<SignOutForm />} />
        </Route>
        {/*private route*/}
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
