import React from "react";

const ArIFrameVideos = ({
  src,
  title,
  className,
  videoTitle,
  videoBoxClassName,
}) => {
  return (
    <div className={videoBoxClassName}>
      {videoTitle && (
        <h2 className="text-center text-lg font-bold mb-4">{videoTitle}</h2>
      )}
      <iframe
        className={className}
        width="100%"
        height="100%"
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default ArIFrameVideos;
