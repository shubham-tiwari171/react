import "./Profilecard.css"

function Profilecard(props) {
    const profileData = props.data;
    function handleSeeMoreClick(e) {
        let data = profileData.filter(ele => ele.id === Number(e.target.id));
        alert(data[0].name)
        alert(JSON.stringify(data))
    }
    return (
        <>
            {
                profileData.map(
                    (item, index) => (
                        <div className="card-background" key={item.id}>
                            <div className="content">
                                <div className="left-side">
                                    <div className="card-description">
                                        <h2 className="card-description-title">{item.name}</h2>
                                        <span className="card-description-profession">{item.designation}</span>
                                        <span className="card-description-company">{item.company}</span>
                                        <p>{item.bio}</p>
                                        <button id={item.id} type="button" className="btn btn-secondary" onClick={handleSeeMoreClick}>Show More</button>
                                        <div className="follow-icon">
                                            <div className="icon"><i className="fa-brands fa-facebook fa-2xl"></i></div>
                                            <div className="icon"><i className="fa-brands fa-instagram fa-2xl"></i></div>
                                            <div className="icon"><i className="fa-brands fa-whatsapp fa-2xl"></i></div>
                                            <div className="icon"><i className="fa-brands fa-github fa-2xl"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <img src={`./${item.imagesrc}.jpg`} alt={item.name} />
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </>
    )
}
export default Profilecard;