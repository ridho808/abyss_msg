import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Component/Navbar';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const DetailsPost= () => {
    const [name,setName] = useState('');
    const [Message,setMessage] = useState('');
    const {id} = useParams();
    const Navigate =useNavigate()

    const GetMessageById = async () => {
        const response = await axios.get(`https://apiabyss.herokuapp.com/getmsg/${id}`)
        setName(response.data.name);
        setMessage(response.data.Message);
    }
    const DeleteId = async(id) =>{
        await axios.delete(`https://apiabyss.herokuapp.com/delete/${id}`)
        alert('Pesan berhasil dihapus')
        setTimeout(()=>{
            Navigate('/')
        },1000)
        
    }
    useEffect(()=>{
        GetMessageById();
        // eslint-disable-next-line 
    },[]);

    return(        
        <>
            <header>
                <Navbar />
            </header>
            <main className='mt-[5em]'>
                <div className='w-[300px] mx-auto border-2 border-black flex flex-col items-center rounded-lg'>
                <img src="https://img.icons8.com/ios-filled/240/000000/user.png" className='object-cover w-[50px] h-[50px]' alt="foo"/>
                <h3>{name}</h3>
                <p className='p-5'>{Message}</p>
                </div>
                <div className='flex flex-row justify-center w-[200px] mx-auto mt-3'>
                    <button onClick={()=>DeleteId(id)} className='w-[90px] h-[50px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300 rounded-lg text-white'>Delete</button>
                </div>

                <div className='fixed bottom-1 h-12 flex justify-center w-full'>
                        <Link to={'/AddFeed'} className='w-[50px] flex justify-center items-center rounded-[360px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300'>
                            <AiOutlinePlus size={35} fill="white"/>
                        </Link>
                </div>
            </main>
        </>
    )
}

export default DetailsPost;