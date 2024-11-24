import React from 'react';
import { useParams } from 'react-router-dom';

const blogPost = () => {
  const { postId } = useParams();
  return <div>Showing details for blogpost {postId}</div>;
};

export default BlogPost;