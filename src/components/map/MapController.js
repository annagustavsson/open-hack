import React, { useState, useEffect } from "react";

function MapController() {

    const [emission, setEmission] = useState("100");

    useEffect(() => {  
    }, [emission]);

    const updateEmission = () => {
        setEmission("EttJätteStortTal")
    }

return (
    <div>This is from LeftSlideBarController {emission}</div>

)
}

export default MapController