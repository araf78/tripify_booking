import "./feature.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://images.unsplash.com/photo-1616350290323-6ab0c84a541c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3Vpbm5lc3MlMjBzdG9yZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="featuredTitles">
                <span className="featuredTitlesName">Guinness</span>
                <span className="featuredTitlesProperties">120 properties</span>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="featuredTitles">
                <span className="featuredTitlesName">Barcelona</span>
                <span className="featuredTitlesProperties">430 properties</span>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://images.unsplash.com/photo-1647456218646-e8ed1179e20f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhamVrJTIwdmFsbGV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="featuredTitles">
                <span className="featuredTitlesName">Sajek Valley</span>
                <span className="featuredTitlesProperties">300 properties</span>
            </div>
        </div>
    </div>
  )
}

export default Featured