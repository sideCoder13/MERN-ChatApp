import React , {useState} from 'react'
import toast from 'react-hot-toast';
import { MdOutlineSearch } from "react-icons/md";
import useConversation from "../../zustand/useConversation"
import useGetConversations from "../../hooks/useGetConversations"

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversation} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search){
      toast.error("Search bar is empty!")
      return;
    }

    if(search.length < 3){
      toast.error("Search should have atleast more than 3 characters")
      return;
    }

    
    const searchConversation = conversation.find((name)=>{
      return name.fullName.toLowerCase().includes(search.toLowerCase())
    })
    
    console.log(searchConversation)

    if(searchConversation){
      setSelectedConversation(searchConversation);
      setSearch("");
    }else return toast.error("User not found!")
  }
  return (
    <form className='flex gap-2 items-center p-3' onSubmit={handleSubmit}>
      <input 
        placeholder='Search...' 
        name='text' 
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        {
          <MdOutlineSearch className='w-6 h-6 outline-none'/>
        }
      </button>
    </form>
  )
}

export default SearchInput