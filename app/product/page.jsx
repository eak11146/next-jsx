import Link from "next/link" 
 

export default function Productpage() {


  return (
    <div>
        <h1 className="text-2xl font-normal capitalize">product</h1>
        <Link href ='/addTopic'>
        <button className="bg-white border-solid border-2 border-sky-500 p-3 my-5 rounded-xl ">Add topics</button>
        </Link>
       
    </div>
  )
}
