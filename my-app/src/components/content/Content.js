
function Content(props) {
    let content = props.data;
    return (
        <div className="content">
            <h1>Benifits if using react....</h1>
            <ol style={{ marginLeft: "70px" }}>
                {content.map((ele, index) => <li key={index}>{ele}</li>)}
            </ol>
        </div>)
}
export default Content;