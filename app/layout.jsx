import { NextAuthProvider } from "@/components/Provider";
import "../style/globals.css";
import Nav from "@/components/Nav";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

export const metadata = {
  title: "ShareHub",
  description: "Your All-in-One Social Networking Destination",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main>
            <Nav />
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default Rootlayout;
