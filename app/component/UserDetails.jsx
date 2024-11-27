"use client";
import { UserProfile , SignOutButton } from '@clerk/nextjs';
import { useOrganization, useSession, useUser } from "@clerk/nextjs";
 

function formatDate(date) {
  /*return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });*/
  return date.toLocaleDateString();
}


export default function Userdetails () {
  const { user } = useUser();
  const { session } = useSession();
  const { organization } = useOrganization();

  if (!user || !session) return null;

 // console.log(user)

  return (

    <div className="">
      {/* <UserProfile />  */}

      { user.fullName ? (
        <>
      
          <div className="grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg">

  <div className="p-4 rounded shadow-lg bg-fuchsia-200 grid place-content-center row-span-3"> 
  <img src={user.imageUrl} className="size-20 rounded-full" />
  </div>

  <div className="p-4 rounded bg-fuchsia-500 grid place-content-center col-span-2 dark:bg-fuchsia-800 dark:text-fuchsia-400">
  <h1 className="text-[1.0625rem] font-semibold relative w-full text-center">
  {user.firstName} {user.lastName}
    </h1>  
    <p>{user.emailAddresses[0].emailAddress}</p>   
    <p>{user.externalAccounts[0].provider}</p>  
  </div>

  <div className="p-4 rounded shadow-lg bg-fuchsia-500 grid place-content-center row-span-2 col-span-2"> 
           <p>Create At</p>
           <p>{ formatDate(user.createdAt) }</p> 
           <p>Last login</p>
           <p>{ formatDate(user.lastSignInAt) }</p>   
  </div>
</div>
  
        </>
        ):null
      }  

 
 
 


      {organization ? (
          <>
            <div className="mt-6 mb-4 text-[0.9375rem] font-semibold">
              Organization detail 
            </div>
            {organization.id} 
              {organization.name} 
              {String(organization.membersCount)}
              {String(organization.pendingInvitationsCount)}
            
          </> 
        ) : null}
        
        {/* <SignOutButton>
         <button className='bg-black text-white text-xl py-3 px-5 rounded-xl'>My custom button</button>
        </SignOutButton> */}
       
    </div>
    
  );
}