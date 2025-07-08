// BELOW is how you get local images... make sure you save the images to the assets folder for now
import memes from '../assets/meme-collage3.jpg'

function Main() {

  return (
    <main role="main" className="row">
      <HeroImage />
    </main>
  )
}

function HeroImage() {

  return (
    <div className="col-12">
        {/* Reference the local image variable */}
      <img src={memes} className="img-fluid" alt="" />
    </div>
  )
}

export default Main