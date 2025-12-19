'use client';

import { useState } from 'react';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, email, message } = formData

        const { error } = await supabase
            .from('contact_messages')
            .insert([{ name, email, message }])

        if (error) {
            console.error(error)
            alert("Something went wrong. Try again.")
        } else {
            alert("Message sent!")
        }
    }

    return (
        <div id="contact" className="flex w-full justify-center items-center px-[126px] py-[135px] bg-[#B2B2B2]">
            <div className="flex flex-col justify-between w-[786px] h-[670px]">
                <p className="text-black text-center text-[48px] font-bold w-full">LET&apos;S CONNECT</p>
                <form onSubmit={handleSubmit} className="flex flex-col text-[32px] justify-between w-full h-[518px]">
                    <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#333c66] text-white/63 px-[10px] py-[10px] rounded-[10px] w-full h-fit"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[#333c66] text-white/63 px-[10px] py-[10px] rounded-[10px] w-full h-fit"
                    />
                    <textarea
                        placeholder="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-[#333c66] text-white/63 px-[10px] py-[10px] rounded-[10px] w-full h-[222px]"
                    />
                    <button className="bg-white px-[20px] py-[16px] text-black rounded-[10px]">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}