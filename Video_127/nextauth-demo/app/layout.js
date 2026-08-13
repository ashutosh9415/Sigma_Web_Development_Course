import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";


export default function RootLayout({ children }) {
  return (
    <html>
      <SessionWrapper> 
        <body className="min-h-full flex flex-col">{children}</body>
      </SessionWrapper>
    </html>
  );
}
