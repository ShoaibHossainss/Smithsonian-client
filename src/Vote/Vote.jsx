import vote from '../../src/assets/usa-today-10best-logo-2024.webp'

const Vote = () => {
    return (
        <div className='lg:flex flex-cols bg-[#165C7D] lg:w-[1320px] md:[750px] w-full mx-auto rounded-2xl mb-10'>
           <div className='text-center items-center mx-auto lg:p-5 lg:ml-1 ml-16 pt-4'>
        <img src={vote} alt="" />
           </div>
           <div className='lg:items-center text-center lg:text-left mx-auto lg:mt-20 mt-4 lg:ml-4 lg:pl-4 px-4 lg:pb-1 pb-4'>
            <h3 className='text-white lg:text-4xl text-xl mb-2'>Thank you for voting!</h3>
            <p className='text-white lg:text-xl'>Smithsonian has been nominated for Best Tourism Management Website by USA Today 10 Best Readers Choice 2024 Awards.
            <br />
            Thank you to everyone who voted! </p>
            </div> 
        </div>
    );
};

export default Vote;