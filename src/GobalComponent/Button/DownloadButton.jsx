import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    // Path to your PDF file in the public directory
    const filePath = "/propel_ai-powered_fullstack_engineering.pdf";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "propel_ai-powered_fullstack_engineering.pdf"; // The name with which the file will be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="bg-gradient-to-t from-red-400 to-red-600 rounded button-shadow text-[#fff] p-2 text-[10px] lg:text-[14px]"
      onClick={handleDownload}
    >
      Download Syllabus
    </button>
  );
};

export default DownloadButton;
