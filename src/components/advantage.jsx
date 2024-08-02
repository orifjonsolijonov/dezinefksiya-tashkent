function advantage(data) {
    return(
        <div className="advantage md:w-[30%] flex flex-col justify-center items-center text-center md:text-left md:block">
            <img src={data.imgsrc}/>
            <h4 className="advantage-title text-[24px] font-bold text-[#343E63] mt-[2rem] mb-[1rem]">{data.title}</h4>
            <p className="lowercase first-letter:uppercase text-[16px] text-[#676D83]">{data.description}</p>
        </div>
    )
}

export default advantage;