"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [cloud, setCloud] = useState({
    id: 0,
    name: "",
  });
  const [storage, setStorage] = useState({
    id: 0,
    name: ''
  });
  
  const [selected, setSelected] = useState({
    id: 0,
    name: '',
    price: '',
  });

  console.log(selected);
  const items = [
    {
      id: 1,
      name: "Google Cloud",
    },
    {
      id: 2,
      name: "AWS",
    },
    {
      id: 3,
      name: "Digital Ocean",
    },
    {
      id: 4,
      name: "Rdx",
    },
  ];

  const storage_items = [
    {
      id: 1,
      name: "isp",
    },
    {
      id: 2,
      name: "cloud",
    },
    {
      id: 3,
      name: "hosting",
    },
    {
      id: 4,
      name: "bdix",
    },
  ];

  const service_items = [
    {
      id:1,
      name: "20GB hosting",
      price: "200TK",
      category: "isp"
    },
    {
      id:2,
      name: "10GB hosting",
      price: "400TK",
      category: "cloud"
    },
    {
      id:3,
      name: "20GB hosting",
      price: "600TK",
      category: "bdix"
    },
    {
      id:4,
      name: "200GB hosting",
      price: "800TK",
      category: "hosting"
    },
    {
      id:5,
      name: "90GB hosting",
      price: "2000TK",
      category: "isp"
    },
    {
      id:6,
      name: "40GB hosting",
      price: "900TK",
      category: "isp"
    },
    {
      id:7,
      name: "400GB hosting",
      price: "9000TK",
      category: "bdix"
    },
  ]

  const selected_service_list = service_items.filter(item => item.category === storage.name)
  return (
    <main>
      <div className="flex gap-x-4 ">
        {items.map((item, index) => (
          <>
            <div>
              <div
                id={`${item.id === cloud.id && "test"}`}
                onClick={() => setCloud(item)}
                className=" cursor-pointer bg-white w-[150px] h-[50px] flex items-center justify-center shadow-md rounded-2"
              >
                <p className=" text-black">{item.name}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div>
        <h1>Storage: </h1>
        <div>
          <div className="flex gap-x-4 ">
            {storage_items.map((item, index) => (
              <>
                <div>
                  <div
                    id={`${item.id === storage.id && "test"}`}
                    onClick={() => setStorage(item)}
                    className=" cursor-pointer bg-white w-[150px] h-[50px] flex items-center justify-center shadow-md rounded-2"
                  >
                    <p className=" text-black">{item.name}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl text-blue-500 my-4">Selected Service list </h3>
        <div className="flex gap-[10px]">
          {
            selected_service_list?.map(item => <>
            <div id={`${item.id === selected.id && 'test'}`} onClick={()=>setSelected(item)} className="w-[200px] h-[80px] bg-white flex items-center justify-center text-black flex-col">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
            </>)
          }
        </div>
      </div>
    </main>
  );
}
