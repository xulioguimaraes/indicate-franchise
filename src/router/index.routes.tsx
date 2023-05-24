import { createBrowserRouter } from "react-router-dom";
import { Home } from "../views/home/Home";
import { KnowMore } from "../views/knowmore/KnowMore";
import { InfluencerForm } from "../views/influencer-form/InfluencerForm";
import { RegistrationDone } from "../views/registration-done/RegistrationDone";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/saiba-mais",
    element: <KnowMore />,
  },
  {
    path: "/formulario-influenciador",
    element: <InfluencerForm />,
  },
  {
    path: "/cadastro-realizado/:slug",
    element: <RegistrationDone />,
  },
]);
