
type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
    </div>
  );
};
export default DefaultLayout;
