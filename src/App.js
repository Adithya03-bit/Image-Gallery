import React, { useEffect, useState } from 'react';
import './App.css';

const images = [
	{ id: '1', imageName: 'img1.jpg', tag: 'People' },
	{ id: '2', imageName: 'img2.jpg', tag: 'People' },
	{ id: '3', imageName: 'img3.jpg', tag: 'People' },
	{ id: '4', imageName: 'img4.jpg', tag: 'People' },
	{ id: '5', imageName: 'img5.jpg', tag: 'People' },
	{ id: '6', imageName: 'img6.jpg', tag: 'People' },
	{ id: '7', imageName: 'img6.jpg', tag: 'People' },
	{ id: '8', imageName: 'img8.jpg', tag: 'People' },
	{ id: '9', imageName: 'img9.jpg', tag: 'People' },
	{ id: '10', imageName: 'img10.jpg', tag: 'People' },
	{ id: '11', imageName: 'img11.jpg', tag: 'People' },
	{ id: '12', imageName: 'img12.jpg', tag: 'People' },
	{ id: '13', imageName: 'img13.jpg', tag: 'People' },
	{ id: '14', imageName: 'img14.jpg', tag: 'People' },
	{ id: '15', imageName: 'img15.jpg', tag: 'People' },
	{ id: '16', imageName: 'img16.jpg', tag: 'People' },
  { id: '17', imageName: 'img17.jpg', tag: 'People' },
  { id: '18', imageName: 'img18.jpg', tag: 'People' },
  { id: '19', imageName: 'img19.jpg', tag: 'People' },
  { id: '20', imageName: 'img20.jpg', tag: 'People' },
  { id: '21', imageName: 'img21.jpg', tag: 'People' },
  { id: '22', imageName: 'img22.jpg', tag: 'Himalayas' },
  { id: '23', imageName: 'img23.jpg', tag: 'Himalayas' },
  { id: '24', imageName: 'img24.jpg', tag: 'Himalayas' },
  { id: '25', imageName: 'img25.jpg', tag: 'Himalayas' },
  { id: '26', imageName: 'img26.jpg', tag: 'Himalayas' },
  { id: '27', imageName: 'img27.jpg', tag: 'Himalayas' },
  { id: '28', imageName: 'img28.jpg', tag: 'Himalayas' },
  { id: '29', imageName: 'img29.jpg', tag: 'Himalayas' },
  { id: '30', imageName: 'img30.jpg', tag: 'Himalayas' },
  { id: '31', imageName: 'img31.jpg', tag: 'Himalayas' },
  { id: '32', imageName: 'img32.jpg', tag: 'Himalayas' },
  { id: '33', imageName: 'img33.jpg', tag: 'Himalayas' },
  { id: '34', imageName: 'img34.jpg', tag: 'Himalayas' },
  { id: '35', imageName: 'img35.jpg', tag: 'Nature' },
  { id: '36', imageName: 'img36.jpg', tag: 'Nature' },
  { id: '37', imageName: 'img37.jpg', tag: 'Nature' },
  { id: '38', imageName: 'img38.jpg', tag: 'Nature' },
  { id: '39', imageName: 'img39.jpg', tag: 'Nature' },
  { id: '40', imageName: 'img40.jpg', tag: 'Nature' },
  { id: '41', imageName: 'img41.jpg', tag: 'Nature' },
  { id: '42', imageName: 'img42.jpg', tag: 'Nature' },
  { id: '43', imageName: 'img43.jpg', tag: 'Nature' },
  { id: '44', imageName: 'img44.jpg', tag: 'Nature' },
  { id: '45', imageName: 'img45.jpg', tag: 'Nature' },
  { id: '46', imageName: 'img46.jpg', tag: 'Nature' },
  { id: '47', imageName: 'img47.jpg', tag: 'Nature' },
  { id: '48', imageName: 'img48.jpg', tag: 'Nature' },
  { id: '49', imageName: 'img49.jpg', tag: 'Nature' },
  
];


function App() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect( () => {
    tag == 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(images => images.tag == tag ))
  }, [tag])

  return(
    <div className='App' handleSetTag={setTag}>
      <div className='tags'>
        <TagButton name="all" handleSetTag={setTag} tagActive={ tag == 'all' ? true : false}/>
        <TagButton name="Nature" handleSetTag={setTag} tagActive={ tag == 'Nature' ? true : false }/>
        <TagButton name="Himalayas" handleSetTag={setTag} tagActive={ tag == 'Himalayas' ? true : false}/>
        <TagButton name="People" handleSetTag={setTag} tagActive={ tag == 'People' ? true : false}/>
      </div>
      <div className='container'>
        { filteredImages.map(image => 
          <div key={image.id} className='image-card'>
            <img className="image" src={`/images/${image.imageName}`} alt=''/>
          </div>)
        }
      </div>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button className={ `tag ${tagActive ? 'active': null}`} onClick={ () => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};


export default App;