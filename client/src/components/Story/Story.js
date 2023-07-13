import React, { useState } from 'react';
import styles from "./styles";
import { Card, Tooltip, Typography, Image } from 'antd';
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons";
import { useDispatch} from "react-redux";
import moment from 'moment';
import { deleteStory, likeStory } from '../../Redux/actions/stories';
const { Meta } = Card;
const { Link, Paragraph, Text } = Typography;

function Story({ story, setSelectedId }) {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(true)
  console.log(story)
  const user = JSON.parse(localStorage.getItem("profile"));
  const cardActions = [
    <div style={styles.actions}>
      <Tooltip
        placement='top'
        title='Like'
        color='magenta'
        onClick={() => { dispatch(likeStory(story._id))}}
      >
        <HeartTwoTone twoToneColor="magenta" />
        &nbsp; {story.likes.length} &nbsp;
      </Tooltip>
    </div>
    ,
    <Tooltip
      placement='top'
      title='Edit'
      color=''
    >
      <EditOutlined onClick={() => {
        setSelectedId(story._id);
       }} />
    </Tooltip>,
    <Tooltip
      placement='top'
      title='Delete'
      color='red'
    >
      <DeleteTwoTone twoToneColor="red" onClick={()=> dispatch(deleteStory(story._id))}/>
    </Tooltip>
  ]
  return (
    <Card
      style={styles.card}
      cover={<Image src={story.image} />}
      // cover={<img src="https://www.w3schools.com/images/picture.jpg" alt="Mountain" style="width:300px"/>}
      actions={
        user?.result?._id === story?.userId ?
        cardActions :
        user?.result ? 
        cardActions.slice(0,1)
        : null
      }
    >
      <Meta title={story.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "more",
          onExpand: () => {
            setExpand(true)
          },
          onEllipsis: () => {
            setExpand(false)
          }
        }}
      >
        {story.caption}
      </Paragraph>

      {expand ?
        <Link>{story.tags.split(" ").map((tag) => `#${tag}`)}</Link>
        : null
      }
      <br/>
      <Text type='secondry'>{moment(story.postDate).fromNow()}</Text>

    </Card>
  )
}

export default Story