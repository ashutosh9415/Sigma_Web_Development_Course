import Navbar from "@/components/Navbar";
import Footer from"@/components/Footer";

export const metadata = {
  title: "Admin: Facebook - connect with friends",
  description: "Admin Page: facbook is global connection app",
};

export default function adminLayout({ children }) {
  return(
     <>
     <span>Admin Navbar</span>
        {children}
    </>
  );
}