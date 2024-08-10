import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(
  () => import("../../pages/CatalogPage/CatalogPage.jsx"),
);
const FavoritesPage = lazy(
  () => import("../../pages/FavoritesPage/FavoritesPage.jsx"),
);

function App() {
  return (
    <Layout>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
