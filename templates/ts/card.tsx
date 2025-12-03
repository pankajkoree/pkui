
const Card = ({cardTitle,cardIntro,srcImage,alternativeText}) => {
  return (
    <div>
      <h1>{cardTitle}</h1>
      <p>{cardIntro}</p>
      <img src={srcImage} alt={alternativeText} />
    </div>
  )
}

export default Card
