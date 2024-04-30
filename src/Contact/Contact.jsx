

const Contact = () => {
    return (
        <div>
<section className="lg:w-[1320px] md:[750px] w-[365px] mx-auto mt-10 mb-10 lg:px-30 bg-[#e5eaec]  rounded-2xl">
    <div className="text-center space-y-7 px-8">
      <h2 className="text-4xl pt-4 font-extrabold text-[#131318]">Get In Touch</h2>
      <p className="text-[#41505c]">Here is all the details for contact with us.
        <br/>
        You should contact with us in various way.</p>
      <hr className="text-[#13131833] border border-dashed"/>
    </div>


    <div className="grid grid-cols-1 lg:grid-cols-3  mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        <div className="mx-auto border-solid border-[#1313181A] rounded-2xl justify-center items-center w-[360px] lg:w-[370px] p-12 space-y-6 flex flex-col">
          <div className="bg-[#9f3050] rounded-2xl w-[320px] lg:h-[180px]  py-8 space-y-4 px-4 w-">
            <div>
              <img src="Images/Group 1171275317.png" alt=""/>
            </div>
            <div>
              <h4 className="text-gray-300 font-normal">Phone Number :</h4>
              <p className="text-[#131318] font-extrabold">(+62) 123-321-543</p>
            </div>
            </div>

          <div className="bg-[#E87722] rounded-2xl w-[320px] lg:h-[180px]  py-8 space-y-4 px-4 w-">
            <div>
              <img src="Images/Group 1171275318.png" alt=""/>
            </div>
            <div>
              <h4 className="text-gray-100 font-normal">Email :</h4>
              <p className="text-[#131318] font-extrabold">Smithsonian@gmail.com</p>
            </div>
            </div>

          <div className="bg-[#165C7D] rounded-2xl w-[320px] lg:h-[180px]  py-8 space-y-4 px-4 w-">
            <div>
              <img src="Images/Group 1171275321.png" alt=""/>
            </div>
            <div>
              <h4 className="text-gray-300 font-normal">Location :</h4>
              <p className="text-[#131318] font-extrabold">1775 Forest Oaks Drive</p>
            </div>
            </div>
          </div>
        </div>

      <div className="lg:col-span-2 w-[360px] lg:w-[830px] mx-auto mt-4">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div>
            <label className="text-[#131318] font-bold text-xl">Your Name</label>
            <input type="text" placeholder="Enter your full name" className="input input-bordered w-full mt-2 bg-[#13131805] text-[#1313184D] rounded-xl" />
          </div>
          <div>
            <label className="text-[#131318] font-bold text-xl" for="">Your Email</label>
            <input type="text" placeholder="Enter your email" className="input input-bordered w-full mt-2 bg-[#13131805] text-[#1313184D] rounded-xl" />
          </div>
          <div>
            <label className="text-[#131318] font-bold text-xl" for="">Subject</label>
            <input type="text" placeholder="Enter your subject" className="input input-bordered w-full mt-2 bg-[#13131805] text-[#1313184D] rounded-xl" />
          </div>
          <div>
            <label className="text-[#131318] font-bold text-xl" for="">Phone Number</label>
            <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full mt-2 bg-[#13131805] text-[#1313184D] rounded-xl" />
          </div>
    </div>
    <div className="mt-4">
      <label className="text-[#131318] font-bold text-xl" for="">Message</label>
      <textarea className="textarea textarea-bordered w-full mt-2 bg-[#13131805] rounded-xl text-[#1313184D]" placeholder="Write your message" rows="14"></textarea>
    </div>
    <div className="mt-2 mb-4">
      <button className="btn bg-[#FF4240] w-full border-solid text-center text-white text-xl font-bold p-2  border-[#FF4240]">Send Message</button>
    </div>
     </div>
    </div>


</section>
        </div>
    );
};

export default Contact;