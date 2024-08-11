import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { getCampers } from "../../redux/campers/operations.js";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(
  () => import("../../pages/CatalogPage/CatalogPage.jsx"),
);
const FavoritesPage = lazy(
  () => import("../../pages/FavoritesPage/FavoritesPage.jsx"),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, []);

  return (
    <Layout>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
