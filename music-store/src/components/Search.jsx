import { useRef } from "react";

export const Search = ({fn})=>{
    const artist = useRef();
    return(
        <>
    <label>Artist Name</label>
    <input ref= {artist}type = 'text' className="form-control" placeholder="Search by Artist Name"/>
    <button className="btn btn-warning float-end" onClick={()=>{
       fn(artist.current.value);
    }}>Search</button>
    <br/>
    <br/>
    </>
    );
}