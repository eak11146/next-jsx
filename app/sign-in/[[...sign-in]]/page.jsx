import { SignIn } from "@clerk/nextjs"

const Sign_in = () => {
  return (
    <div className="mx-auto max-w-screen-lg">
      <SignIn signUpUrl="/sign-up" forceRedirectUrl={"/dashboard"} />
    </div>
  )
}

export default Sign_in
