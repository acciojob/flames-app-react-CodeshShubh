import React, { useState } from "react";

const App = () => {
  const relationshipMap = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];
  const [name, setname] = useState({
    name1: "",
    name2: "",
  });
  const [Result, setResult] = useState('')
 console.log(name)

  const renderRelationShip = ()=>{
     let str1 = name.name1.toLocaleLowerCase().split('')
     let str2 = name.name2.toLocaleLowerCase().split('')
     str1.forEach((text , index)=>{
       let foundIndex = str2.indexOf(text)
         if(foundIndex == -1){
           str1[index] = ''
           str2[foundIndex] = ''
         }
     });
     return (str1.join('') + str2.join('')).length
  }

  const remainInputLength = renderRelationShip();

  const renderResult = ()=>{
    setResult(relationshipMap[remainInputLength % 6])
  }

  const clearFields = () => {
    setname({name1:'' , name2:''});
    setResult("");
  };

  return (
    <div id="main">
      <input
        data-testid="input1"
        name="name1"
        value={name.name1} 
        placeholder="Enter first name"
        onChange={(e) => setname({...name , [e.target.name]:(e.target.value).trim()})}
      />
      <input
        data-
        testid="input2"
        name="name2"
        value={name.name2} 
        placeholder="Enter second name"
        onChange={(e) => setname({...name , [e.target.name]:(e.target.value).trim()})}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={renderResult}
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" name="clear" onClick={clearFields}>
        clear
      </button>
      <h3 data-testid="answer">{Result}</h3>
    </div>
  );
};

export default App;
