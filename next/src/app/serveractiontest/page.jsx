import {sayHello} from "@/lib/action"

const ServerActionTestPage = () => {

    // const actionInComponent = async ()=>{
        //   "use server"
        //   console.log("it works!")
        // }
    return (
        <div>
            <form action="sayHello">
                <button>test</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage