import { Row, Col, Spin } from 'antd'
import React from 'react'
import Story from '../Story/Story'
import { useSelector } from 'react-redux'
function StoryList({setSelectedId}) {

  const stories = useSelector((state)=> state.stories);
  
  let stories1 = [{
    _id: 1,
    caption: "test",
    username: "test1",
    image:"https://www.w3schools.com/images/picture.jpg",
    likes:2,
    tags:"hi hello how are you",

  }]
  console.log("stories", stories)
  return !stories.length ? 
  <div style={{textAlign: "center"}}>
    <Spin size="large" />
  </div>:(
   <Row gutter={[48, 32]} >
    {stories.map((story)=>{
      return(
        <Col key={story._id} lg={24} xl={12} xxl={8}>
         <Story setSelectedId={setSelectedId} story={story}/> 
        </Col>
      )
    })}
    {/* <Story/>
    <Story/> */}
   </Row>
  )
}

export default StoryList