const listItem = [
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
  "Phạm Thanh Tùng",
  "tungphamtp987@gmail.com",
];


const Header = () => {
  return (
    <div className="relative overflow-hidden bg-gray-500 py-2">
      <div className="flex whitespace-nowrap marquee-content">
        {[...listItem, ...listItem].map((item, index) => (
          <div key={index} className="mx-4 inline-block">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Header;