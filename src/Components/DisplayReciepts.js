import React from 'react'
import AlphaSortButton from './AlphaSortButton';


function DisplayReceipts(props) {
    const handleCickAlpha = (event) => {
        console.log('CLICKED THA HANLDE CLICK ALPHA')
        event.preventDefault()
        const alphaSortedReceipts = props.receiptsInfo.sort((a, b) => {
          if (a.person > b.person){
            return 1
          } if (a.person < b.person){
            return -1
          } else {
            return 0
          }
        })
        console.log(alphaSortedReceipts)
        props.setReceiptsState(alphaSortedReceipts)
        console.log("State below:")
        console.log(props.receiptsInfo)
    }

    return (<>        


        <div className = 'receiptsContainer'>
        <AlphaSortButton clickHandler = {handleCickAlpha}/>

            {props.receiptsInfo.map((element,index) => (
                <div className = 'receipt' key = {element.id}>
                    <h2>{element.person}</h2>
                    <h3>{element.order.main}</h3>
                    <span>Protein: {element.order.protein}</span>
                    <br></br>
                    <span>Rice: {element.order.rice}</span>
                    <br></br>
                    <span>Sauce: {element.order.sauce}</span>
                    <br></br>
                    <span>drink: {element.order.drink}</span>
                    <br></br>
                    <span>cost: {element.order.cost}</span>
                    <br></br>
                    <span>paid: {element.paid.toString()}</span>
                </div>
                )
            )}
        </div>
        </>
    )
}

export default DisplayReceipts;