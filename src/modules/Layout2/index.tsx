
import Header from "./components/Header";
import { PROJECTS } from "./constant";
import StickyHeaderLayout from "@/common/StickyHeaderLayout";

const Layout2 = () => {
  return (
    <div>
      <Header />
      <StickyHeaderLayout content={PROJECTS} idContent={`p`} />
    </div>
  );
};
export default Layout2;
