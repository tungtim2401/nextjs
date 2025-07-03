
import { PROJECTS } from "./constant";
import StickyHeaderLayout from "@/common/StickyHeaderLayout";

const Layout2 = () => {
  return (
    <div>
      <StickyHeaderLayout
        content={PROJECTS}
        idContent={`p`}
      />
    </div>
  );
};
export default Layout2;
