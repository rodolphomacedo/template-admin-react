export default function Logo(){
    return (
        <div className={`
        flex flex-col justify-center items-center
        bg-gradient-to-bl from-purple-200 via bg-transparent to-indigo-300
         w-10 h-10 rounded-full`}>
            <div className={`bg-red-600 w-3 h-3 rounded-full mb-0.5`} />
            <div className={`flex mt-0.5`}>
                <div className={`bg-blue-600 w-3 h-3 rounded-full mr-0.5`} />
                <div className={`bg-green-600 w-3 h-3 rounded-full ml-0.5`} />
            </div>
        </div>
    )
}