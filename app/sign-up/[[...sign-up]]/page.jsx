//rfc
//rafce
import { SignUp } from "@clerk/nextjs"

function SignOutPage() {
  return ( 
        <div className="mx-auto max-w-screen-lg">
        <SignUp signInUrl="/sign-in" forceRedirectUrl={"/dashboard"} />
       </div>
     
  )
}

export default SignOutPage
