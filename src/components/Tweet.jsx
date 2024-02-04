import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";


function Tweet(props) {
  console.log(props);
  // const{tweet:{message, timestamp,user:{handle,image,name}}}=props
  return (
    <div className="tweet">
     <ProfileImage image={props.tweet.user.image} />
      {/* <img
        src={image}
        className="profile"
        alt="profile"
      /> */}

      <div className="body">
        <div className="top">
        <User name={props.tweet.user.name} handle={props.tweet.user.handle} />
          {/* <span className="user">
            <span className="name">{name}</span>
            <span className="handle">{handle}</span>
          </span> */}
        <Timestamp time={props.tweet.timestamp} />
          {/* <span className="timestamp">{timestamp}</span> */}
        </div>
        {/* <p className="message">
         {message}
        </p> */}
        <Message message={props.tweet.message} />

        {/* <div className="actions"> */}
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i> */}
        {/* </div> */}
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
