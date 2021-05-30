import React from "react";
import "./UserList.css"
import Pagination from "@material-ui/lab/Pagination" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserContext} from "../App.js"
const UserList = ()=>{
    const displayMaxibid=(bids)=>{
         const bidsArray=[];
         bids.map((e)=>{
             bidsArray.push(e.amount);
         })
        //  console.log(bidsArray)
        bidsArray.sort();
        const length=bidsArray.length;
        return <h5>{bidsArray[length-1]}</h5>
    }
    const displayMinBid=(bids)=>{
        const bidsArray=[];
        bids.map((e)=>{
            bidsArray.push(e.amount);
        })
       //  console.log(bidsArray)
       bidsArray.sort();
       const length=bidsArray.length;
       return <h5>{bidsArray[0]}</h5>
    }
    return (
        <div className="App">
            <UserContext.Consumer>
             {(contextData)=> { 
                return(
                    <>
                    <div className="userList">
                        {contextData.userData.map((e)=>{
                         return (
                            <div className="d-flex userDetail" key={e.id}>
                                <div style={{width:"40%"}}>
                                    <img  className="user_img" src={e.avatarUrl}></img>
                                </div>
                                <div  style={{width:"40%"}}>
                                    <h6>Name: {e.firstname } {e.lastname}</h6>
                                    <h6>Email: {e.email}</h6>
                                    <h6>Email: {e.phone}</h6>
                                </div>
                                <div style={{width:"20%"}}>
                                    <button onClick={displayMinBid}> Maximum Bid</button>
                                    {displayMaxibid(e.bids)}
                                </div>
                            </div>
                        )
                        })}
                    </div>
                    <Pagination 
                        count={5}
                        variant="outlined"
                        color="secondary"
                        defaultPage={1}
                        showFirstButton={true}
                        showLastButton={true}
                        onChange={(event,value)=>contextData.setPage(value)}
                    />
                </>
                );
               }
             }
           </UserContext.Consumer>  
        </div>
      );
}

export default UserList;