import React, {useState} from 'react'
import receipts from './receiptData';
import DisplayReceipts from './Components/DisplayReciepts';
import Form from './Components/Form'
import "./styles.css";
import AlphaSortButton from './Components/AlphaSortButton';


function App() {
  const [receiptsState, setReceiptsState] = useState(receipts)
  const [form, setForm] = useState('')
  console.log(receiptsState)


  const handleChange = (event) =>{
    console.log('Form handleChange executed!')
    setForm(event.target.value)
  }

  const formSearch = (event) => {
    event.preventDefault()
    console.log('Submission:' + form)
    const newReceipts = receiptsState.filter((receipt) =>(
      receipt.person === form
    ))
    setReceiptsState(newReceipts)
  }

//Moved to form component as child
  // const handleCickAlpha = (event) => {
  //   event.preventDefault()
  //   const alphaSortedReceipts = receiptsState.sort((a, b) => {
  //     if (a.person > b.person){
  //       return 1
  //     } if (a.person < b.person){
  //       return -1
  //     } else {
  //       return 0
  //     }
  //   })
  //   console.log(alphaSortedReceipts)
  //   setReceiptsState(alphaSortedReceipts)
  // }
  
  return (<>
    <h1>APP COMPONENT</h1>
    {/* <AlphaSortButton clickHandler = {handleCickAlpha}/> */}
    <Form onSubmit = {formSearch} onChange = {handleChange}/>
    <DisplayReceipts receiptsInfo = {receiptsState} setReceiptsState = {setReceiptsState}/>
    </>
  );
}

export default App;
