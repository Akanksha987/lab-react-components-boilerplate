import "./Gallary.css"

export default function GallaryBody(props){
  const imageData = props.imageData;
  return(
    <div>
      {
        imageData.map(image=>{
          return(
            <div key={image.id} className="column">
                <h1>Kalvium Gallary</h1>
              <img src={image.img} alt=""></img>
            </div>
          )
        })
      }
    </div>
  )
}