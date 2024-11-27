import Link from 'next/link';
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


export default async function Itemlist() {

  const { topics } = await getTopics();

  return (
    <>
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
    </>
  );
}
