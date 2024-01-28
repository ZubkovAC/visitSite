"use client"
import axios from 'axios';
import {useState} from "react";

// import {useEffect} from "react";

// const url = "dzen.ru"
// const url = "https://nest-test-blog4412.vercel.app/"

// export async function GET() {
//     // const res = await fetch('dzen.ru')
//     const res = await fetch('https://nest-test-blog4412.vercel.app/')
//     const data = await res.json()
//
//     console.log(data)
//
//     return Response.json({ data })
// }

export default function Page() {

    const [sizeWindow, setSizeWindow] = useState<{width:number,height:number}>({width:1280, height:1080})

    const [ randomUuid, setRandomUuid] = useState<string> ('')

    // useEffect(()=>{
    //     const data = async () =>{
    //          return  await  axios.get(url)
    //     }
    //     const a = data()
    //
    //
    //     console.log(JSON.stringify(a))
    //     console.log('hello')
    // },[])

    const click = async () => {
       const data =  await  axios.get("https://httpbin.org/uuid")
        setRandomUuid(data.data.uuid)
        console.log(data)
    }

    const onSizeWindow = (size:number) =>{
        if(size ==1)setSizeWindow({width:320, height:240})
        if(size ==2)setSizeWindow({width:640, height:480})
        if(size ==3)setSizeWindow({width:1024, height:768})
        if(size ==4)setSizeWindow({width:1280, height:1080})
        console.log(size)
    }


    return <div>

        <div>
            hello
        </div>
        <button onClick={click} >give uuid</button>
        <div>
            {
                randomUuid && randomUuid
            }
        </div>
        {/*<button onClick={()=>onSizeWindow(1)} style={{margin:'10px'}} >mobileSize</button>*/}
        {/*<button onClick={()=>onSizeWindow(2)} style={{margin:'10px'}}>lowSize</button>*/}
        {/*<button onClick={()=>onSizeWindow(3)} style={{margin:'10px'}}>tableSize</button>*/}
        {/*<button onClick={()=>onSizeWindow(4)} style={{margin:'10px'}}>pkSize</button>*/}
        {/*<iframe src="https://facebook.com" width={sizeWindow.width} height={sizeWindow.height} scrolling="auto"> </iframe>*/}
    </div>
}