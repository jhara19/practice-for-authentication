import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';

import Header from './Header';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className=''>
           <Header></Header>
           <h1>All categories: {categories.length}</h1>
           <div>
            {
                categories.map(category =><p key={category.id}>

                    <Link to={`/category/:${category.id}`}>{category.name}</Link>
                </p>
            
                )
            }
           </div>
        </div>
    );
};

export default Home;