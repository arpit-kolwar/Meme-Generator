import React from 'react'


export default function Meme() {


  const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https:\/\/i.imgflip.com\/1ur9b0.jpg"
  })

  const[allMemes,setallMemes]=React.useState([])
 React.useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
 .then(res=>res.json())
 .then(data=>setallMemes(data.data.memes))

 },[])

  //memesArray[randomNumber].url
 const[memeImage,setMemeImage]= React.useState("https:\/\/i.imgflip.com\/1ur9b0.jpg");
  
  
  function getMemeImage(){
   
    const randomNumber =Math.floor(Math.random() * allMemes.length)
    const url= allMemes[randomNumber].url
    setMeme(prevMeme=>({
      ...prevMeme,
      randomImage:url

      

    }));
  }
  
  function handleOnchange(event){
const {name,value} = event.target
   setMeme(prevMeme =>({
    ...prevMeme,
    [name]: value
   }))
    
   }
  
  
  return (
    <main>
      <div className="form">
        <input 
        type="text"
        placeholder='Top text'
        className='form--input'
        onChange={handleOnchange}
        name='topText'
        value={meme.topText}
        
        />
        <input 
        type="text"
        placeholder='bottom text'
        className='form--input'
        onChange={handleOnchange}
        name='bottomText'
        value={meme.bottomText}
        
        />
        <button 
           className='form--button'
           onClick={getMemeImage}
        >
          Get a new meme Image
           </button>
      </div>
      <div className='meme'>
      <h3 className='meme-topText'>{meme.topText}</h3>
      <h3 className='meme-bottomText'>{meme.bottomText}</h3>
      <img src={meme.randomImage} className='meme-image'/>
      </div>
    </main>
  )
  }
