import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Container from "react-bootstrap/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <main className="my-4">
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
};
export default Layout;
