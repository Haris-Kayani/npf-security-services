import { SiteLayout } from "./components/layout/SiteLayout";
import { siteContent } from "./content/site-content";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { CoveragePage } from "./pages/CoveragePage";
import { ClientsPage } from "./pages/ClientsPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { CareersPage } from "./pages/CareersPage";

const pages = {
  "/services": ServicesPage,
  "/coverage": CoveragePage,
  "/clients": ClientsPage,
  "/about-us": AboutUsPage,
  "/careers": CareersPage,
};

export function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return <HomePage />;
  const Page = pages[path as keyof typeof pages];
  const label = siteContent.navigation.find((item) => item.href === path)?.label;
  document.title = (label ?? "Page not found") + " | " + siteContent.name;
  return (
    <SiteLayout pageLabel={label}>
      {() =>
        Page ? (
          <Page />
        ) : (
          <div className="container">
            <h1>Page not found</h1>
            <a href="/">Return home</a>
          </div>
        )
      }
    </SiteLayout>
  );
}
