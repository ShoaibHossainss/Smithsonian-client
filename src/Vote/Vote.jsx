import vote from '../../src/assets/usa-today-10best-logo-2024.webp'

const Vote = () => {
    return (
        <div className='flex bg-[#165C7D] lg:w-[1320px] md:[750px] w-[365px] mx-auto rounded-2xl mb-10'>
           <div className='text-center items-center mx-auto p-5'>
        <img src={vote} alt="" />
           </div>
           <div className='items-center mx-auto mt-20 ml-4 pl-4'>
            <h3 className='text-white text-4xl mb-2'>Thank you for voting!</h3>
            <p className='text-white text-xl'>Smithsonian has been nominated for Best Tourism Management Website by USA Today 10 Best Readers Choice 2024 Awards.
            <br />
            Thank you to everyone who voted! </p>
            </div> 
        </div>
    );
};

export default Vote;