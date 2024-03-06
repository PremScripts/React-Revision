import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,settext]=useState("Enter Text Here")
    const handleonchange=(event)=>{
      settext(event.target.value);
    }
    const handleclick=()=>{
       settext(text.toUpperCase());
       props.showalert("Converted To UpperCase","success");
    }
    const handlelowerclick=()=>{
      settext(text.toLowerCase());
      props.showalert('Converted To LowerCase','success');
    }
    const handleclear=()=>{
      settext("");
      props.showalert('Text Cleared','success');
    }
    const handlecapitalize = () => {
      let words = text.split(" ");
      let capitalizedText = "";
      for (let i = 0; i < words.length; i++) {
          capitalizedText += words[i].charAt(0).toUpperCase() + words[i].substring(1) + " ";
      }
      settext(capitalizedText);  
      props.showalert('Text Capitalized','success');
  }
  const handlecopy=()=>{
    let newbox=document.getElementById('mybox')
    newbox.select();
    navigator.clipboard.writeText(newbox.value);
    props.showalert('Text Copied','success');
  }
  const handleextraspace=()=>{
    let textsplit=text.split(/[ ]+/)
    settext(textsplit.join(" "))
    props.showalert('Extra Space Handled','success');
  }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'black':'black'}}>
    <div className="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control my-3" value={text} style={{backgroundColor:props.mode==='dark'?'a':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} id="mybox" rows="8"></textarea>
    <button className='btn btn-primary mx-2' onClick={handleclick}>Convert To UpperCase</button>
    <button className='btn btn-primary mx-2' onClick={handlelowerclick}>Convert To LowerCase</button>
    <button className='btn btn-primary mx-2' onClick={handlecopy}>Copy Text</button>
    <button className='btn btn-primary mx-2' onClick={handlecapitalize}>Capitalize Text</button>
    <button className='btn btn-primary mx-2' onClick={handleextraspace}>Remove Extra Space</button>
    <button className='btn btn-primary mx-2' onClick={handleclear}>Clear Text</button>
  </div> 
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
     <h2>Your Text Summary</h2>
     <p><b>{text?text.split(" ").length:0}</b> Words <b>{text.length} </b> Characters</p>
     <p><b>{text?text.split(" ").length*0.005:0}</b> Minutes To Read</p>
     <h3>Preview</h3>
     <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
  </div>
  </>
  )
}
  