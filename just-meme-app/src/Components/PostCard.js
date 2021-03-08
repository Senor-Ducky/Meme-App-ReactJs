import React  from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
function PostCard({profilePic , image , username , timestamp , message ,liked, likes}) {
    

    function Liked (liked_) {
        const isLiked = liked_
        if(liked_){
            return(
                <div className="LikeCmtIcon red">
                    <FavoriteIcon/>
                    </div>
            )
            }
        else if (!liked_){
            return(
                <div className="LikeCmtIcon">
                    <FavoriteBorderIcon/>
                    </div>
            )
        
        }
        return(
            <div className="LikeCmtIcon">
                <FavoriteBorderIcon/>
                </div>
        )
    
    }
    
    return (
        <Card>
        <Top>
            <Avatar src={profilePic} className = "Avatar"/>
            <PostInfo>
                
                <h3>{username}</h3>
                <p>{timestamp}</p>
            </PostInfo>
        </Top>

        <Image>
        <p>{message}</p>
        <img src={image} alt = ""/>
        </Image>

        <Bottom>
            <div className= "LikeCmt ">
            <div className="LikeCmtIcon">
                <FavoriteBorderIcon/>
                </div>
                <div className="LikeCmtIcon">
                <QuestionAnswerRoundedIcon/>
                </div>
                
            </div>
            <div className="Title">
            <h4>{ likes } Likes</h4>
            
            </div>
            

        </Bottom>


        </Card>
    )
}



export default PostCard
const Card = styled.div`

margin: 0 auto;
margin-top : 15px;
flex-direction: column;
background-color: white;
border-radius: 15px;
z-index : -2;
box-shadow: 0px 5px 7px -7px rgb(0, 0, 0, 0.75);
width : 100%;

`

const Top = styled.div`
align-items : center;
display : flex;
padding : 8px;
border-bottom: solid rgb(222, 224, 224 , 0.75);
`

const PostInfo = styled.div`
margin-left: 10px;
display : flex;
flex-direction : column;
font-color : black;
h3{
    font-size : 18px;
}
p{
    font-weight : 450;
    font-size : 13px;
    color : gray;
}
`
const Bottom = styled.div`

display : flex;
flex-direction : column; 
padding : 10px;
  display : flex;
border-top: solid rgb(222, 224, 224 , 0.75);
 
 margin-top : 10px;
 .LikeCmt{
    
    display : flex;
    .LikeCmtIcon{
        color : rgb(56, 56, 56);
        margin-right : 15px;
        .red >  .MuiSvgIcon-root{
            color : rgb(252, 53, 53 );
        
        }
        
        .red{
        color : rgb(252, 53, 53 );
        }
    }
    .LikeCmtIcon:hover{
        color : rgb(222, 224, 224 , 0.75);
    }
    
 }

`

const Image = styled.div`
width : 100%;
margin-top : 10px;
p{
    padding : 10px;
}
img {

    width: 100%;
    height: auto;
    object-fit: cover;
}
`