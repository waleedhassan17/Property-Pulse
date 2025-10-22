

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental,property, real estate, apartments',
  description: 'Find the perfect rental property with Property Pulse',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;