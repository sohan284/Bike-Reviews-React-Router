import React from 'react';

const Blogs = () => {
    return (
        <div>
      <div className='bg-blue-100 rounded-md m-5 p-3'>
      <h4 className='font-bold text-3xl text-red-600'>What is Contex API ??</h4>
            <p>Context api is a react structure that is enable us to exchange unique details ans assists in solving prop-drilling from all level.
                In an application if we want to send data from parent child then we have to use props.If we want to drill data from parent to grandchild then we can use this contex api to solve this problem.
            </p>
      </div>
      <div className='bg-blue-100 rounded-md m-5 p-3'>
      <h4 className='font-bold text-3xl text-red-600'>What is semantic tag ??</h4>
            <p>Semantic tag is HTML elements.HTML was originally created as a markup language to describe documents on the early internet.As the internet grew and was adopted by more people.its needs changed.
                Where the internet was originally intended for sharing scientific documents,now people wanted to share other things as well. As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.
            </p>
      </div>
        </div>
    );
};

export default Blogs;