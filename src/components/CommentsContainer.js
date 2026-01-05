const commentsData = [
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Random User",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Random User",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Random User",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Random User",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Random User",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Random User",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Random User",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentCard = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-8 h-8 rounded-full"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      />
      <div className="ml-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        <div className="pl-4 border-l-2 ml-2">
          {replies &&
            replies.map((reply, index) => (
              <CommentCard key={index} data={reply} />
            ))}
        </div>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2 border border-gray-300 rounded-lg text-left">
      <h3 className="font-bold mb-2">Comments</h3>
      <div>
        {commentsData.map((comment, index) => (
          <CommentCard key={index} data={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
