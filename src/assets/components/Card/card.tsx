import "./card.css"

const Card = () => {
     return<>
     <div className="container">
      <div>
        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt=""  className="card-img"/>
      </div>

      <div className="card-section">
        <h1>Title</h1>
        <h2>Secondary Text</h2>
        <p>lorem ipsu</p>
      </div>
      <hr />
      <div className="info-section">
          <div>
               <h3>Subtitle</h3>
          </div>
        <div className="container-list">
          <ul>
            <li><a href="" className="card-list">Item 1</a></li>
            <li><a href=""className="card-list">Item 2</a></li>
            <li><a href=""className="card-list">Item 3</a></li>
            <li><a href=""className="card-list">Item 4</a></li>
          </ul>
        </div>
        <button>ACTION 1</button>
      </div>
     </div>
     </>
}

export default Card