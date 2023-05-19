import { createBrowserRouter } from "react-router-dom";
import { Home } from "../views/home/Home";
import { KnowMore } from "../views/knowmore/KnowMore";
import { InfluencerForm } from "../views/influencer-form/InfluencerForm";

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
]);
