import Link from "next/link"
import { hasEnvVars } from "@/lib/utils"
import { EnvVarWarning } from "./env-var-warning"
import { Suspense } from "react"
import { AuthButton } from "./auth-button"
import Image from "next/image"

const NavBar = () => {
    const logoSize = 16;
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 sticky">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"} className="flex gap-2 justify-center items-center">
                <Image src={'/KCOM_IT3C_LOGO-white.png'} width={logoSize} height={logoSize} alt="Pithos Logo" />
                KCOM
            </Link>
            <div className="flex items-center gap-2">
            </div>
        </div>
        {!hasEnvVars ? (
            <EnvVarWarning />
        ) : (
            <Suspense>
                <AuthButton />
            </Suspense>
        )}
        </div>
    </nav>
  )
}

export default NavBar
