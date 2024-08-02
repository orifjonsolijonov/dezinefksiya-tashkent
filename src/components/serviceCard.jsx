import arrow from "../assets/images/circle_arrow.svg"
function serviceCard(data) {
    return (
        <div className={data.classname}>
            <img src={arrow} alt="arrow" />
            <h4>{data.txt}</h4>
        </div>
    )
}

export default serviceCard;