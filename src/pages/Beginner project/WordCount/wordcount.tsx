import Head from "next/head";
import { useEffect, useState } from "react";
export default function   WordCountBeginner() {
  const[text,setText]=useState('');
  const[word,setWords]=useState(0);
  const[chars,setChars]=useState(0);
 const handeChange=(event)=>{
  setText(event.target.value);
 }
useEffect(()=>{
const wordcount=text.split(' ');
let word=0;
wordcount.forEach((count)=>{
  if(count.trim()!==''){
       word++;
  }
})
   setWords(word);
   setChars(text.length);
},[text])
  return (
     <div>
<textarea value={text} onChange={handeChange}  ></textarea>
     <h1>Word Count ={word}</h1>
     <h1>character counter ={chars}</h1>
     </div>
  );
}