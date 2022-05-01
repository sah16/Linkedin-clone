import React, {forwardRef} from 'react'
import { Avatar } from '@mui/material';
import "./Post.css";
import InputOption from './InputOption';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Post =forwardRef(( {name , description, message , photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src ={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description} </p>
            </div>
        </div>
        <div className="post__body">
            <p> {message} </p>
        </div>

        <div className="post__buttons">
            <InputOption Icon ={ThumbUpOffAltOutlinedIcon} title= "Like" color="gray" />
            <InputOption Icon ={ChatOutlinedIcon} title= "Comment" color="gray" />
            <InputOption Icon ={ShareOutlinedIcon} title= "Share" color="gray" />
            <InputOption Icon ={SendRoundedIcon} title= "Send" color="gray" />
            
        </div>

    </div>
  )
})

export default Post