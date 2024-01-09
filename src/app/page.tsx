"use client";
import Image from "next/image";
import { ArrowDownIcon } from "@/components/icons";
import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState(false);
  const [faq, setFaq] = useState(false);
  return (
    <main className="w-full bg-white h-screen text-black">
      <div className="container mx-auto">
        <h1 className="text-2xl font-[600]">Frequently Asked Question</h1>
        <div>
          <div className="flex gap-[5px] items-center ">
            <p className="text-xl font-[500] text-blue-500">
              What people thinks about us?
            </p>
            <div onClick={()=>setContent(!content)} className="w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
              <Image className={`${content ? 'rotate-180' : ''} transition-all duration-200`} src="arrow-down.svg" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={`${content ? 'block' : 'hidden'} shadow-md p-4 transition-all duration-300`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              obcaecati, debitis provident temporibus delectus inventore
              similique esse. Ex, possimus cupiditate. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Aperiam dolore officiis
              recusandae error officia reprehenderit, ducimus vitae nisi? Dolore
              molestias est ipsum, fugiat accusamus earum suscipit voluptas
              quasi vel ipsa provident dignissimos aperiam obcaecati vero
              delectus consequatur, perferendis in asperiores fugit expedita
              cupiditate quaerat? At sed doloremque amet magnam odio.
            </p>
          </div>
        </div>

        <div className="mt-[10px]">
          <div className="flex gap-[5px] items-center ">
            <p className="text-xl font-[500] text-blue-500">
              What people thinks about us?
            </p>
            <div onClick={()=>setFaq(!faq)} className="w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
              <Image className={`${faq ? 'rotate-180' : ''} transition-all duration-200`} src="arrow-down.svg" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={`${faq ? 'block' : 'hidden'} shadow-md p-4 transition-all duration-300`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              obcaecati, debitis provident temporibus delectus inventore
              similique esse. Ex, possimus cupiditate. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Aperiam dolore officiis
              recusandae error officia reprehenderit, ducimus vitae nisi? Dolore
              molestias est ipsum, fugiat accusamus earum suscipit voluptas
              quasi vel ipsa provident dignissimos aperiam obcaecati vero
              delectus consequatur, perferendis in asperiores fugit expedita
              cupiditate quaerat? At sed doloremque amet magnam odio.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
