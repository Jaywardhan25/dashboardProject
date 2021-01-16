import React from "react";

function Searchbox(){
  return(
    <>
    <div class="form-wrapper">
      <div class='full-input'>
        <input type='text' placeholder="Search" name='search'></input>
        <label for='search'><img src="images/magnifier 3.png" /></label>
      </div>
    </div>
    </>
  )
}
export default Searchbox;
