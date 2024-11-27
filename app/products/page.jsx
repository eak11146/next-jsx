import Link from "next/link" 
import Removebtn from '../component/Removebtn'
import { HiPencilAlt } from 'react-icons/hi';
  


 const getTopics = async () => {
  try {
   const res = await fetch("http://localhost:3000/api/topics", {
     cache: "no-store",
   });

   if (!res.ok) {
     throw new Error("Failed to fetch topics");
   }

   return res.json();
 } catch (error) {
   console.log("Error loading topics: ", error);
 }
};



export default async function Productspage() {

  const { topics } = await getTopics();
  
  return (
    <div className="grid justify-items-center">
         
        <h1 className="text-2xl font-normal capitalize">product</h1>
        <Link href ='/addTopic'>
        <button className="bg-white border-solid border-2 border-sky-500 p-3 my-5 rounded-xl ">Add topics</button>
        </Link>
        <h1 className='font-bold text-2xl'>List Post</h1>
        {
        topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start w-[60%] "
        >
          <div>
            <h2 className="font-bold text-xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <Removebtn id={t._id} />
 
            <Link href={`/editTopic/${t._id}`}>
             <HiPencilAlt size={24} /> Edit
            </Link>
          </div>
        </div>
      ))
      }
       
    </div>
  )
}
