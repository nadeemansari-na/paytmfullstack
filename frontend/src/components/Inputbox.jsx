
export function Inputbox({placeholder, label, onchange}){
    return <div className="pt-2">
        <div className="text-black">{label}</div>
        <input  onChange={onchange} className="text-shadow-gray-200 mt-2 border-blue-600 pl-2 rounded-1 w-78 bg-gray-50" type="text" placeholder={placeholder} />
    </div>
}