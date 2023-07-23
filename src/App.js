import React, { useEffect, useState, useMemo } from "react";
import Card from "./Card";
import "./app.scss";
import Pagination from "./Paginations";
let PageSize = 10;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [groupData, setGroupData] = useState(null);
  const [category, setAllCategory] = useState(null);
  const [categoryList, SetCategoryList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;
  const currentTableData =
    posts && posts.length > 0 && posts.slice(firstPageIndex, lastPageIndex);
  // }, []);

  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        // let  groupData = posts && posts.length>0 &&posts.reduce((acc,obj)=>{
        //   if(listCategory.indexOf(obj.category)===-1)
        //   {
        //     listCategory.push(obj.category)
        //   }

        // },{})
        let categoryData = [];
        if (posts.length > 0) {
          posts &&
            posts.map((ele, index) => {
              //  console.log(ele.category)
              setGroupData(...groupData, ele.category);
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const isMobile = () => {
    let check = false;

    (function (a) {
      if (
        /webOS|Android|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
          a
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  };
  useEffect(() => {
    let CategoryArray = [];
    posts &&
      posts.map((ele, index) => {
        // debugger
        if (ele.category ) {
          
            let obj ={
              Category : ele.category

            }
            SetCategoryList((categoryList) => [...categoryList, obj]);
          
        }
      });
  }, []);
  return (
    
    <>
    {currentTableData.length>0 ? '' : <span className="Loading">Loading....</span>}
      {currentTableData && <h1>Awesome list of Emojis </h1>}
      {<div className={isMobile() ? "main-container main-mob" : "main-container"}>
        {currentTableData.length > 0 &&
          currentTableData.map((ele, index) => {
            return (
              <div style={{ padding: "10px" }}>
                <Card ele={ele} isMobile={isMobile()} />
              </div>
            );
          })}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={posts.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
}
    </>
  );
};

export default App;
