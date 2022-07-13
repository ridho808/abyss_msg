import React,{Component} from 'react';
import Axios from 'axios';
import Navbar from '../Component/Navbar';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
            Post: [{}]
        }
    }
    GetData(){
        Axios({
            method: 'get',
            url :'https://apiabyss.herokuapp.com/'
        }).then((response) => {
            const Post = response.data ;
            this.setState({Post})
        }).catch((err)=>err)
    }
    componentDidMount(){
        this.GetData()
    }
    render(){
        return(
            <>
                <header>
                    <nav>
                        <Navbar/>
                    </nav>
                    <h1 className='text-center text-4xl'>BONJOUR '🖐'!</h1>
                </header>
                <main className='overflow-auto pt-[4em] h-[630px]'>
                    {
                        this.state.Post.reverse().map((response,i) => {
                            return (
                                <Link to={`/see/${response.id}`} key={i} className='max-w-[250px]  mx-auto flex flex-col m-3 border-2 border-black rounded-[30px] sm:max-w-[500px]'>
                                    <div className='flex flex-col justify-evenly items-center text-center mb-2'>
                                    <img src="https://img.icons8.com/ios-filled/240/000000/user.png" className='object-cover w-[50px] h-[50px]' alt="foo"/>
                                    <h1 className='text-black underline'>{response.name}</h1>
                                    </div>
                                    <p className='text-center text-sm text-black p-2'>
                                        ` {response.Message} `
                                    </p>
                                </Link>
                            )
                        })
                    }
                    <div className='fixed bottom-1 h-12 flex justify-center w-full'>
                        <Link to={'/AddFeed'} className='w-[50px] flex justify-center items-center rounded-[360px] transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-700 duration-300'>
                            <AiOutlinePlus size={35} fill="white"/>
                        </Link>
                    </div>
                </main>
                <footer>

                </footer>
            </>
        )
    }
}

export default Home;