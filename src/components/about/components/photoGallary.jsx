'use client';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if needed
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function PhotoGallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

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
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {/* Grid container */}
                <div className="grid grid-cols-3 gap-4 m-4">
                    {/* Map through the photos array */}
                    {photos.map((item, index) => {
                        // Define classes for height and position
                        const heightClass = index === 1 || index === 4 ? "h-72" : "h-40";
                        const positionClass = index === 2 || index === 0 ? "relative top-32 left-0" : "";

                        // for testing purposes
                        // const borderClass = index === 2 || index === 0 ? "border-emerald-600" : "border-red-700";

                        return (
                            <a
                                key={index}
                                href={item.Image_URL}
                                className={`w-40 ${heightClass} ${positionClass} `}
                            >
                                <img className="w-full h-full object-cover" alt={item.title} src={item.Image_URL} />
                                {/* <p>{index}</p> */}
                            </a>
                        );
                    })}
                </div>
            </LightGallery>
        </div>
    );
}

export default PhotoGallery;
