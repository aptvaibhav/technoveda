import React, {useState,useEffect} from "react";
import firebase from "../../../Firebase.js";

const Test = () => {

    const [result,setResult] = useState([]);
  const [loading,setLoading] = useState(false);

  
  const ref = firebase.firestore().collection("Test");
//   console.log(ref);
   function getResult() {
    setLoading(true);
    ref.onSnapshot((querySnapshot)=>{
        const items = [];
        querySnapshot.forEach((doc)=>{
            items.push(doc.data());
        });
        setResult(items);
        setLoading(false);
       
    });
  }
  //console.log(result);

  useEffect(() => {
   
    getResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []) 

  if(loading){
    return <h1>Loading....</h1>
  }
        return (
          
            <div>
            <br />
            <br />
            <br />
            <br />
            <h1>Hello!!</h1>
                {result.map((results)=>(
                        <p key="123">{results.res}</p>
                )
                )}
            </div>
        );
};

export default Test;