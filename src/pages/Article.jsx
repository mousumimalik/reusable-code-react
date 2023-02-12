import React from 'react';
import SliderCom from '../component/SliderCom';

const data = [
    {
        heading: "Demo 1",
        title: "Demo Para 1",
    },
    {
        heading: "Demo 2",
        title: "Demo Para 2",
        method: {
            pet: "cat"
        }
    },
    {
        heading: "Demo 3",
        title: "Demo Para 3",
    }
]

function Article() {
  return (
    <div>
        <SliderCom data={data} />
    </div>
  )
}

export default Article;