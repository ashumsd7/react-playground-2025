import React, { useState } from 'react';

const commentsData = [
  {
    id: 1,
    user: 'Rahul Sharma',
    text: 'Exploring the beauty of nested comments!',
    replies: [
      {
        id: 1,
        user: 'Priya Verma',
        text: 'Indeed, it adds depth to discussions.',
        replies: [
          {
            id: 1,
            user: 'Amit Patel',
            text: 'Absolutely! It’s like a conversation within a conversation.',
            replies: [
              {
                id: 1,
                user: 'Sneha Kapoor',
                text: 'Nested comments are a great way to keep track of replies.',
                replies: [
                  {
                    id: 1,
                    user: 'Vikram Singh',
                    text: 'I agree, it keeps the thread organized.',
                    replies: [],
                  },
                  {
                    id: 2,
                    user: 'Anjali Mehta',
                    text: 'Yes, it’s very user-friendly.',
                    replies: [],
                  },
                ],
              },
              {
                id: 2,
                user: 'Rohit Gupta',
                text: 'It’s like a tree of thoughts!',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        user: 'Neha Joshi',
        text: 'This feature is really helpful for discussions.',
        replies: [],
      },
    ],
  },
  {
    id: 4,
    user: 'Ashutosh',
    text: 'Loving the nested comment feature!',
    replies: [
      {
        id: 1,
        user: 'Shakti',
        text: 'It’s a game-changer for forums.',
        replies: [],
      },
      {
        id: 2,
        user: 'Shakti 2',
        text: 'Makes following conversations so much easier.',
        replies: [],
      },
    ],
  },
];



function NestedComments() {
  const [comments, setComments] = useState(commentsData);
  return (
    <div>
      <h1>Nested Comments</h1>

      <textarea
        name=''
        id=''
        cols='30'
        rows='5'
        className='my-2 w-full rounded-md border border-gray-300 p-2'
      ></textarea>
      <hr />

      <SingleComment comments={comments} />
    </div>
  );
}

export default NestedComments;

function SingleComment({ comments }) {
  return (
    <div className='border-l-2 border-gray-300'>
      {comments?.map((comment) => (
        <>
          <div key={comment.id} className='  mb-2 rounded-lg   bg-white p-2  '>
            <div className='mb-1 flex items-center'>
              <div className='mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300'>
                <span className='text-sm font-bold'>{comment.user.charAt(0)}</span>
              </div>
              <p className='font-bold'>{comment.user}</p>
            </div>
            <p>{comment.text}</p>
            <p className='text-xs'>{comment.replies?.length} replies</p>
          </div>

          {comment?.replies?.length > 0 && (
            <div className='ml-8'>
              <SingleComment key={comment.id} comments={comment?.replies} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
