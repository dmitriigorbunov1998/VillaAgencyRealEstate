import * as React from 'react';
import SlideItem from "./SlideItem/SlideItem.tsx";
import data from '../../assets/json/MainBanner.json';
import "./MainBanner.css"

// Компонент MainBanner
const MainBanner: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            let nextIndex = (index + 1) % 3;
            setIndex(nextIndex);
        }, 4000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <div className="slide-item">
            {data.map((item, i) => (
                <SlideItem key={i} {...item} />
            ))}
        </div>
    );
};

// Экспорт функции-компонента MainBanner
export default MainBanner;