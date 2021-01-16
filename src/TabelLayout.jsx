import React from "react";
import TabelCard from "./TabelCard";
import {Link} from "react-router-dom";
function TabelLayout(){
  return(
    <>
    <div className="tableLayout-Container">
    <div className="tableLayout-SubContainer1">
    <Link to ="TablePage">
    <TabelCard
    imgHolder="tableImgHolder"
    src="images/tablet 1.svg"
    description="Tabels"
    subDescription="14 Components"
    clickHolder="tabelClickHolder"
    arrowSrc="images/right-arrow 3.svg"
    />
    </Link>

    <Link to ="ColumnPage">
    <TabelCard
    imgHolder="columnImgHolder"
    src="images/layout 1.svg"
    description="Columns"
    subDescription="14 Components"
    clickHolder="columnClickHolder"
    arrowSrc="images/right-arrow 4.svg"
    />
    </Link>

    <Link to ="ButtonPage">
    <TabelCard
    imgHolder="buttonImgHolder"
    src="images/vote 1.svg"
    description="Buttons"
    subDescription="14 Components"
    clickHolder="buttonClickHolder"
    arrowSrc="images/right-arrow 5.svg"
    />
    </Link>

    <Link to ="InputPage">
    <TabelCard
    imgHolder="inputImgHolder"
    src="images/input 1.svg"
    description="Inputs"
    subDescription="14 Components"
    clickHolder="inputClickHolder"
    arrowSrc="images/right-arrow 6.svg"
    />
    </Link>

    <Link to ="CarouselPage">
    <TabelCard
    imgHolder="carouselImgHolder"
    src="images/carousel 1.svg"
    description="Carousel"
    subDescription="14 Components"
    clickHolder="carouselClickHolder"
    arrowSrc="images/right-arrow 7.svg"
    />
    </Link>
    </div>


    <div className="tableLayout-SubContainer1">
    <Link to ="ButtonPage">
    <TabelCard
    imgHolder="tableImgHolder"
    src="images/tablet 1.svg"
    description="Uploader"
    subDescription="14 Components"
    clickHolder="tabelClickHolder"
    arrowSrc="images/right-arrow 3.svg"
    />
    </Link>

<Link to ="ButtonPage">
    <TabelCard
    imgHolder="columnImgHolder"
    src="images/layout 1.svg"
    description="Forms"
    subDescription="14 Components"
    clickHolder="columnClickHolder"
    arrowSrc="images/right-arrow 4.svg"
    />
    </Link>
    <Link to ="ButtonPage">
    <TabelCard
    imgHolder="buttonImgHolder"
    src="images/vote 1.svg"
    description="Navbar"
    subDescription="14 Components"
    clickHolder="buttonClickHolder"
    arrowSrc="images/right-arrow 5.svg"
    />
    </Link>
    <Link to ="ButtonPage">
    <TabelCard
    imgHolder="inputImgHolder"
    src="images/input 1.svg"
    description="Pagination"
    subDescription="14 Components"
    clickHolder="inputClickHolder"
    arrowSrc="images/right-arrow 6.svg"
    />
    </Link>
    <Link to ="ButtonPage">
    <TabelCard
    imgHolder="carouselImgHolder"
    src="images/carousel 1.svg"
    description="Dates"
    subDescription="14 Components"
    clickHolder="carouselClickHolder"
    arrowSrc="images/right-arrow 7.svg"
    />
    </Link>
    </div>
    </div>
    </>
  )
}
export default TabelLayout;
