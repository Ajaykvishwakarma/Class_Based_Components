import React from "react"
import { FaSearch } from 'react-icons/fa';
export class SearchEngine extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        query: ''
      }
    }
  
    render() {
      return (
        <>
        <div style={{marginTop:"10px"}}>
            <img src="https://cdn.ndtv.com/tech/DuckDuckGo_Logo.jpg" style={{width:"120px" , height:"100px"}} alt="" />
        </div>
        <form action="https://duckduckgo.com">
          <input
            type="text"
            style={{padding:"2px"}}
            name="q"
            onChange={(e) => { this.setState({ query: e.target.value }) }}
          />
          <button type="submit" value="search" ><FaSearch/></button>
        </form>
        </>
      )
    }
  }