import { useSearchParams } from "react-router-dom"

export function Name(){

const [Searchparams]=useSearchParams()
const name=Searchparams.get("name")
const id=Searchparams.get("id")

    return <div className="flex items-center gap-7 mt-9  ">
        <div className="flex justify-center  w-7 h-7 bg-black rounded-full shadow-emerald-900">
    <div className="text-white shadow-emerald-900" >
        {name[0]}
    </div>
        </div>
        <div className="font-semibold text-black">
            {name}
        </div>
    </div>
}