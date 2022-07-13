import React,{Component} from "react";
import Navbar from "../Component/Navbar";
import Axios from 'axios';

class AddPost extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            Message :""
        }
        this.ChangeName = this.ChangeName.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.ChangeMessage = this.ChangeMessage.bind(this)
    }  
    ChangeName(event){
        this.setState({name : event.target.value})
    }
    ChangeMessage(event){
        this.setState({Message : event.target.value})
    }
    HandleSubmit(event){
        event.preventDefault();
        const Message ={
            name: this.state.name,
            Message : this.state.Message
        }
        Axios.post('https://apiabyss.herokuapp.com/Message',Message)
        alert('Pesan Berhasil Ditambahkan')
        setTimeout(() => {
            window.location.href='/'
        },200)
    }
    render(){
        return(
            <>
            <header>
                    <nav>
                        <Navbar/>
                    </nav>
            </header>
            <main className="mt-[5em]">
                <form onSubmit={this.HandleSubmit} className='flex flex-col'>
                   <div className="flex flex-col w-full justify-center">
                    <label className="text-center text-xl">Name</label>
                    <input type="text" value={this.state.name} onChange={this.ChangeName} className='w-[300px] p-2 border-2 border-black mx-auto rounded-lg' />
                   </div>
                   <div className="flex flex-col w-full justify-center">
                    <label className="text-center text-xl">Message</label>
                    <textarea type="text" value={this.state.Message} onChange={this.ChangeMessage} className='block p-2 w-[300px] h-[100px] border-2 border-black mx-auto rounded-lg' />
                   </div>
                   <button type="submit" className="mt-6 bg-neutral-800 w-28 self-center p-2 text-white rounded-lg">Create Message</button>
                </form>
                
            </main>
            </>
        )
    }
}

export default AddPost ;