function Contact() {
    return (
        <div className=" flex flex-col flex-start bg-white m-3 p-3 rounded-md shadow">
            <h1 className="text-start text-2xl font-bold">Contact Us</h1>
            <form>
                <label for="message" className="block text-lg font-medium font-bold text-start">Message:</label>
                <input type="text" name="message" className="block min-w-0 grow py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Write your message here..."/>
            </form>
            <button className="text-start">Send Message</button>
        </div>
    )
}

export default Contact;