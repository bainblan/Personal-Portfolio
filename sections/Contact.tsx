export default function Contact() {
    return (
        <div className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col justify-between w-[786px] h-[629px]">
                <p className="text-black text-center text-[48px] font-bold w-full">LET&apos;S CONNECT</p>
                <div className="flex flex-col border-2 border-dashed text-[32px] justify-between w-full h-[518px]">
                    <div className="bg-[#333c66] px-[10px] py-[10px] rounded-[10px] w-full h-fit">
                        Name
                    </div>
                    <div className="bg-[#333c66] px-[10px] py-[10px] rounded-[10px] w-full h-fit">
                        Email
                    </div>
                    <div className="bg-[#333c66] px-[10px] py-[10px] rounded-[10px] w-full h-222">
                        Message
                    </div>
                    <button className="bg-white px-[20px] py-[16px] text-black rounded-[10px]">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}