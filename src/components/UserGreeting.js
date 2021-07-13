import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: true
        }

    }
    
    render() {

         // Approach 4
         return this.state.isLoggedIn && <div> Welcome Shashank  </div>
         
        // Approach 3
        // return(
        //     this.state.isLoggedIn ? 
        //     <div> Welcome Shashank  </div> :
        //     <div> Welcome Guest  </div>
        // );

        // Approach 2
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome Shashank  </div>
        // }
        // else{
        //     message = <div> Welcome Guest  </div>
        // }
        
        // return <div> {message} </div>

        // Approach 1
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //            <div> Welcome Shashank  </div>
        //         </div>
        //     );
        // }
        // else {
        //     return (
        //         <div>
        //            <div> Welcome Guest  </div>
        //         </div>
        //     );
        // }
       
    }
}

export default UserGreeting;