"use client";

import lodash from "lodash";
import { useEffect, useRef, useState } from "react";
import { ContentItem } from "./interface";

interface StickyHeaderLayoutProps {
  content: ContentItem[];
  idContent: string | number;
}

const StickyHeaderLayout = ({
  content,
  idContent,
}: StickyHeaderLayoutProps) => {
  const [stickyHeader, setStickyHeader] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0,
    };

    const lastPositions = new Map<Element, number>();
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const id = target.dataset.id;
        const type = target.dataset.type;
        const currentY = entry.boundingClientRect.top;
        const lastY = lastPositions.get(target) ?? currentY;
        const goingUp = currentY > lastY; // scroll lên

        lastPositions.set(target, currentY);
        if (type === "p" && !entry.isIntersecting && currentY < 0) {
          const currentContent = content.find((s) => s.name === id);

          if (currentContent) setStickyHeader(currentContent.name);
        }

        // Nếu content ra khỏi view từ trên (không còn hiển thị), chuyển header
        if (type === "c" && !entry.isIntersecting && currentY < 0) {
          setStickyHeader(null);
        }
        // Nếu scroll lên và content hiện lại → lùi lại header
        if (entry.isIntersecting && goingUp && type === "c") {
          const currentContent = content.find((s) => s.description === id);
          setStickyHeader(currentContent ? currentContent.name : null);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    const contentParentElements = document.querySelectorAll("[data-type='p']");
    if (observerRef.current) {
      contentParentElements.forEach((el) => observerRef.current!.observe(el));
    }

    const contentElements = document.querySelectorAll("[data-type='c']");
    if (observerRef.current) {
      contentElements.forEach((el) => observerRef.current!.observe(el));
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div
        className={`sticky top-0 z-10 font-bold ${
          stickyHeader ? "bg-white shadow" : ""
        }`}
      >
        {stickyHeader}
      </div>

      <div className="h-screen" key={idContent}>
        {lodash.map(content, (item, index) => (
          <div className="p-4" key={index}>
            <div data-id={item.name} data-type="p">
              {item.name}
            </div>
            <div data-id={item.description} data-type="c">
              <p>{item.description}</p>
              <p>{item.responsibilities}</p>
            </div>
          </div>
        ))}
        <div className="h-[2000px]"></div>
      </div>
    </div>
  );
};
export default StickyHeaderLayout;
