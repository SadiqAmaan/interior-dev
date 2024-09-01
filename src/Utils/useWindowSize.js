import { useState, useEffect } from 'react';

const UseWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        
            function handleResize() {
                if (typeof window !== 'undefined'){
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }
                
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    , []);

    return windowSize;
}

export default UseWindowSize;