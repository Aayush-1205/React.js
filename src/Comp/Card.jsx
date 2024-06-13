import React from 'react'

const Card = ({text, color}) => {
  const data = [
    { img: "https://static.startuptalky.com/2022/06/Amazon-StartupTalky.jpg", title: "Amazon", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque dolor quas.", read: true },

    { img: "https://images.tv9hindi.com/wp-content/uploads/2023/10/flipkart-file-photo.jpg", title: "Flipkart", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque dolor quas.", read: true },

    { img: "https://www.indifi.com/blog/wp-content/uploads/2019/12/How-To-Successfully-Sell-On-Zomato.jpg", title: "Zomato", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque dolor quas.", read: false },

    { img: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/17/full/1689574606-2001.png", title: "Swiggy", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque dolor quas.", read: true },
  ];

  const readMore = () => alert("You will be shortly direct to another page. Please wait...");
  const unavaiable = () => alert("The article you want to read is unavaiable. Please try again later.");

  return (
    <div className='w-full md:h-screen py-4 flex flex-wrap items-center justify-center gap-10 bg-slate-700'>
      {/* dvh - dynamic viewport Height */}
      {data.map((value, index) => (
        <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden hover:scale-105 transition-all hover:drop-shadow-xl'>
          <div className="w-full h-32 bg-zinc-600">
            <img className='w-full h-32 object-cover object-center overflow-hidden' src={value.img} alt="" />
          </div>
          <div className="w-full bg-white px-3 py-4">
            <h2 className='font-semibold text-lg'>{value.title}</h2>
            <p className='text-xs mt-2'>{value.desc}</p>
            {/* ternary Operator are like if and else: if the value.read is true ? then add "Read more" : else "Unavaiable" */}
            <button onClick={value.read ? readMore : unavaiable} className={`btn py-1 px-3 ${value.read ? "bg-blue-400" : "bg-red-400"} mt-3 text-sm rounded`}>{value.read ? "Read More" : "Unavaiable"}</button>
            <button onClick={() => alert("You will be shortly direct to OFFERS. Please wait...")} className={`${color} px-3 py-1 text-sm rounded ml-2 text-white font-semibold`}>{text}</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
