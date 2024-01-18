export const Player =({fn, song})=>{
    console.log('Song Received',song);
    return (
    <div className="text-center">
        
        <br/>
        <br/>
        <p>
        <img src = {song.artworkUrl100}/>
        <br/>
        <br/>
            {song?.artistName} <br/>{song?.trackName}
        </p>
        <br/>

    <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
        Your browser does not support the audio tag.
      </audio>
      <br/>
      <br/>

      <button onClick = {()=>{
            fn(false, null);
        }}className="btn btn-danger">Back to Songs</button>
    </div>)
}