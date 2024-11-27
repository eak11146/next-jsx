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

  console.log(user)

  return (

    <div className="">
      {/* <UserProfile />  */}

      { user.firstName || user.lastName ? (
        <>
          <h1 className="text-[1.0625rem] font-semibold relative w-full text-center">
              {user.firstName} {user.lastName}
           </h1> 
           <p> {user.emailAddresses[0].emailAddress}</p>   
           <p>{user.provider}</p>     
        </>
        ):null
      }  

 
 
<img src={user.imageUrl} className="size-20 rounded-full" />


      {organization ? (
          <>
            <div className="mt-6 mb-4 text-[0.9375rem] font-semibold">
              Organization detail
              
              
            </div>
            <p>{ formatDate(user.lastSignInAt) }</p>
          </>
             
          
            
              
            
           /*    {organization.id} 
              {organization.name} 
              {String(organization.membersCount)}
              {String(organization.pendingInvitationsCount)}   */
          
        ) : null}
        
        <SignOutButton>
         <button className='bg-black text-white text-xl py-3 px-5 rounded-xl'>My custom button</button>
        </SignOutButton>
       
    </div>
    
  );
}