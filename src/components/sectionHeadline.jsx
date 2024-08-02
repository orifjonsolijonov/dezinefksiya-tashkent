function sectionHeadline(datas) {
    return (
        <div className="container">
            <section className="headline">
            <h2 className="text-center text-[#343E63] font-Gilroy 
                           font-semibold text-[32px] leading-[1.3] md:text-[40px] mt-[3.2rem]">{datas.title}</h2>
            <p className="text-center text-[#666666] mt-3 text-[18px] md:max-w-[60%] mx-auto">{datas.description}</p>
            </section>
        </div>
    );
}

export default sectionHeadline;

