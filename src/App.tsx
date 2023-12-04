import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import MainNavigation from "@/components/MainNavigation";
import HomePage from "@/pages/HomePage";
import BoatsPage from "./pages/BoatsPage";
import AccesoriesPage from "./pages/AccesoriesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@material-tailwind/react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Boat from "./pages/BoatPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import { allBoatsModels } from "./boatData/allBoats";

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <ScrollToTop />
          <MainNavigation />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "boats",
          element: <BoatsPage />,
          children: [
            {
              index: true,
              element: <BoatsPage />,
            },
          ],
        },
        {
          path: "boats/:boatId",
          element: <Boat />,
          loader: ({ params }) => {
            const boatId = params.boatId;
            const boat = allBoatsModels.find((boat) => boat.id === boatId && boat.detailsPage);

            if (!boat) {
              console.log("Boat not found");
              throw new Error("Boat not found");
            }
            return boat;
          },
        },
        {
          path: "accessories",
          element: <AccesoriesPage />,
        },
        {
          path: "about",
          element: <AboutUsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "terms-and-conditions",
          element: <TermsAndConditions />,
        },
      ],
    },
  ],
  {
    basename: "/",
  },
);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
