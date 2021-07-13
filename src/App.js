import React , {useState} from 'react';
import Card from "./Card";



function App() {
    
    const [albumData, setAlbumData] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/album/2/photos")
              .then((response) => response.json())
              .then((data) => {
                setAlbumData(data);
                
            });
    }
    

    const removeCard = (id)=> {
        
        const card = document.getElementById(`card-${id}`);
        card.style.opacity="0";
        card.style.transition="1s";

        setTimeout(
            () => {
                setAlbumData(
                    albumData.filter(data => (data.id !== id))
                );
            }
            ,
            1000);    
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <div className="fetch-container-nav">
            <button className="fetch-btn" onClick={fetchData}>
                Fetch
            </button>
            </div>
            
            <div className="album-grid">
            {
                albumData.map(
                    data => {
                        return <Card key={data.id} removeCard={removeCard} data={data} />
                    }
                )
                
            }
            </div>

            {
                <div className="total-cards">
                    
                        <p>
                        {"Total Cards : " + albumData.length}
                        </p>
                    
                </div>
            }
            
        </div>
    );
}

export default App;
