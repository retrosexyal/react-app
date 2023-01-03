import React, { useState } from "react";
import CardsCont from "../../containers/CardsCont/CardsCont";
import PageCardCont from "../../containers/PageCardCont/PageCardCont";


function Home() {
  const [pages, setPages] = useState(0)
  const getPages = (value: number) => {  
    setPages(value)
  }

  const [numberPage, getNumberPages] = useState(1);
  const setNumberPages = (value: number) => {  
    getNumberPages(value)
  }

  return <div>
    <CardsCont page={getPages} numberPage={numberPage}/>
    <PageCardCont pageNumber={pages} setNumberPages={setNumberPages}/> 
  </div>;
}

export default Home;
