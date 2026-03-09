import { createClient } from "@/lib/supabase/server";

const WelcomeUser = async ({email} : {email : string}) => {
    const supabase = await createClient();
    const { data } = await supabase.auth.getClaims();
    const user = data?.claims.user_metadata;
    return (
        <div className='min-h-screen w-full flex flex-col p-4 items-center justify-center flex-wrap overflow-hidden animate-fadeIn'>
            {/* Get email */}
            <h1 className='text-2xl duration-300 transition ease-in-out hover:scale-105'>Welcome, <b className='text-6xl font-bold'>{user?.full_name}</b></h1>
        </div>
    )
}

export default WelcomeUser
