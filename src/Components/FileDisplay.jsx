import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeletePost, GetdatafromDB } from '../redux/slices/postSlice';
import PostTitle from './PostTitle';

const FileDisplay = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feedSlice.feed);

  useEffect(() => {
    dispatch(GetdatafromDB());
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const [likes, setLikes] = useState({});
  const [reactions, setReactions] = useState({});
  const [comments, setComments] = useState({});
  const [activeReactionPost, setActiveReactionPost] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = (id) => {
    dispatch(DeletePost(id));
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: prevLikes[id] ? prevLikes[id] + 1 : 1,
    }));
  };

  const toggleReactions = (postId) => {
    setActiveReactionPost((prev) => (prev === postId ? null : postId));
  };

  const addReaction = (id, reaction) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [id]: reaction, // Set only one reaction per post
    }));
    setActiveReactionPost(null); // Close the reaction panel after selecting
  };

  const handleComment = (id, commentText) => {
    setComments((prevComments) => ({
      ...prevComments,
      [id]: [...(prevComments[id] || []), commentText],
    }));
  };

  return (
    <div className="lg:w-[80%] w-full mx-auto my-6 overflow-hidden rounded-lg">
      {feed.map((post) => (
        <div className="bg-white mb-3 border border-slate-300 rounded-lg overflow-hidden shadow-sm" key={post.id}>
          <div className="flex items-center justify-end border-b border-slate-300 p-1">
            <div className="flex items-center justify-center gap-2 h-6">
              <div className="doticon">
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleMenu}
                    className="flex items-center p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full mx-0.5"></span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full mx-0.5"></span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full mx-0.5"></span>
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                      <ul className="py-1">
                        <li
                          onClick={() => handleDelete(post.id)}
                          className="px-4 py-2 text-gray-700 cursor-pointer font-semibold hover:text-blue-400 transition-all duration-300 hover:bg-gray-100"
                        >
                          Delete Post
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="postcontent">
            <div className="p-3">
              <PostTitle content={post?.localTitle} />
            </div>
            <div className="imgvideo">
              {post.localFileName?.endsWith('.mp4') ? (
                <video loop controls muted autoPlay>
                  <source src={post?.ImageURl} type="video/mp4" />
                </video>
              ) : (
                <img src={post?.ImageURl} alt="PostedImage" />
              )}
            </div>

            {/* Like and Reaction Section */}
            <div className="p-3 flex items-center space-x-4">
              <button onClick={() => handleLike(post.id)} className="text-blue-500 hover:text-blue-700">
                👍 Like {likes[post.id] ? `(${likes[post.id]})` : ''}
              </button>

              {/* Reactions */}
              <div className="relative">
                <button
                  onClick={() => toggleReactions(post.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {reactions[post.id] || 'React'} {reactions[post.id] && `(${reactions[post.id]})`}
                </button>
                {activeReactionPost === post.id && (
                  <div className="absolute flex space-x-2 mt-2">
                    {['😍', '😂', '😢', '👍'].map((emoji) => (
                      <span
                        key={emoji}
                        onClick={() => addReaction(post.id, emoji)}
                        className="cursor-pointer hover:scale-110"
                      >
                        {emoji}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Comment Section */}
            <div className="p-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="border border-gray-300 rounded px-3 py-2 w-full"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleComment(post.id, e.target.value);
                    e.target.value = '';
                  }
                }}
              />
              <div className="mt-3">
                {comments[post.id] &&
                  comments[post.id].map((comment, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded mt-1">
                      {comment}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileDisplay;
