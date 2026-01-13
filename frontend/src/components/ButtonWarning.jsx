import { Link } from "react-router-dom"

export function ButtonWarning({label,buttontext , to}){
    return <div className="ml-8">
        <div>
            {label}
            
        <Link className="text-blue-700 cursor-pointer " to={to}> {buttontext}</Link>
        </div>
    </div>
}