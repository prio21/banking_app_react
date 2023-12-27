
import Navbar from "./Navbar";
import '../CSS/button.css'

const Dashboard = () => {



    var balance = 0;
    const deposit = () =>  {
        var depositAmount = prompt("Enter deposit amount:");
        if (depositAmount !== null && !isNaN(depositAmount) && parseFloat(depositAmount) > 0) {
            balance += parseFloat(depositAmount);
            console.log("deposit working");
             updateBalance();
        } else {
            return alert("Invalid deposit amount.");
        }
    }

   const  withdraw = () =>  {
        var withdrawAmount = prompt("Enter withdrawal amount:");
        if (withdrawAmount !== null && !isNaN(withdrawAmount) && parseFloat(withdrawAmount) > 0) {
            if (parseFloat(withdrawAmount) <= balance) {
                balance -= parseFloat(withdrawAmount);
                updateBalance();
            } else {
                alert("Insufficient funds.");
            }
        } else {
            alert("Invalid withdrawal amount.");
        }
    }

    const  displayBalance = () => {
        alert("Current Balance: $" + balance.toFixed(2));
    }

    function updateBalance() {
        document.getElementById('balance').innerHTML = "Balance: $" + balance.toFixed(2);
    }


    return(
        <>
        {/* <Navbar /> */}
        {/* <div className="container my-3 "> */}
        <div className="my-3 cen" >
<div className="row">
   
     
    
     
      <div className="col-md-4 my-2">
        <div className="card text-bg-success mb-3 " style={{maxWidth: '18rem'}}>
            <div className="card-header">Hindustan Bank</div>
            <div className="card-body">
            
             <button className="custom-button" onClick={displayBalance} > Balance </button>
              <p className="card-text"></p>
            </div>
          </div>
      </div>
    
     
      <div className="col-md-4 my-2">
        <div className="card text-bg-warning  mb-3 " style={{maxWidth: '18rem'}}>
            <div className="card-header">Hindustan Bank</div>
            <div className="card-body">
             <button className="custom-button" onClick={withdraw} >Withdraw</button> 
              <p className="card-text"></p>
            </div>
          </div>
      </div>
     
      <div className="col-md-4 my-2">
        <div className="card text-bg-primary mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">Hindustan Bank</div>
            <div className="card-body">
            <button className="custom-button" onClick={deposit}>Deposit</button>  

              <p className="card-text"></p>
            </div>
          </div>
      </div>
    
      </div>



        <div id="balance">

        </div>

</div>
        </>
        
    );
}

export default Dashboard;