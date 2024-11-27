import Link from "next/link" 
import { connectToDatabase } from '../../utils/connectMongo'
import Removebtn from '../component/Removebtn'
import { HiPencilAlt } from 'react-icons/hi';
  
async function getData() {
  try {
    // DB Connect
    const client = await connectToDatabase();
    const db = client.db("program");

    // DB Query
    const items = await db
      .collection("topics")
      .find({})      
      .toArray();
 

    const respnse = { items };
    console.log(respnse);
    return respnse;

  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
} 

const ListItem = ({ title, description ,id }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="flex gap-2">
           {/*  <Removebtn id={item._id} />
 
            <Link href={`/editTopic/${item._id}`}>
             <HiPencilAlt size={24} /> Edit
            </Link> */}
     </div>
  </div>
);

export default async function Productspage() {

  const data =  await getData();
  
  console.log(data)

  return (
    <div className="grid justify-items-center">
         
        <h1 className="text-2xl font-normal capitalize">product</h1>
        <Link href ='/addTopic'>
        <button className="bg-white border-solid border-2 border-sky-500 p-3 my-5 rounded-xl ">Add topics</button>
        </Link>
        <h1 className='font-bold text-2xl'>List Post</h1>
        {
         /*data.items.map((item) => ( 
          <div
          key={ item._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start w-[60%] "
        >
          <div>
            <h2 className="font-bold text-xl">{item.title}</h2>
            <div>{item.description}</div>
          </div>

          <div className="flex gap-2">
            <Removebtn id={item._id} />
 
            <Link href={`/editTopic/${item._id}`}>
             <HiPencilAlt size={24} /> Edit
            </Link>
          </div>

        </div>
         ))*/
        data.items.map((item) => (
          // Use the spread operator to pass all properties of 'item' as props
          <ListItem key={item.id} {...item} />
        ))
        }
      
       
    </div>
  )
}
