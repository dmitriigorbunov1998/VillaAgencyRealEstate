import * as React from 'react';
import "./SlideItem.css"

// Интерфейс для пропсов компонента SlideItem
interface SlideItemProps {
    backgroundImage: string;
    city: string;
    country: string;
    title: string;
}

// Компонент SlideItem
const SlideItem: React.FC<SlideItemProps> = ({ backgroundImage, city, country, title }) => {
    return (
        <div className="item-container">
            <div className="item-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <div className="item-info">
                <span className="item-location">{city}, <em>{country}</em></span>
                <h2 className="item-title">{title}</h2>
            </div>
        </div>
    );
};

// Экспорт функции-компонента MainBanner
export default SlideItem;