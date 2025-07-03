import { Avatar } from "antd";
import { HomeOutlined, MailOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="bg-blue-600 text-white py-10 flex flex-col items-center gap-4 h-full">
      <div className="text-center">
        <Avatar src="/image/avatar.jpg" size={100} />
        <div className="mt-4">
          <h1 className="text-4xl font-bold">Tùng Phạm</h1>
          <p className="text-xl mt-2">Front-end Developer</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold text-center">Contact</div>
        <div className="flex gap-4">
          <HomeOutlined /> Hà Nội, Việt Nam
        </div>
        <div className="flex gap-4">
          <MailOutlined /> tungphamtp987@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Header;
