import React, { Component } from "react";
import Switch from "react-switch";
import Plans from '../Organisms/Plans'

class SwitchPlans extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
          <>
          <div className="d-flex justify-content-around fontPrice1 mt-4">
                <span>Plan Estándar</span>
              <div className="custom-control custom-switch text-center mr-4">
           
                        <Switch
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            className="react-switch "
                            id="normal-switch"
                            onColor="#888888"
                            onHandleColor="#EAEAEA"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                           
                        />
                      </div>

                      <span>Plan Premiun</span>
               
                </div> 
                <span>
                        {this.state.checked ? 
                        <Plans price={"59"} condition={1} /> : <Plans price={"29"} condition={2}/> }
                </span>    
        </>
      );
    }
  }
  export default SwitchPlans