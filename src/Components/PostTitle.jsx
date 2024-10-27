import React, { useState } from 'react';

const PostTitle = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_CHARACTERS = 69; // Limit based on characters

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getShortContent = (text) => {
    return text.length > MAX_CHARACTERS ? text.slice(0, MAX_CHARACTERS) + '...' : text;
  };

  return (
    <div className="relative">
      <p className="text-gray-600">
        {isExpanded ? content : getShortContent(content)}
      </p>
      {content.length > MAX_CHARACTERS && (
        <button onClick={toggleExpand} className="text-blue-600 font-semibold hover:underline">
          {isExpanded ? '..See less' : '...See more'}
        </button>
      )}
    </div>
  );
};

export default PostTitle;
