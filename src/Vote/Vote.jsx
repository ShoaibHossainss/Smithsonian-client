import vote from '../../src/assets/usa-today-10best-logo-2024.webp'

const Vote = () => {
    return (
        <div className='flex bg-[#005fcc] mx-auto'>
           <div>
        <img src={vote} alt="" />
           </div>
           <div>
            <h3 className='text-white'>Thank you for voting!</h3>
            <p className='text-white'>Smithsonian has been nominated for Best Tourism Management Website by USA Today 10 Best Readers Choice 2024 Awards.
            <br />
            Thank you to everyone who voted! </p>
            </div> 
        </div>
    );
};

export default Vote;