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
        setAlbumData(
            albumData.filter(
            data => (data.id !== id)
        ))
    }
    
    return (
        <div style={{textAlign:"center"}}>
            <button className="fetch-btn" onClick={fetchData}>
                Fetch
            </button>
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
                <p className="total-cards">
                    {
                        "Total Cards : " + albumData.length
                    }
                </p>
            }
            
        </div>
    );
}

export default App;
