import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedingImg.png";
import intagram from "../assets/instImg.png";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col p-5 md:p-20 justify-between">
        {/* first contaienr--------------------------------- */}
        <div>
          <h1 className="text-center md:text-[30px]  mb-5 md:mb-11  text-[24px] lg:text-[36px] font-semibold ">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#53ADE4] to-[#277BA8]">
              Vereda digital Technology
            </span>
          </h1>
        </div>

        {/* second container -------------------------------------------*/}

        <div className=" w-full h-auto  flex flex-col md:flex-row justify-around pt-5 md:pt-14 lg:pt-16">
          <div className="w-full text-start h-auto md:w-1/2 p-3 md:p-6 shadow-2xl rounded-2xl  ">
            <h1 className="font-semibold text-3xl">Get in touch</h1>
            <p className="mt-4 mb-5 md:mb-10">
              Our friendly team would love to hear from you.
            </p>

            {/*   /*  className="my-5 md:my-7 m-5 md:m-6 " */}
            <form action="#">
              {/*    first name and last name-------------------- */}
              <div className="flex flex-col md:flex-row  justify-between">
                <div className=" gap-4 md:gap-6">
                  <label htmlFor="#">First Name</label>
                  <br />
                  <input
                    className="p-3 w-full md:w-[95%] rounded border"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div>
                  <label htmlFor="#">Last Name</label>
                  <br />
                  <input
                    className="p-3 w-full  md:w-[95%] rounded border"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* email -----------------------------------------------------*/}

              <div>
                <label>Email</label>
                <br />
                <input
                  className="p-3 rounded border w-full md:w-[100%]"
                  type="text"
                  placeholder="You@company.com"
                />
              </div>

              {/*     phone number------------------------ */}

              <div>
                <label>Phone Number</label>
                <br />
                <input
                  className="p-3 rounded border w-full md:w-[95%]"
                  type="text"
                  placeholder="+1 (550)"
                />
              </div>

              {/*    message     ------------------------------------       */}

              <div>
                <lable>Message</lable>
                <br />
                <textarea className="p-3 rounded border w-full md:w-[95%] "></textarea>
              </div>

              <div className="my-2 md:my-5">
                <p>
                  You agree to our friendly{" "}
                  <span className="underline">privacy policy</span>
                </p>
              </div>

              {/*    button --------------------------*/}

              <div className="p-2 rounded border  w-full md:w-[95%] text-center bg-gradient-to-r from-[#277BA8] to-[#277BA8]">
                <button>Send message</button>
              </div>
            </form>
          </div>

          <div className="bg-gradient-to-r from-[#277BA8] to-[#277BA8] text-center w-full h-auto md:w-1/2 rounded-2xl">
            <div className="flex flex-col p-5 md:p-16 lg:pt-40 text-center gap-5">
              <div className="flex flex-row gap-5 text-center ">
                <img
                  className="w-16 md:w-14 lg:w-8 h-auto bg-gray-100 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxH9XmxELRdQpAmHgS1xbuxbdvoPx12b0t2ciGuqtacep26_RMGECKg6HC-D7YRrWsA4&usqp=CAU"
                  alt=""
                />
                <div
                  className="text-start 
                 "
                >
                  <p className="text-gray-200 font-semibold">EMAIL US</p>
                  <p className="text-white">Support@vereda.co.in</p>
                </div>
              </div>

              <div className="flex flex-row gap-5 text-center ">
                <img
                  className="w-16 md:w-14 lg:w-8 h-auto bg-gray-100 rounded-full"
                  src="https://png.pngtree.com/png-vector/20190120/ourmid/pngtree-calling-vector-icon-png-image_470733.jpg"
                  alt=""
                />
                <div
                  className="text-start 
                 "
                >
                  <p className="text-gray-200 font-semibold">PHONE NUMBER</p>
                  <p className="text-white">+91 9570994444</p>
                </div>
              </div>

              <div className="flex flex-row gap-5 text-center ">
                <img
                  className="w-16 md:w-14 lg:w-8 h-auto bg-gray-100 rounded-full"
                  src="https://w7.pngwing.com/pngs/561/324/png-transparent-location-address-position-linear-icon-location-address-position-thumbnail.png"
                  alt=""
                />
                <div
                  className="text-start 
                 "
                >
                  <p className="text-gray-200 font-semibold ">ADDRESS</p>
                  <p className="text-white">
                    Sinha Library road , Venture park <br /> patna
                  </p>
                </div>
              </div>
            </div>

            {/* images------------------------------------ */}
            <div className="mt-5 md:mt-10 text-center">
              <p className="md:mr-36 lg:mr-36 text-white">-connect with us:</p>
              <div className="flex flex-row md:flex-row ml-16 gap-4 md:gap-5  lg:ml-36  mt-1 md:mt-3">
                <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={facebook}
                  alt=""
                />
                <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={twitter}
                  alt=""
                />
                <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={linkedin}
                  alt=""
                />
                <img
                  className="w-7 md:w-14 lg:w-8 h-auto"
                  src={intagram}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
