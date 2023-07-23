import React, { useEffect, useState } from "react";
import Card from "./Card";
import './app.scss'
const App = () => {
  const [posts, setPosts] = useState([]);
  const [groupData,setGroupData] = useState(null)
  const [category,setAllCategory] = useState(null);
  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        let listCategory=[]
        // let  groupData = posts && posts.length>0 &&posts.reduce((acc,obj)=>{
        //   if(listCategory.indexOf(obj.category)===-1)
        //   {
        //     listCategory.push(obj.category)
        //   }
          
        // },{})
        let categoryData=[];
        if(posts.length>0){
          posts && posts.map((ele,index)=>{
        //  console.log(ele.category)
            setGroupData(...groupData,ele.category)
  
          })
        }
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  console.log(groupData,"#$%#$@%#$");

  return (
    <div className="main-container">
        {posts.map((ele, index) => {
          // debugger

          let other = ele.htmlCode.toString();

          return (
            <div style={{ padding: "10px" }}>
              <Card ele={ele} />
            </div>
          );
        })}
    </div>
  );
};

export default App;
