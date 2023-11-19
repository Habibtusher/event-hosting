
import logo from '../../assets/image/logo.png';

const Foolter = () => {
    return (
        <div className="w-full h-[300px] bg-[#000] text-white mt-20 px-[80px] rounded-t-[30px]">
           <div className='flex justify-between pt-10 pb-10'>
              <div className="w-1/2 ">
                <div className='flex gap-4'>
                    <div className='w-[200px] h-[80px] '>
                        <div>
                        <img className='w-full h-full mb-4' src={logo} alt="" />
                        </div>
                        <p>Lorem ipsum, dolor sit </p>
                        <p>Lorem ipsum, dolor sit </p>
                    </div>
                    <div className='ml-8'>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li className='mt-3'><a href="#">Events & Experience</a></li>
                            <li className='mt-3'><a href="#">FAQs</a></li>
                            <li className='mt-3'><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className='ml-[15rem]'>
                    <h2>Subscribe to our newsletter</h2>
                    <input className='bg-black mt-3 mb-4 px-2 py-1 rounded-full border border-white' type='text' placeholder='Subscribe to our newsletter' />
                    <div>
                        <div>
                            <h2>Follow Us</h2>
                        </div>
                    </div>
                </div>
              </div>
           </div>

           <p className='mt-4 text-end text-gray-300 text-sm'>@MumbaiFestival2024. All rights reserve. 2024</p>

        </div>
    );
};

export default Foolter;