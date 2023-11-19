import EventSlider from "./EventSlider";


const EventSection = () => {
    return (
        <div className="mb-12">
            <div className="w-[1080px] h-[300px] border-2 rounded-[32px] border-[#707070] m-auto ">
                <div className="flex flex-row justify-between px-2 mt-10 w-[992px] m-auto ">
                    <h2 className="font-bold text-[36px]">Event & Experiences</h2>
                <button className="bg-black text-white w-[205px] py-2 px-1 rounded-md">Know More</button>
                </div>                
            </div>
            <EventSlider />
        </div>
    );
};

export default EventSection;