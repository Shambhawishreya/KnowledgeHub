import React ,{useState} from "react";
import Card from "./Card";
import axios from "axios";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`)

            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Explore , Read , Learn and<br/>Expand your Knowledge</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyUp={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;