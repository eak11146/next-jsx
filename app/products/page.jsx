import Link from "next/link" 
import dynamic from 'next/dynamic'
 /* import Itemlist from '../component/Itemlist' */

 const DynamicNotFound = dynamic(
	() => import('../component/Itemlist'),
	{ ssr: false }
);
 
export default async function Productspage() {


  return (
    <div className="grid justify-items-center">
         
        <h1 className="text-2xl font-normal capitalize">product</h1>
        <Link href ='/addTopic'>
        <button className="bg-white border-solid border-2 border-sky-500 p-3 my-5 rounded-xl ">Add topics</button>
        </Link>
      {/*   <Itemlist/>  */}
      <DynamicNotFound />
    </div>
  )
}
