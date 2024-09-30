import React from 'react';

const PhotoGallery = () => {
  const photos = [
    {
      title: "Image1",
      Image_URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gpDGkul4kz7YIZ1KQgxQGDjt-bnrYJ1xXg&s"
    },
    {
      title: "Image2",
      Image_URL: "https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg"
    },
    {
      title: "Image3",
      Image_URL: "https://www.wikihow.com/images/f/ff/General_knowledge_quiz.png"
    },
    {
      title: "Image4",
      Image_URL: "https://www.socialsciencespace.com/wp-content/uploads/student-3500990_960_720_opt.jpg"
    },
    {
      title: "Image5",
      Image_URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtReU98b-aS4kOvEeEG6Hi48wybHwhXgWNMw&s"
    },
    {
      title: "Image6",
      Image_URL: "https://europedirect.nicecotedazur.org/wp-content/uploads/2022/01/llustration-jeux-ced-1024x477.png"
    }
  ];

  return (
    <div className="App w-full md:w-[75%] lg:w-[50%] m-4">
      {/* Grid container */}
      <div className="md:grid hidden grid-cols-2 md:grid-cols-3 gap-1 ">
        {photos.map((item, index) => {
          const heightClass = index === 1 || index === 4 ? "h-64 md:h-72" : "h-40 md:h-40";
          const positionClass = index === 2 || index === 0 ? "relative top-20 md:top-32" : "";

          return (
            <a
              key={index}
              href={item.Image_URL}
              className={`w-full ${heightClass} ${positionClass}`}
            >
              <img className="w-full h-full object-cover" alt={item.title} src={item.Image_URL} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
