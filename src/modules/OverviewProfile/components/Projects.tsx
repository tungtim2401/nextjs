import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../constant";
import ModalProjectDetail from "./ModalProjectDetail";
import { IModal } from "../interface";
import { Card } from "antd";

const Projects = () => {
  const [modal, setModal] = useState<IModal>({
    open: false,
    data: null,
  });
  const { open, data } = modal;

  const containerRef = useRef<HTMLDivElement | null>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (event: MouseEvent) => {
      isDown = true;
      container.classList.add("cursor-grabbing");
      startX = event.pageX - container.offsetLeft; // lấy vị trí chuột khi nhấn
      scrollLeft = container.scrollLeft; // vị trí cuộn hiện tại
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDown) return; // nếu không nhấn chuột thì không làm gì
      event.preventDefault(); // ngăn chặn hành vi mặc định của trình duyệt
      const x = event.pageX - container.offsetLeft; // vị trí chuột hiện tại
      const walk = (x - startX) * 2; // tính toán khoảng cách di chuyển, tốc độ kéo
      container.scrollLeft = scrollLeft - walk; // cập nhật vị trí cuộn
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-primary">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div
          className="flex gap-4 overflow-y-auto overflow-x-auto scrollbar-hide py-2 snap-x scroll-pl-6"
          ref={containerRef}
        >
          {PROJECTS.map((project) => (
            <Card
              key={project.name}
              className="snap-start bg-white rounded-lg shadow-md p-4 mb-6 w-[300px] flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => setModal({ open: true, data: project })}
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm">{project.summary}</p>
            </Card>
          ))}
          {PROJECTS.map((project) => (
            <Card
              key={project.name}
              className="snap-start bg-white rounded-lg shadow-md p-4 mb-6 w-[300px] flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => setModal({ open: true, data: project })}
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm">{project.summary}</p>
            </Card>
          ))}
        </div>
      </div>
      <ModalProjectDetail
        open={open}
        dataModal={data}
        onClose={() => setModal({ open: false, data: null })}
      />
    </section>
  );
};

export default Projects;
