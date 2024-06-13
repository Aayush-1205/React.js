import React from "react";

const Song = () => {
  const data = [
    {
      name: "This is the life",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto qui molestias?",
      download: true,
    },
    {
      name: "Angel with a shotgun",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ",
      download: true,
    },
    {
      name: "Hiding in the blue",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto qui molestias?",
      download: false,
    },
    {
      name: "End it",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto qui molestias",
      download: false,
    },
  ];

  const downloadButton = () => alert("Download is starting... ");
  const unavaiableButton = () =>
    alert("The song is not available for download");

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col flex-wrap gap-5 justify-center items-center">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-80 flex flex-wrap px-3 py-2 bg-zinc-100 rounded"
        >
          <h3 className="font-semibold text-xl">Song: {value.name}</h3>
          <p className="text-xs mt-3">{value.desc}</p>
          <button
            onClick={value.download ? downloadButton : unavaiableButton}
            className={`px-2 py-1 font-semibold text-sm ${
              value.download ? "bg-zinc-500" : "bg-red-400"
            } mt-2 rounded-md text-zinc-100`}
          >
            {value.download ? "Download Now" : "Unavaiable"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Song;
