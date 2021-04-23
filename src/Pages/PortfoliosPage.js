import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

var allCategories = ['All']

portfolios.map(item => item.category.map((i) => allCategories.push(i)));
var set = new Set(allCategories);
allCategories =[...set]
function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    console.log("printing categories")
    console.log(allCategories)


    console.log(categories)
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category1) =>{
        if(category1 === 'All'){
            setMenuItems(portfolios)
            return;
        }
        var fd = []
        for (var i = 0; i < portfolios.length; i++) {
            for (var j = 0; j < portfolios[i].category.length; j++) {
                if (portfolios[i].category[j] === category1) {
                    fd.push(portfolios[i]);
                    break;
                }
            }
        }
        
        const filteredData = fd;
        console.log("printing after filter")
        console.log(filteredData)
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projects'} span={'Projects'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
