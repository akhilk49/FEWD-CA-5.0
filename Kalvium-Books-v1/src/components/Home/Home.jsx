// Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import libbackimg from '../../assets/libbackimg.avif';
import './Home.css';
import Modal from '../Modal/Modal';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageObject = {
    src: libbackimg,
    alt: 'Logo',
    id: 'logo',
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
        headers: {
          'Authorization': 'whatever-you-want',
        },
      });

      setAllData(response.data.books);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filteredResults = allData.filter((item) => {
      const itemTitle = item.title || '';
      return itemTitle.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredData(filteredResults);
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, allData]);

  return (
    <div className="parenthome">
      <h1 id="tagline">"Discover the joy of reading at Kalvium Books. Our shelves are filled with stories waiting to be explored."</h1>
      <input
        type="text"
        id="searchinput"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <img {...imageObject} id="libback" />
      <div className="searchresults">
        {filteredData.map((item) => (
          <div key={item.id} className="searchrp" onClick={() => handleOpenModal(item)}>
            <div className="searchimgcon">
              {item.imageLinks && item.imageLinks.smallThumbnail && (
                <img src={item.imageLinks.smallThumbnail} alt="" />
              )}
            </div>
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>

      {isModalOpen && selectedBook && (
        <Modal
          title={selectedBook.title}
          description={selectedBook.description}
          imageUrl={selectedBook.imageLinks?.thumbnail}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Home;
